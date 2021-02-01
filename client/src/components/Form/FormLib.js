import { useField } from 'formik';
import React from 'react';
import {StyledLabel, StyledInput, StyledTextarea, StyledIcon, ErrorMsg} from './style';

export const TextInput = ({icon, ...props}) => {

    const [field, meta] = useField(props);

    return(
        <div style={{position:'relative'}}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            <StyledInput {...field} {...props}></StyledInput>
            <StyledIcon>{icon}</StyledIcon>
            
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ):
            null
            }
        </div>
    )

}

export const TextArea = ({...props}) => {

    const [field, meta] = useField(props);

    return(
        <div style={{position:'relative'}}>
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
            <StyledTextarea {...field} {...props}></StyledTextarea>
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ):
            null
            }
        </div>
    )

}