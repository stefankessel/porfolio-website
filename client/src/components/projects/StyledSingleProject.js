import styled from 'styled-components';

export const Container = styled.div`
    margin: 4em 0;
    padding: 1em;
    border: 1px solid ${props => props.theme.fontColor};
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    h3,p{
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 1em 0;
        letter-spacing: 0.1em;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    padding: 1em 0;

    img{
        max-height:100%;
        max-width:100%;
        object-fit: cover;
        transition: transform 0.4s;

        &:hover{
            transform: scale(1.05);
        }


        @media (max-width: 768px){
            width:100%;
            margin-bottom: 25px;
        }
    }
    ul{
        list-style:none;
        display:flex;
        flex-direction:column;
        justify-content: space-between;
        border-left: 1px solid ${props => props.theme.fontColor};
        padding-left:10px;

        li{
            font-style: italic;
        }
    }


    @media (max-width: 768px){
        flex-direction: column;
        //align-items:center;
    }

`
