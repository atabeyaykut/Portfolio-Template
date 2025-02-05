import React from 'react'
import Language from './Language';
import Theme from './Theme';

function Header() {

    return (
        <header className='flex items-center justify-end gap-3 font-semibold text-sm text-gray-500 pb-20'>
            <Theme />
            <p> |  </p>
            <Language />
        </header>
    )
}

export default Header
