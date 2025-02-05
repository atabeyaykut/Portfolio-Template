import React from 'react'

function Cta({ hero }) {

    return (
        <div
            dangerouslySetInnerHTML={{
                __html: hero.ctaHTML
            }}
            role="contentinfo"
            aria-labelledby="cta-message"
        />
    )
}

export default Cta