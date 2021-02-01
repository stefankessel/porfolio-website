import styled from 'styled-components';

export const ResumeContainer = styled.div`
    display: flex;
    flex-direction:column;
    //align-items:center;
    justify-content: center;
    margin: 0 auto;
    margin-top: calc(var(--headerHeight) + 3em);
    width:70%;

    @media (max-width: 768px){
        width:95%;
    }
    

    h1, h2{
        padding: 5px;
        opacity: 0.9;
        text-transform: uppercase;
        font-size: 2rem;
    }
    h1{
        font-size:2.5rem;
        margin-bottom: 1em;
    }

    ul{
        list-style:none;
        display:flex;

        li{
            padding: 0 10px;

            a{
                font-size: 1.2rem;
                font-weight: bold;
                border-bottom: none;;

                &:hover{
                    border-bottom: 2px solid;
                }
            }
        }
    }
`

export const DownloadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    align-self:flex-end;
    padding:1em;
    border: 1px solid ${props => props.theme.fontColor};
    box-shadow: 2px 2px 2px 1px ${props => props.theme.fontColor};
    border-radius: 40px;
    //max-width: 70%;

    h3,a{
        padding: 1em 0;
    }
`