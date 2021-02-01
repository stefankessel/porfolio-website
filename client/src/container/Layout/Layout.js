import React from 'react';
import  { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../styles/themes';
import Navbar from '../../components/nav/Navbar';
import Footer from '../../components/footer/Footer'
import SiteMenu from '../../components/SiteMenu';
import { useDarkMode } from '../../styles/useDarkMode'
import { Main } from './StyledLayout'



const Layout = (props) => {

    const [ theme, themeToggler ] = useDarkMode();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme = { themeMode}>
            <GlobalStyles />
            <Navbar theme = {theme} toggleTheme={themeToggler}/>
            <SiteMenu /> 
            <Main>                
                {props.children}
            </Main>
            <Footer />
        </ThemeProvider>
    )
}

export default Layout
