import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Socials from './Socials'
import Cta from './cta';
import Greetings from './Greetings';

function Hero() {

    const { user } = useUser();

    return (
        <section className='flex flex-row items-center w-full h-full pt-4'>
            <div className='flex-2 flex flex-col gap-y-4 text-xl/4 tracking-tight pl-20 pb-6'>

                <Greetings hero={user.heroSection} />
                <Socials hero={user.heroSection} />
                <Cta hero={user.heroSection} />

            </div>

            <div className='flex-1'>
                <img
                    src={`/assets/${user.heroSection.profileImage}`}
                    alt={`Profile image of ${user.name}`}
                    className="size-[240px] object-cover rounded-3xl shadow-[-1rem_-1rem_0_0.1rem_rgba(233,37,119,1)] justify-self-start"
                />
            </div>
        </section>
    )
}

export default Hero;
