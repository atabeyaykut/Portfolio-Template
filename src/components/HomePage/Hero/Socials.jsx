import React from 'react'
import Social from './Social'

function Socials({ hero }) {

    return (
        <nav aria-label="Social Media Links">
            <ul className='flex gap-1'>
                {hero.socials.map((social, index) => (
                    <Social social={social} key={index} />
                ))}
            </ul>
        </nav>
    )
}

export default Socials
