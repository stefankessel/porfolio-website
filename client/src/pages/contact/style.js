import styled from 'styled-components';

//Container
export const Container = styled.div`

`

//Banner
export const ContactBannerWrapper = styled.div`
    background: #fd5e3b;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 100px;
    width:100%;

    @media (max-width: 768px){
        flex-direction: column;
    }
    
`
export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // align-items: space-around;
    justify-content: center;
    //justify-content: space-around;
    margin-left:4rem;

    h1{
        color: #fffffe;
        font-size: 2.9em;
        text-transform: uppercase;
    }

    p{
        color: #fffffe;
        font-size: 1.4em;
        margin: 2rem 0;
    }
`

export const BannerImage = styled.div`
    display: flex;
    align-items: flex-end;

    img{
        max-width: 100%;
        max-height: 100%;

    }
`

// Form Wrapper
export const FormWrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 8fr;
    grid-gap: 1.5em;
    margin: 6rem 0;
    margin-left: 6rem;

    @media (max-width: 768px){
        grid-template-columns: 1fr;
        margin-left: 0;
    }
`

export const InfoBar = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px){
        display: none;
    }

    div{
        margin-bottom: 2em;
        flex-direction: row;
        display:flex;
        align-items:center;

        &:nth-of-type(2){
            margin: 1em 0;

            h3, a {
                padding-right: 15px;
                font-size:1.2em;
            }
        }
    }

    h2{
        font-size: 1.9em;
        text-transform: uppercase;
        padding-right: 20px;
    }

    img{
        margin-top: 1rem;
        max-width: 90%;
        max-height: 90%;
    }

`


