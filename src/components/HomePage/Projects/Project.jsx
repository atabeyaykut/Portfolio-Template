import React from 'react'

function Project({ project }) {
    return (
        <div className=' rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-160'>


            <div className='p-8 flex flex-col gap-6'>
                <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>

                <p className='text-gray-600 mb-4'>{project.desc}</p>

                <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className='flex gap-4'>
                    <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300'
                    >
                        View on Github
                    </a>
                    <a
                        href={project.visit}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='flex-1 text-center text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300'
                    >
                        Go to App →
                    </a>
                </div>
            </div>
            <img
                src={project.image}
                alt={project.title}
                className='w-full h-auto object-cover'
            />
        </div>
    )
}

export default Project