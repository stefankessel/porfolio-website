import styled from 'styled-components';
import { vars } from '../../styles/MainStyles'


// Form
export const StyledTitle = styled.h3`
    // color: ${props => props.color ? props.color : vars.theme};
    font-size: ${ props => props.size ? props.size : vars.title};
    padding: 5px;
    margin-bottom: 1rem; 
    text-align: center;
    opacity: 0.9;
`
export const StyledInput = styled.input`
    padding: 15px;
    width: 100%;
    padding-left: 50px;
    font-size: 1.1rem;
    letter-spacing: 1px;
    color: ${vars.dark2};
    border: none;
    border-bottom: 3px solid ${vars.dark2};
    display: block;
    margin: 5px auto;
    transition: 0.5s linear;
    outline:0;

    ${ props => props.invalid && `background-color: ${vars.danger}; color: ${vars.primary};`}

    &:focus {
        border-bottom: 3px solid ${vars.theme};
    }
`
export const StyledTextarea = styled.textarea`
    padding: 15px;
    width: 100%;
    font-size: 1.1rem;
    letter-spacing: 1px;
    color: ${vars.dark2};
    border: none;
    border-bottom: 3px solid ${vars.dark2};
    display: block;
    min-height: 140px;
    margin: 5px auto;
    transition: 0.5s linear;
    outline:0;

    &:focus {
        border-bottom: 3px solid ${vars.theme};
    }
`

export const StyledLabel = styled.label`
    font-size: 16px;
    font-weight: bold;
    display: flex;
    text-align:left;
    color: ${vars.dark1};
`

export const StyledFormBox = styled.div`
    display: flex;
    width:90%;
    flex-flow: column;
    text-align:center;
    padding: 2rem 3rem;
    border-radius: 10px;
    background-color: ${ props => props.bg || vars.light1};

    @media (max-width: 768px){
        width:100%;
    }

`

export const StyledButton = styled.button`
    background: ${(props) => props.bg || `transparent`};
    text-decoration: none;
    width: 150px;
    padding: 10px;
    border-radius: 25px;
    border: 3px solid ${vars.theme};
    color: ${vars.theme};
    transition: 0.3s ease-in-out;
    font-size: 20px;
    margin:1.2em auto 0 auto;
    outline:0;

    &:hover{
        cursor:pointer;
        background-color: ${vars.theme};
        color: ${vars.primary};
    }
`

export const StyledIcon = styled.p`
    color: ${vars.dark2};
    position:absolute;
    font-size: 21px;
    top: 42px;
    left:12px;
    // ${ props => props.right && `right: 15px;`}
    // ${ props => props.left && `left: 15px;`}
`

export const ErrorMsg = styled.div`
    font-size: .9rem;
    color: ${vars.danger};
    text-align:left;
    margin-top: -5px;
    margin-bottom: 10px;
`
export const ExtraText = styled.div`
    font-size: ${props => props.size || '11px'};
    text-align: center;
    padding: 2px;
    margin-top: 10px;
    color: ${ props => props.color || vars.dark2};
`

// Confirmation
export const StyledConfirmation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 6px;

    h2{
    color: ${props => props.color ? props.color : props.theme.sidebarColor};
    font-size: ${ props => props.size ? props.size : `1.5rem`};
    padding: 10px;
    margin-bottom: 2rem; 
    text-align: center;
    opacity: 0.9;
    }

    p{
        font-size: 1.1rem;
        color: ${props => props.color ? props.color : vars.dark2};
        padding: 5px;
    }
`