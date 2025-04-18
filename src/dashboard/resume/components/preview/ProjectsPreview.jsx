import React from 'react'

function ProjectsPreview({ resumeInfo }) {
  return (
    <div className='my-6'>
      <h2
        className='text-center font-bold text-sm mb-2'
        style={{
          color: resumeInfo?.themeColor
        }}
      >
        Projects
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor
        }}
      />

      {resumeInfo?.Projects?.map((project, index) => (
        <div key={index} className='my-5'>
          <div className='flex justify-between items-center'>
            <h2
              className='text-sm font-bold'
              style={{
                color: resumeInfo?.themeColor
              }}
            >
              {project?.projectName}
            </h2>
            {project?.githubLink && (
              <a
                href={project.githubLink}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-bold hover:underline'
                style={{
                  color: resumeInfo?.themeColor
                }}
              >
                GitHub
              </a>
            )}
          </div>

          <div
            className='text-xs my-2'
            dangerouslySetInnerHTML={{ __html: project?.projectDescription }}
          />
        </div>
      ))}
    </div>
  )
}

export default ProjectsPreview
