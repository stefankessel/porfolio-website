import styled from 'styled-components'



// styled components
export const Main = styled.main`
    //padding-top: var(--headerHeight);
    // display: grid;
    // grid-template-columns: 1fr 11fr;
    display: flex;
    flex-flow: column nowrap;
    min-height: calc(100vh - var(--headerHeight) - var(--footerHeight));


    @media(max-width:768px){
        display: flex;
        flex-flow: column nowrap;
    }
`