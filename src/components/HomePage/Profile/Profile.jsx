import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import BasicInfos from "./BasicInfos"

function Profile() {
    const { user } = useUser()

    return (
        <div className='container mx-auto px-4 py-8'>
            <h3 className='text-3xl font-semibold text-center pb-4 mb-8'>
                {user.profile.basicInformation.title}
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <ul className='space-y-4'>
                    {user.profile.basicInformation.content.map((info, index) => (
                        <BasicInfos info={info} key={index} />
                    ))}
                </ul>

                <div className='bg-gray-50 p-6 rounded-lg shadow-sm'>
                    <h4 className='text-xl font-semibold mb-4'>{user.profile.aboutme.title}</h4>
                    <p className='text-gray-600 leading-relaxed'>
                        {user.profile.aboutme.content}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Profile