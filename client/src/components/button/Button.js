import React from 'react';
import { StyledButton } from './style'

export const Button = (props) => {
    return (
        <StyledButton bg={props.bg}>
            {props.children}
        </StyledButton>
    )
}
