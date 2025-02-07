import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Socials from './Socials'
import Cta from './cta';
import Greetings from './Greetings';

function Hero() {
    const { user } = useUser();

    return (
        <section
            className={`
                flex 
                flex-col-reverse 
                md:flex-row 
                items-center 
                w-full 
                h-full 
                pt-4
                gap-8
                md:gap-4
            `}
            aria-label="Introduction Section"
        >
            <div className='
                flex-1
                flex 
                flex-col 
                gap-y-4 
                text-base
                sm:text-lg
                md:text-xl 
                text-center
                md:text-left
                md:pl-8
                lg:pl-20 
                pb-6
            '>
                <h1 className="sr-only">Ata - Full Stack Developer Portfolio</h1>
                <Greetings hero={user.heroSection} />
                <Socials hero={user.heroSection} />
                <Cta hero={user.heroSection} />
            </div>

            <div className='flex-1 flex justify-center md:justify-center'>
                <img
                    src={`/assets/${user.heroSection.profileImage}`}
                    alt={`Profile image of ${user.name}`}
                    className="
                        w-48 
                        h-48 
                        md:w-60 
                        md:h-60 
                        object-cover 
                        rounded-3xl 
                        shadow-[-0.5rem_-0.5rem_0_0.1rem_rgba(233,37,119,1)]
                        md:shadow-[-1rem_-1rem_0_0.1rem_rgba(233,37,119,1)]
                    "
                    loading="eager"
                    width="240"
                    height="240"
                />
            </div>
        </section>
    )
}

export default Hero;
