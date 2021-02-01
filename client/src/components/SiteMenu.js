import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaXing, FaGithub} from "react-icons/fa";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    height: calc((100vh - var(--headerHeight))/2);
    align-items: center;
    justify-content: space-around;
    position: fixed;
    left:0;
    top: 25%;
    padding-left: 15px;
    
    a:hover{
        color: ${props => props.theme.fontColor};
    }
    @media(max-width:768px){
        display: none;
    }
`

const SiteMenu = () => {
    return (
        <StyledDiv>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn size="2em"/></a>
            <a href="https://xing.de" target="_blank" rel="noreferrer"><FaXing size="2em"/></a>
            <a href="https://github.com/stefankessel/" target="_blank" rel="noreferrer"><FaGithub size="2em"/></a>
        </StyledDiv>
    )
}

export default SiteMenu
