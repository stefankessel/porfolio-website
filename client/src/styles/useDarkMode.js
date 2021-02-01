import { useState, useEffect } from 'react'

export const useDarkMode = () => {

    const [theme, setTheme] = useState('light');

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    }
    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    }

    useEffect( () => {
        const themeFromStorage = window.localStorage.getItem('theme');
        setTheme(themeFromStorage || 'dark')
    },[theme])

    return [theme, themeToggler]
}

