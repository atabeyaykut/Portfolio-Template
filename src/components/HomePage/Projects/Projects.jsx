import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Project from './Project'

function Projects() {
    const { user } = useUser()

    return (
        <div className='container mx-auto px-10 py-12'>
            <h2 className='text-3xl font-semibold text-center pb-4 mb-8'>{user.projects.title}</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {Object.values(user.projects.content).map((project, index) => (
                    <Project project={project} key={index} />
                ))
                }
            </div>
        </div>
    )
}

export default Projects