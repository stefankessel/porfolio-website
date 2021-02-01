import React from 'react';
import styled from 'styled-components';

const Hamburger = styled.div`
    z-index: 500;
    position: fixed;
    top: 15px;
    right: 20px;
    width: 2.3rem;
    height: 2.3rem;
    display: none;
    cursor: pointer;

    @media(max-width:920px){
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;
    }

    div{
        width: 28px;
        margin:auto;
        height: 3px;
        background-color: ${props => props.theme.hamburgerColor};
        transform-origin: -3px;
        transition: all 0.3s linear;

        // @media(max-width:768px){
        //     background-color: #fffffe !important;
        // }

        &:nth-child(1){
           transform: ${({open}) => open ? 'rotate(45deg) ' : 'rotate(0)'};
           background-color: ${({open}) => open && '#fffffe'}
        }
        &:nth-child(2){
            opacity: ${({open}) => open ? '0' : '1'};
            transform: ${({open}) => open ? 'translateX(100%)' : 'translateX(0)'}
        }
        &:nth-child(3){
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            background-color: ${({open}) => open && '#fffffe'};
        }
    }
`

const Burger = ({toggle, open}) => {

    return (
        <Hamburger open={open} onClick={ toggle}>
            <div/>
            <div/>
            <div/>
        </Hamburger>
    )
}

export default Burger
