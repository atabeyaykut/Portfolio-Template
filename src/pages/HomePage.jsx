import React from 'react'
import Hero from '../components/HomePage/Hero/Hero'
import Skills from '../components/HomePage/Skills/Skills'
import Profile from '../components/HomePage/Profile/Profile'

function HomePage() {
    return (
        <div className='flex flex-col gap-20'>
            <Hero />
            <Skills />
            <Profile />
        </div>
    )
}

export default HomePage