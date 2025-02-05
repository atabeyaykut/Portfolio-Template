import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Skill from './Skill'

function Skills() {

    const { user } = useUser()

    return (
        <div className='flex flex-col items-center gap-6 text-3xl'>
            <h5 className='font-semibold'>{user.skillsSection.title}</h5>
            <ul className='flex flex-row gap-4 justify-center aling-center'>
                {user.skillsSection.skills.map((skill, index) => (
                    <Skill skill={skill} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default Skills 