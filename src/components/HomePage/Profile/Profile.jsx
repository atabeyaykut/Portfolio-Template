import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import AboutMe from './AboutMe'
import BasicInfos from "./BasicInfos"

function Profile() {

    const { user } = useUser()

    return (
        <div>
            <h3 className='text-3xl font-semibold justify-self-center'>
                {user.profile.basicInformation.title}
            </h3>
            <div>
                <ul className='grid grid-cols-2'>
                    {user.profile.basicInformation.content.map((info, index) => (
                        <BasicInfos info={info} key={index} />
                    ))}
                </ul>
                <AboutMe aboutme={user.profile.aboutme} />
            </div>
        </div>
    )
}

export default Profile 