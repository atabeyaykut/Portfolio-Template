import React from 'react'

function Greetings({ hero }) {

    return (
        <>
            <h4>{hero.greeting}</h4>
            <h2 className='font-semibold text-2xl/7 w-148'>{hero.intro}</h2>
        </>
    )
}

export default Greetings