import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Socials from './Socials';

function Hero() {

    const { user } = useUser();

    return (
        <section className='flex flex-row items-center w-full h-full border-2 border-solid'>
            <div className='flex-2 flex-col border-2 border-solid text-2xl'>
                <h1>{user.heroSection.greeting}</h1>
                <h2 className='font-semibold text-3xl'>{user.heroSection.intro}</h2>

                <Socials />

                <div
                    dangerouslySetInnerHTML={{
                        __html: user.heroSection.ctaHTML
                    }}
                    role="contentinfo"
                    aria-labelledby="cta-message"
                />
            </div>

            <div className='flex-1'>
                <img
                    src={`/assets/${user.heroSection.profileImage}`}
                    alt={`Profile image of ${user.name}`}
                    className="size-60 object-cover rounded-3xl shadow-[-1rem_-1rem_0_0.1rem_rgba(233,37,119,1)] justify-self-center"
                />
            </div>
        </section>
    )
}

export default Hero;
