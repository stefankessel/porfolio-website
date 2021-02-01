import React from 'react'
import {StyledConfirmation} from './style'

export const Confirmation = (props) => {
    return (
        <StyledConfirmation>
            <h2>Thank you {props.name}</h2>
            <p>Email has been send. I reply as soon as possible.</p>
        </StyledConfirmation>
    )
}
