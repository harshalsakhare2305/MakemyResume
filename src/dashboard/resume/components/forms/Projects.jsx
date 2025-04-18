import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useContext, useEffect, useState } from 'react'
import RichTextEditor from '../RichTextEditor'
import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import { useParams } from 'react-router-dom'
import GlobalApi from './../../../../../service/GlobalApi'
import { toast } from 'sonner'
import { LoaderCircle } from 'lucide-react'

const defaultProject = {
    projectName: '',
    projectDescription: '',
    githubLink: '',
};

function Projects() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [projectList, setProjectList] = useState(resumeInfo?.Projects || []);
    const [promptList, setPromptList] = useState(
        resumeInfo?.Projects?.map(() => '') || []
    );
    const params = useParams();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (resumeInfo?.Projects && resumeInfo.Projects.length > 0) {
            setProjectList(resumeInfo.Projects);
            setPromptList(resumeInfo.Projects.map(() => ''));
        }
    }, [resumeInfo]);

    const handleChange = (index, event) => {
        const newProjects = [...projectList];
        const { name, value } = event.target;
        newProjects[index][name] = value;
        setProjectList(newProjects);
    };

    const handlePromptChange = (index, event) => {
        const newPrompts = [...promptList];
        newPrompts[index] = event.target.value;
        setPromptList(newPrompts);
    };

    const AddNewProject = () => {
        setProjectList([...projectList, { ...defaultProject }]);
        setPromptList([...promptList, '']);
    };

    const RemoveProject = () => {
        if (projectList.length > 1) {
            setProjectList(prev => prev.slice(0, -1));
            setPromptList(prev => prev.slice(0, -1));
        }
    };

    const handleRichTextEditor = (e, name, index) => {
        const newProjects = [...projectList];
        newProjects[index][name] = e.target.value;
        setProjectList(newProjects);
    };

    useEffect(() => {
        setResumeInfo({
            ...resumeInfo,
            Projects: projectList,
        });
    }, [projectList]);

    const onSave = () => {
        setLoading(true);
        const data = {
            data: {
                Projects: projectList.map(({ id, prompt, ...rest }) => rest), // skip prompt if it somehow exists
            },
        };

        GlobalApi.UpdateResumeDetail(params?.resumeId, data).then(
            () => {
                setLoading(false);
                toast('Details updated!');
            },
            () => setLoading(false)
        );
    };

    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
                <h2 className="font-bold text-lg">Projects</h2>
                <p>Add your previous projects</p>

                {projectList.map((item, index) => (
                    <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
                        <div>
                            <label className="text-xs">Project Name</label>
                            <Input
                                name="projectName"
                                onChange={(event) => handleChange(index, event)}
                                defaultValue={item?.projectName}
                            />
                        </div>
                        <div>
                            <label className="text-xs">GitHub Link</label>
                            <Input
                                name="githubLink"
                                onChange={(event) => handleChange(index, event)}
                                defaultValue={item?.githubLink}
                            />
                        </div>
                        <div className="col-span-2">
                            <label className="text-xs">Prompt</label>
                            <textarea
                                name="prompt"
                                className="w-full mt-1 p-2 border rounded-md text-sm"
                                rows={3}
                                value={promptList[index] || ''}
                                onChange={(e) => handlePromptChange(index, e)}
                            />
                        </div>
                        <div className="col-span-2">
                            <RichTextEditor
                                index={index}
                                defaultValue={item?.projectDescription}
                                onRichTextEditorChange={(event) =>
                                    handleRichTextEditor(event, 'projectDescription', index)
                                }
                            />
                        </div>
                    </div>
                ))}

                <div className="flex justify-between mt-4">
                    <div className="flex gap-2">
                        <Button variant="outline" onClick={AddNewProject} className="text-primary">
                            + Add More Project
                        </Button>
                        <Button variant="outline" onClick={RemoveProject} className="text-primary">
                            - Remove
                        </Button>
                    </div>
                    <Button disabled={loading} onClick={onSave}>
                        {loading ? <LoaderCircle className="animate-spin" /> : 'Save'}
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
