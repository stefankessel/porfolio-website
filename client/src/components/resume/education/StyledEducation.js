import styled from 'styled-components';

export const EducationContainer = styled.div`

    display: flex;
    flex-direction: column;
    //justify-content:center;
    //align-items:center;
    width: 100%;
    margin: 2em 0;

    @media (max-width: 768px){
        width: 100%;
    }
`

export const DegreeContainer = styled.div`

    display: flex;
    flex-direction: column;
    // justify-content:center;
    // align-items:center;
`

export const SingleDegree = styled.div`

    // display: grid;
    // grid-template-row: 4fr 8fr;
    flex-direction: row;
    display:flex;
    justify-content:space-between;
    // align-items:center;
    border-bottom: 1px solid black;

    @media (max-width: 768px){
        flex-direction: column;
        align-items:flex-start;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        //align-items:space-between;
        margin: 1em 0;

        &:first-of-type{
            background: #fffffe;
            
        }
        &:nth-of-type(2){
            align-items:flex-end;
            //justify-content: flex-end;
        }
    }

    img{
        // height: 12rem;
        width: 200px;
        height:120px;
        justify-content:flex-start;
        padding:20px;
        align-self: flex-start;


        
    }
`