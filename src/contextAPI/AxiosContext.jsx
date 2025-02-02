import { createContext } from "react";
import useAxios from "../customHooks/useAxios";



const AxiosContext = createContext();

export const AxiosProvider = ({ children }) => {

    const { data, loading, error, refetch } = useAxios({
        /*
        
        URL,
        METHOD,
        OPTIONS,
        AUTOFETCH
        
        */
    })

    return (
        <AxiosContext.Provider value={{ data, loading, error, refetch }}>
            {children}
        </AxiosContext.Provider>
    )
}