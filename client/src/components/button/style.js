import styled from 'styled-components';
import {vars } from '../../styles/MainStyles'


export const StyledButton = styled.button`
    background: ${(props) => props.bg || props.theme.button};
    text-decoration: none;
    min-width: 150px;
    max-width: 280px;
    padding: 14px;
    border-radius: 25px;
    border: 3px solid ${vars.primary};
    color: ${props => props.bg ? '#fffffe' : props.theme.buttonText};
    transition: 0.3s ease-in-out;
    text-align:center;
    outline:0;
    font-weight: bold;

    &:hover, :focus{
        cursor:pointer;
        background: ${props => props.bg ? '#fffffe' : props.theme.bg};
        color: ${props => props.bg ? props.bg : props.theme.headline};
        border: 3px solid ${props => props.bg ? props.bg : props.theme.button}
    }
    
`
