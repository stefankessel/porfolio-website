import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: var(--footerHeight);
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    margin-top: 4rem;

    div{
        display: flex;
        flex-direction: row;

        @media only screen and (max-width: 767px){
            justify-content: space-between;
        }
    }

    a,p {
        padding-right:20px;    
    }

    @media only screen and (max-width: 767px){
        flex-direction:column;
    }
`