import {createContext,useContext} from 'react'

//creating the context
export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

//creating the provider
export const ThemeProvider = ThemeContext.Provider;

//creating the consumer
export default function useTheme() {
    return useContext(ThemeContext);
}