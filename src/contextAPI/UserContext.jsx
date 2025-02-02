import { createContext, useContext } from "react";
import { useLanguage } from "./LanguageContext";


const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const { localizedData } = useLanguage()

    const user = localizedData ? {
        name: localizedData.name,
        heroSection: localizedData.heroSection,
        skillsSection: localizedData.skillsSection,
        profile: localizedData.profile,
        projects: localizedData.projects,
        contact: localizedData.contact,
    } : {}

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)