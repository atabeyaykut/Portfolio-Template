import { createContext, useContext } from "react";
import { useLanguage } from "./LanguageContext";
import dataJSON from "../data.json"

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const { language } = useLanguage()

    const user = dataJSON[language] ? dataJSON[language] : {}

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)