import styled from 'styled-components';

export const Container = styled.div`
    width:80%;
    margin: 0 auto;
    margin-top: calc(var(--headerHeight) + 4rem);

    @media (max-width: 768px){
        width:90%;
    }
    h1{
        font-size: 70px;
        line-height: 85px;
        font-weight: 100;
        margin-bottom: 2rem;

        span{
            font-style: italic;
        }
    }
`

export const StyledAbout = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: row;

    img{
        height:100%;
        width:80%;

        @media (max-width: 768px){
            width:100%;
            margin-bottom: 25px;
        }
    }


    @media (max-width: 768px){
        flex-direction: column;
        //align-items:center;
    }
`

export const AboutContent = styled.div`
    display:flex;
    flex-direction: column;
    padding-left: 1.2em;

    h1{
        font-size: 70px;
        line-height: 85px;
        font-weight: 100;
        margin-bottom: 2rem;

        span{
            font-style: italic;
        }
    }
`

export const AboutSubtitle = styled.p`
    font-weight: 500;
    font-size: 1.2rem;

    span{
        font-style: italic;
        font-weight:bold;
    }
    
`

export const AboutText = styled.p`
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin: 1rem 0;
    
`

export const TimelineWrapper = styled.div`
    flex-direction: column;
    //align-items:center;
    display: flex;
    margin: 5rem 0;
    min-width: 100%;
`