import React from 'react'
import { useLanguage } from '../contextAPI/LanguageContext'
import { useTheme } from '../contextAPI/ThemeContext'

function Header() {
    const { language, setLanguage } = useLanguage()
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <header className='flex items-center justify-end gap-3 font-semibold text-sm text-gray-500'>
            <div className='flex justify-center items-center gap-2'>
                <label
                    htmlFor="language-switch"
                    className="relative inline-block w-8 h-4"
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
                        className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-all duration-400 ease-in-out peer-checked:bg-blue-500 rounded-full"
                        aria-hidden="true"
                    ></span>
                    <span
                        className="absolute w-3 h-3 left-0.5 bottom-0.5 bg-white transition-all duration-400 ease-in-out transform peer-checked:translate-x-4 rounded-full"
                    ></span>
                </label>
                <p>Dark Mode</p>
            </div>
            <p> |  </p>

            {language === "tr" ? (
                <p> Switch to <span
                    onClick={() => setLanguage("en")}
                    id="language-english"
                    className="language-toggle text-[#e92577] font-bold cursor-pointer"
                    role="button"
                    tabIndex="0"
                    aria-label="Switch to English"
                >English
                </span>
                </p>
            ) : (
                <p>
                    <span
                        onClick={() => setLanguage("tr")}
                        className="language-toggle text-[#e92577] font-bold cursor-pointer"
                        role="button"
                        tabIndex="0"
                        aria-label="Türkçe'ye geçiş yap"
                    >
                        Türkçe
                    </span>
                    'ye Geçiş
                </p>
            )}
        </header>
    )
}

export default Header
