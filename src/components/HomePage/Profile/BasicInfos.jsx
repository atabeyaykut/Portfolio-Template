import React from 'react'
import BasicInfo from './BasicInfo'

function BasicInfos({ user }) {

    return (
        <div>
            <ul>
                {user.profile.basicInformation.content.map((info, index) => (
                    <BasicInfo info={info} key={index} />
                ))}
            </ul>
        </div>
    )
}

export default BasicInfos