import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Project from './Project'

function Projects() {
    const { user } = useUser()

    return (
        <section
            className='container mx-auto px-10 py-12'
            aria-labelledby="projects-heading"
        >
            <h2
                id="projects-heading"
                className='text-3xl font-semibold text-center pb- mb-8'
            >
                {user.projects.title}
            </h2>

            <div
                className='grid grid-cols-1 md:grid-cols-2 gap-8'
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