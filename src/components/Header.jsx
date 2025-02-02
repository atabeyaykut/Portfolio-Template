import React from 'react'
import "./Header.css"
import { useLanguage } from '../contextAPI/LanguageContext'

function Header() {
    const { language, setLanguage } = useLanguage()

    return (
        <header>
            <div>
                <label
                    htmlFor="language-switch"
                    className="relative inline-block w-16 h-8"
                    aria-label="Dil değiştirme"
                >
                    <input
                        id="language-switch"
                        type="checkbox"
                        className="opacity-0 w-0 h-0 peer"
                    />
                    <span
                        className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 transition-all duration-400 ease-in-out peer-checked:bg-blue-500 peer-focus:ring-2 peer-focus:ring-blue-500"
                        aria-hidden="true"
                    ></span>
                    <span
                        className="absolute w-6 h-6 left-1 bottom-1 bg-white transition-all duration-400 ease-in-out transform peer-checked:translate-x-8 rounded-full"
                    ></span>
                </label>
                <p>Dark Mode</p>
            </div>

            {language === "tr" ? (
                <p> Switch to <span
                    onClick={() => setLanguage("en")}
                    id="language-english"
                    className="language-toggle "
                    role="button"
                    tabIndex="0"
                    aria-label="English'e geçiş yap"
                >English
                </span>
                </p>
            ) : (
                <p>
                    <span
                        onClick={() => setLanguage("tr")}
                        className="language-toggle "
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
