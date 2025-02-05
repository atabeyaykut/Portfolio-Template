import React from 'react'
import { useTheme } from '../../contextAPI/ThemeContext';

function Theme() {

    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <div className="flex justify-center items-center gap-1">
            <label
                htmlFor="language-switch"
                className="relative inline-block w-5 h-2.5 sm:w-6 sm:h-3 md:w-7.5 md:h-3.5"
                aria-label="Dil değiştirme"
            >
                <input
                    id="language-switch"
                    type="checkbox"
                    className="opacity-0 w-0 h-0 peer"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                />
                <span
                    className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-[rgba(233,37,119,1)] transition-all duration-400 ease-in-out peer-checked:bg-[rgba(233,37,119,1)] rounded-full"
                    aria-hidden="true"
                ></span>
                <span
                    className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 left-1 bottom-0.5 bg-[rgb(255,232,110)] transition-all duration-400 ease-in-out transform peer-checked:translate-x-3 rounded-full"
                ></span>
            </label>
            <p className="text-[10px] sm:text-xs md:text-sm">Dark Mode</p>
        </div>
    )
}

export default Theme