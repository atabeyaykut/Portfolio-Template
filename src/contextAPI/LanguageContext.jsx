import dataJSON from "../data.json"
import { createContext, useContext, useEffect, useState } from "react";

const getBrowserLanguage = () => {
    const browserLanguage = navigator.language.slice(0, 2);
    return browserLanguage === "tr" || browserLanguage === "en" ? browserLanguage : "en"
}


const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || getBrowserLanguage()
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language])

    const localizedData = dataJSON[language]

    return (
        <LanguageContext.Provider value={{ setLanguage, language, localizedData }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);