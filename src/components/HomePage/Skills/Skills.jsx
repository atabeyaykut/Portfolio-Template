import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Skill from './Skill'

function Skills() {
    const { user } = useUser()

    return (
        <section
            className='flex flex-col items-center gap-6 text-3xl'
            aria-labelledby="skills-heading"
        >
            <h2
                id="skills-heading"
                className='font-semibold'
            >
                {user.skillsSection.title}
            </h2>

            <ul
                className='flex flex-row gap-4 justify-center aling-center'
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