import { createContext, useState } from "react";

export const ThemeContext = createContext();
export const ThemeContextProvider = ({children}) => {

    const [theme,setTheme] = useState({
        isLigth:true,
        ligth:'#fff',
        dark:'#000',

    })
    console.log(theme);
    const toggleTheme=() => {
        setTheme(prevState => ({
            ...prevState, 
            isLigth:!prevState.isLigth
        }))
    }

    return <ThemeContext.Provider value={{theme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
}