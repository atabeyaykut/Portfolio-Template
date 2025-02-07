import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Project from './Project'

function Projects() {
    const { user } = useUser()

    return (
        <section
            className='container mx-auto px-4 sm:px-6 lg:px-10 py-8 md:py-12'
            aria-labelledby="projects-heading"
        >
            <h2
                id="projects-heading"
                className='text-2xl md:text-3xl font-semibold text-center mb-6 md:mb-8'
            >
                {user.projects.title}
            </h2>

            <div
                className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8'
                role="list"
                aria-label="Projects showcase"
            >
                {Object.values(user.projects.content).map((project, index) => (
                    <Project project={project} key={index} />
                ))}
            </div>
        </section>
    )
}

export default Projects