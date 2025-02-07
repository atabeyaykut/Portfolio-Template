import React from 'react'
import { useUser } from '../../contextAPI/UserContext'

function Footer() {
    const { user } = useUser()

    return (
        <footer className="bg-gray-800 text-white p-4 md:p-6">
            <div className="container mx-auto text-center">
                <p className="text-base md:text-lg mb-4">{user.footer.slogan}</p>
                <div className="flex flex-wrap justify-center gap-4">
                    {Object.values(user.footer.content.contacts).map((contact, index) => (
                        <a
                            href={contact.link.startsWith("http") ? contact.link : `https://${contact.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500 transition text-sm md:text-base"
                            aria-label={`Visit our ${contact.name} profile`}
                            title={`Visit our ${contact.name} profile`}
                            key={index}
                        >
                            {contact.name}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer 