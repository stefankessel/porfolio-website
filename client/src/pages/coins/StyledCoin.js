import styled from 'styled-components';
import { vars } from '../../styles/MainStyles'


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: calc(var(--headerHeight) + 30px);
    //width:100%;
    margin-left: 7rem;

    @media (max-width: 768px){
        width:100%;
        margin-left: 0;
    }
`

export const SearchBox = styled.div`

    margin-bottom: 64px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;

    @media (max-width: 768px){
        flex-direction: column;
    }

    h3{
        margin-right: 32px;
        text-align: center;
        font-size: 1.2em;
        padding: 15px 0;
    }

    input{
        padding: 15px 10px;
        width: 300px;
        //padding-left: 50px;
        font-size: 1.1rem;
        letter-spacing: 1px;
        color: ${vars.dark2};
        border: none;
        border-bottom: 3px solid ${vars.dark2};
        display: block;
        // margin: 5px auto;
        transition: 0.5s linear;
        outline:0;
    
        // ${ props => props.invalid && `background-color: ${vars.danger}; color: ${vars.primary};`}
    
        &:focus {
            border-bottom: 3px solid ${vars.theme};
        }
    }
`
export const ApiDisclaimer = styled.p`
    align-self: flex-end;
    margin: 3em;
`

export const Alert = styled.p`
    margin-right: 32px;
    text-align: center;
    font-size: 1.2em;
    padding: 15px 0;
    background-color: #f8d7da;
    color: #000;
`