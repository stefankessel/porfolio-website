import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: var(--footerHeight);
    align-items: center;
    justify-content: space-between;
    //padding: 0 15px;
    margin-top: 2rem;

    div{
        display: flex;
        flex-direction: row;

        @media only screen and (max-width: 767px){
            // justify-content: flex-start;
            // flex-direction: column;
            // align-items: flex-start;
            //padding: 0;
        }
    }

    a,p {
        padding: 0 10px;    
    }

    @media only screen and (max-width: 767px){
        justify-content: flex-start;
        flex-direction: column;
        align-items: flex-start;

        div{
            flex-direction: column;
        }

        a,p {
            padding: 5px 10px;    
        }
    }
`