import styled from 'styled-components';

export const Nav = styled.nav`
    width:100%;
    min-height: var(--headerHeight);
    background-color: ${props => props.sticky ? props.theme.bg: 'transparent'};
    border-bottom: ${props => props.sticky ? `1px solid ${props.theme.fontColor}`: 'none'};
    opacity: .9;
    position: fixed;
    top:0;
    left:0;
    display: flex;
    justify-content:space-between;
    align-items: center;
    //padding: 0 20px;
    z-index:800;
    transition: all 0.4s ease-in-out;

    &:hover{
        background-color: ${props => props.theme.bg};
    }

    @media (max-width: 920px){
        opacity:1;
    }

`

export const Logo = styled.div`
    font-size: 1.8rem;
    display: flex;
    align-items: center;
    height: 100%;
    margin-left:1em;

    a{
        font-size: 1.4rem;
        border-bottom: 2px solid transparent;
        transition: all .5s ease-in-out;

        &:hover{
            color: ${props => props.theme.sidebarColor};
            border-bottom: 2px solid ${props => props.theme.sidebarColor};
            background-color: ${props => props.theme.bg};
        }
    }
`