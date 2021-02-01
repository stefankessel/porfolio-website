import styled from 'styled-components';



// styled components
export const  StyledBackground = styled.div`
    width: 100%;
    min-height: calc(100vh - var(--headerHeight) - var(--footerHeight));
    margin-top: calc(var(--headerHeight));
    padding-left: 8em;
    // display: grid;
    // grid-template-columns: 2fr 1fr;
    display:flex;
    flex-direction: row;

    @media only screen and (max-width: 767px){
        flex-direction:column;
        padding: 0 10px;;
    }
`

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const HeroHeader = styled.h1`
        font-weight: 300;    
        font-size: 3rem;
        line-height: 4rem;
`
export const Sep = styled.div`
    height: 3px;
    width: 50px;
    background-color: #ef0d33;
    margin: 30px 0;
`

export const HeroSubheader = styled.h3`
        font-weight: 300;    
        font-size: 2rem;
        line-height: 2.3rem;
        align-items: center;
`

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    margin-top: 3rem;

    a:first-of-type{
        padding-right: 3rem;
    }
    
`

export const HeroRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-content: flex-end;

    @media only screen and (max-width: 767px){
        justify-content: center;
        align-content: center;
        margin: 3rem 0;
    }

    img{
        max-width:90%;
        max-height:90%;
    }

    h3{
        padding-left: 10px;
        margin-bottom: 12px;
    }
    ul{
        list-style: none;
        padding-left: 10px;
        border-left: 1px solid;

        li{
            font-size:1.2rem;
            display:flex;
            padding: .3rem 0;
            opacity: 0.7;
        }
            span{
                padding-left: 10px;
            }
    }
        
`
// Landing Page
// export const StyledTitle = styled.div`
//     // color: ${props => props.color ? props.color : vars.primary};
//     // font-size: ${ props => props.size ? props.size : vars.title};
//     // padding: 5px;
//     // margin-bottom: 1rem; 
//     // text-align: center;
//     // opacity: 0.9;
//     grid-column: 3 / -1;
//     grid-area: 1 / 2 / auto / -1;

//     h1{
//         font-weight: 300;    
//         font-size: 9rem;
//         line-height: 10rem;
//     }
//     h3{
//         font-weight: 500;
//         font-size: 2rem;
//         line-height: 3rem;;
//     }
// `

// export const TitleWrapper = styled.div`
//     display: flex;
//     justify-content: space-between;

//     div{
//         display:flex;
//         flex-direction: column;

//         &:second-of-type{
//             background:red;
//         }
//     }

// `
// export const StyledSubtitle = styled.h3`
//     // color: ${props => props.color ? props.color : vars.primary};
//     // font-size: ${ props => props.size ? props.size : vars.subtitle};
//     // padding: 5px;
//     // margin-bottom: 1.4rem;  
//     // text-align: center;
//     // opacity: 0.9;
//     grid-area: 1 / 2 / auto / -1;
//     font-family: Canela, serif;
//     font-weight: 500;
//     grid-column: 3 / -1;
//     font-size: 2rem;
//     line-height: 3rem;;
// `

