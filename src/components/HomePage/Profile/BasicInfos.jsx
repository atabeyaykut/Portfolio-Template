import React from 'react'

function BasicInfos({ info }) {

    return (
        <li>
            <p>{info.question}</p>
            <p>{info.answer}</p>
        </li>
    )
}

export default BasicInfos