import React from 'react'

function BasicInfo({ info }) {
    return (
        <li>
            <p>
                {info.question}
            </p>
            <p>
                {info.answer}
            </p>
        </li>
    )
}

export default BasicInfo