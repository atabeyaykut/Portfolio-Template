import { createContext, useEffect, useState } from "react"


const getBrowserTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}


const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || getBrowserTheme()
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.className = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )

}

export const useTheme = () => useContext(ThemeContext);