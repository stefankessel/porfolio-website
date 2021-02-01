import styled from 'styled-components';

export const SkillContainer = styled.div`
    display: grid;
    grid-template-columns: 4fr 8fr;
    width: 100%;
    margin: 1rem 0;
    overflow-x: hidden;
`

export const StyledHeader = styled.h3`
    padding: 5px;
    margin-bottom: 1rem; 
    //text-align: center;
    opacity: 0.9;
    text-transform: uppercase;
    font-size: 1.5 em;
`

export const ButtonGroup = styled.ul`
    display:flex;
    flex-direction: column;
`
export const SkillList = styled.div`
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    margin-left:20px;
`

export const StyledSingleSkill = styled.div`
    background: ${props => props.bg};
    color: #fffffe;
    margin-bottom: 10px;
    font-size: 1.2rem;
    padding: 10px 20px;
    border-radius: 10px;



    @media only screen and (max-width: 767px){
        padding: 10px 0;;
        text-align: center;
        max-width: 80%;
    }

`