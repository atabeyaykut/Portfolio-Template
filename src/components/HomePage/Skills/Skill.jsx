import React from 'react';

function Skill({ skill }) {
    const altText = `${skill.name} Skill Logo`;

    return (
        <li
            className="flex flex-col items-center gap-2"
            aria-labelledby={`skill-${skill.name.toLowerCase()}`}
        >
            <img
                src={`/assets/${skill.logo.toLowerCase()}.svg`}
                alt={altText}
                className="w-12 h-12 justify-self-center"
                loading="lazy"
            />
            <p
                className="text-xl font-semibold justify-self-center"
                id={`skill-${skill.name.toLowerCase()}`}
            >
                {skill.name}
            </p>
        </li>
    );
}

export default Skill;
