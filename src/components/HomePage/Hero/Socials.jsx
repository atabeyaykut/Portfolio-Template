import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Social from './Social'

function Socials() {

    const { user } = useUser()

    return (
        <nav aria-label="Social Media Links">
            <ul className='flex gap-1'>
                {user.heroSection.socials.map((social, index) => (
                    <Social social={social} key={index} />
                ))}
            </ul>
        </nav>
    )
}

export default Socials
