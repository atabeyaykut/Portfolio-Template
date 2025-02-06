import React from 'react'

function BasicInfos({ info }) {
    return (
        <li className='flex flex-col md:flex-row md:items-center gap-2 md:gap-4 py-2'>
            <p className='md:w-1/3 font-medium text-gray-700'>{info.question}</p>
            <p className='md:w-2/3 text-gray-600'>{info.answer}</p>
        </li>
    )
}

export default BasicInfos