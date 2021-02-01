import styled from 'styled-components';

export const ContainerDiv = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 400px;
    // background-color: #ccc;
    border-radius: 30px;
    border: 2px solid ${props => props.theme.fontColor};
    display: flex;
    flex-direction: column;
    // align-items: center;
    // justify-content:center;

    h1, p{
        padding: 5px;
        margin: 1rem 0; 
        text-align: center;
        opacity: 0.9;
    }
`
export const ButtonGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-between;
    //margin: 1rem 0;
    min-height: 120px;
`
