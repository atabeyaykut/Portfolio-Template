import React from 'react'
import { useUser } from '../../../contextAPI/UserContext'
import BasicInfo from './BasicInfos'
import AboutMe from './AboutMe'

function Profile() {

    const { user } = useUser()

    return (
        <div>
            <h3 className='text-3xl font-semibold justify-self-center'>
                {user.profile.basicInformation.title}
            </h3>
            <div>
                <BasicInfo user={user} />
                <AboutMe user={user} />
            </div>
        </div>
    )
}

export default Profile