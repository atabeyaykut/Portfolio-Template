import React from 'react'
import { useUser } from '../../contextAPI/UserContext'

function Footer() {

    const { user } = useUser()

    return (
        <div>
            <p>{user.footer.slogan}</p>
            <div>
                {Object.values(user.footer.content.contacts).map((contact, index) => (
                    <a href={contact.link.startsWith("http") ? contact.link : `https://${contact.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-blue-500 transition"
                        aria-label={`Visit our ${contact.name} profile`}
                        title={`Visit our ${contact.name} profile`}
                        key={index}>{contact.name}</a>
                ))}
            </div>
        </div>
    )
}

export default Footer