import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import Socials from './Socials';

function Hero() {

    const { user } = useUser();

    return (
        <section className='flex flex-row items-center w-full h-full pt-4'>
            <div className='flex-2 flex flex-col gap-y-4 text-xl/4 tracking-tight pl-20 pb-6'>
                <h1>{user.heroSection.greeting}</h1>
                <h2 className='font-semibold text-2xl/7 w-148'>{user.heroSection.intro}</h2>

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
                    className="size-[240px] object-cover rounded-3xl shadow-[-1rem_-1rem_0_0.1rem_rgba(233,37,119,1)] justify-self-start"
                />
            </div>
        </section>
    )
}

export default Hero;
