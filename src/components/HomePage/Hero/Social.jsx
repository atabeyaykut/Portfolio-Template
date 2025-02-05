import React from 'react';
import {
    FaLinkedinIn, FaXTwitter, FaFacebookF, FaGithub,
    FaInstagram, FaYoutube, FaTiktok, FaTwitch, FaDiscord
} from "react-icons/fa6";

const socialIcons = {
    linkedin: FaLinkedinIn,
    github: FaGithub,
    facebook: FaFacebookF,
    twitter: FaXTwitter,
    x: FaXTwitter,
    instagram: FaInstagram,
    youtube: FaYoutube,
    tiktok: FaTiktok,
    twitch: FaTwitch,
    discord: FaDiscord
};

function Social({ social }) {

    const link = social.link.toLowerCase();
    const Icon = Object.keys(socialIcons).find(key => link.includes(key));
    const iconName = Icon ? Icon.charAt(0).toUpperCase() + Icon.slice(1) : '';

    return (
        <li>
            <a
                href={link.startsWith("http") ? link : `https://${link}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition"
                aria-label={`Visit our ${iconName} profile`}
                title={`Visit our ${iconName} profile`}
            >
                {Icon && React.createElement(socialIcons[Icon], { className: "size-6" })}
            </a>
        </li>
    );
}

export default Social;
