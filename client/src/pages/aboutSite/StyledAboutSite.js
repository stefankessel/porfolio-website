import styled from 'styled-components';

export const Container = styled.div`
    width:80%;
    margin: 0 auto;
    margin-top: calc(var(--headerHeight) + 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        width:90%;
    }

    h2{
        font-size: 3.5em;
        padding: 1em 0;
    }
    p{
        font-size: 1.2em;
        padding: 1em 0;
    }

`

export const StackWrapper = styled.div`
    min-width: 100%;
    display: block;
    font-size: 1.5rem;
    text-align:center;

    span{
        padding: .6rem;
        line-height: 1.9em;
        display: inline-block;

        &:before{
            content: "#";
            color: ${props => props.theme.sidebarColor};
            display: inline-block;
        }
    }
`

export const StatsWrapper = styled.div`
    width: 100%;
    margin-top: 3rem;

    h3{
        padding: 1rem 0;
    }

    table { 
        width: 100%; 
        border-collapse: collapse; 
    }
    /* Zebra striping */
    tr:nth-of-type(odd) { 
        //background: #eee; 
    }
    th { 
        //background: #333; 
        //color: white; 
        font-weight: bold; 
    }
    td, th { 
        padding: 6px; 
        border: 1px solid #ccc;
        text-align: left;
        min-width: 120px;
    }
`