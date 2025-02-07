import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Skill from './Skill'

function Skills() {
    const { user } = useUser()

    return (
        <section
            className='flex flex-col items-center gap-4 md:gap-6 py-8'
            aria-labelledby="skills-heading"
        >
            <h2
                id="skills-heading"
                className='text-2xl md:text-3xl font-semibold'
            >
                {user.skillsSection.title}
            </h2>

            <ul
                className='flex flex-row flex-wrap justify-center gap-4 md:gap-6 px-4'
                role="list"
                aria-label="Technical skills"
            >
                {user.skillsSection.skills.map((skill, index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </ul>
        </section>
    )
}

export default Skills 