import React, { createContext, useContext, useState } from "react";

type ThemeT = 'light'|'dark'
export type ThemeType= {
    theme:ThemeT,
    setTheme: React.Dispatch<React.SetStateAction<ThemeT>>
}

export const ThemeConstext = createContext<ThemeType|undefined>(undefined);



export function ThemeProvider({ children }:{children:React.JSX.Element}) {
    const [theme, setTheme] = useState<ThemeT>("light");

    // const toggleTheme = () => {
    //     setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
    // }

    return(
        <ThemeConstext.Provider value={{theme,setTheme}}>
            {children}
        </ThemeConstext.Provider>
    )
}
export function useThemeContext (){
    const context = useContext(ThemeConstext);

    if (!context) {
        throw new Error("useThemeContext must be used within ThemeProvider");
    }
    return context
}
