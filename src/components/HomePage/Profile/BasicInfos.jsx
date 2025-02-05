import React from 'react'
import BasicInfo from './BasicInfo'

function BasicInfos({ user }) {

    return (
        <div>
            <ul className='grid grid-cols-2'>
                {user.profile.basicInformation.content.map((info, index) => (
                    <BasicInfo info={info} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default BasicInfos