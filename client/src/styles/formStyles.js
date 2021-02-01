import styled from 'styled-components';

export const StyledForm = styled.form`
    position: relative;
    width: 100%;
    margin-top:10px;


    label{
        position: absolute;
        left: 0;
        padding: 5px 0;
        font-size: 16px;
        margin: 10px 0;
        pointer-events: none;
        transition: 0.5s;
        color:#666;
    }

    input, textarea{
        width:100%;
        padding: 5px 0;
        font-size: 16px;
        margin: 10px 0;
        border: none;
        border-bottom: 2px solid #333;
        outline:none;
        resize: none;
    }
    input:valid ~label,
    input:focus ~label{
        font-size:12px;
        color:red;
        transform: translateY(-20px)
    }
    textarea:valid ~label,
    textarea:focus ~label{
        font-size:12px;
        color:red;
        transform: translateY(-20px)
    }

`