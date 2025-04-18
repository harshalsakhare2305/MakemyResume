import Header from '@/components/custom/Header'
import { UserButton } from '@clerk/clerk-react'
import { AtomIcon, Edit, Share2 } from 'lucide-react'
import React from 'react'

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header stays at the top */}
      <Header />
      
      {/* Main content centered */}
      <div className="flex-grow flex items-center justify-center text-center py-8 px-4 mx-auto max-w-screen-xl">
        <div>
          {/* Website Name in Large Font */}
          <h1 className="mb-4 text-6xl font-extrabold tracking-tight leading-none text-gray-900 md:text-7xl lg:text-8xl dark:text-white">
            MakemyResume
          </h1>
          
          {/* Build Your Resume Heading with reduced size */}
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-4xl dark:text-white">
            Build Your Resume <span className="text-primary">With AI</span>
          </h2>
          
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Effortlessly Craft a Standout Resume with Our AI-Powered Builder
          </p>
          
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="/dashboard"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          
          <div className="mt-8 text-lg text-gray-600">
            <p>
              With our AI-powered resume builder, you can create a professional, customized resume in no time.
              Whether you're looking for your first job or an experienced professional, our tool will help you
              stand out to recruiters.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
