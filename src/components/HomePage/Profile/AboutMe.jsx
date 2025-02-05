import React from 'react'

function AboutMe({ user }) {

    return (
        <div>
            <p>
                {user.profile.aboutme}
            </p>
        </div>
    )
}

export default AboutMe