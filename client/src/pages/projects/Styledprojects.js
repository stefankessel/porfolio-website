import styled from 'styled-components';

export const Container = styled.div`
    width:80%;
    margin: 0 auto;
    margin-top: calc(var(--headerHeight) + 4rem);

    @media (max-width: 768px){
        width:90%;
    }
    h1{
        font-size: 3em;
        font-weight: 100;
        margin-bottom: 1rem;

        span{
            font-style: italic;
        }
    }
`