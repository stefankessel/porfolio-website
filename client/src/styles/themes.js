import { createGlobalStyle } from 'styled-components'


export const lightTheme = {
    bg: '#fffffe',
    fontColor: '#000',
    headline: '#272343',
    paragraph: '#2d334a',
    button: '#ef0d33',
    buttonText: '#fffffe',
    boxBackground: '#bae8e8',
    boxHighlight: '#ffd803',
    boxFont: '#272343',
    hamburgerColor: '#272343',
    secondary: '#e53170',
    sidebarColor: '#f25f4c',
}

export const darkTheme = {
    bg: '#0f0e17',
    fontColor: '#fffffe',
    headline: '#fffffe',
    paragraph: '#a7a9be',
    button: '#ef0d33',
    buttonText: '#fffffe',
    //buttonTextHover: '#0f0e17',
    boxBackground: '#b8c1ec',
    boxHighlight: '#eebbc3',
    boxFont: '#121629',
    hamburgerColor: '#fffffe',
    secondary: '#e53170',
    sidebarColor: '#f25f4c',
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${props => props.theme.bg};
        color: ${props => props.theme.fontColor};
        // transition: all 0.1s linear;
        box-sizing: border-box;
        margin:0;
        padding:0;

        p,a {
            line-height: 1.5rem;
            font-size:1rem;
            color: ${props => props.theme.paragraph};
            transition: all 0.3s ease-in-out;
        }
        a:hover{
            color: ${props => props.theme.sidebarColor};
        }
        h1,h2,h3{
            color: ${props => props.theme.headline};
        }
    }
`