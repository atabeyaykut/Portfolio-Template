import React from 'react'
import Hero from '../components/HomePage/Hero/Hero'
import Skills from '../components/HomePage/Skills/Skills'
import Profile from '../components/HomePage/Profile/Profile'
import Projects from '../components/HomePage/Projects/Projects'

function HomePage() {
    return (
        <div className='flex flex-col gap-20'>
            <Hero />
            <Skills />
            <Profile />
            <Projects />
        </div>
    )
}

export default HomePage