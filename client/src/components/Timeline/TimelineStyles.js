import styled from 'styled-components';

export const TimelineContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0;
    position: relative;
    min-width:100%;

    &::after{
        content: '';
        position: absolute;
        left: calc(50% - 2px);
        width: 4px;
        height: 100%;
        background-color: ${props => props.theme.boxHighlight};
    }

    @media only screen and (max-width: 767px){
        width: 100%;
    }
`

export const StyledTimelineItem = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 50%;


    &:nth-child(odd){
        align-self: flex-end;
        justify-content: flex-start;
        padding-left: 30px;
        padding-right: 0;
    }
`
export const ItemContent = styled.div`
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: ${props => props.theme.boxBackground};
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
    position: relative;
    min-width: 80%;
    text-align: right;
    color: ${props => props.theme.boxFont}

    @media only screen and (max-width: 767px){
        padding: 15px 10px;
        text-align: center;
        align-items: center;
        width: 100%;
    }

    &::after{
        content: ' ';
        background-color: ${props => props.theme.boxBackground};
        box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
        position: absolute;
        right: -7.5px;
        top: calc(50% - 7.5px);
        transform: rotate(45deg);
        width: 15px;
        height: 15px;

    }
    ${StyledTimelineItem}:nth-child(odd) & {
        text-align: left;
        align-items: flex-start;

        @media only screen and (max-width: 767px){
            padding: 15px 10px;
            text-align: center;
            align-items: center;
        }
    }
    ${StyledTimelineItem}:nth-child(odd) &::after {
        right: auto;
        left: -7.5px;
        box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    span:nth-of-type(1){
        color: #fff;
        // color: ${props => props.theme.boxFont};
        font-size: 12px;
        font-weight: bold;
        top: 5px;
        left: 5px;
        letter-spacing: 1px;
        padding: 5px;
        position: absolute;
        text-transform: uppercase;

        @media only screen and (max-width: 967px){
            width: calc(100% - 10px);
            text-align: center;
        }

        ${StyledTimelineItem}:nth-child(odd) &{
            left: auto;
            right: 5px;
        }
    }
    time{
        color: ${props => props.theme.boxFont};
        font-size: 14px;
        font-weight: bold;

        @media only screen and (max-width: 967px){
            margin-top: 22px;
        }
    }
    p{
        font-size: 18px;
        line-height: 24px;
        margin: 15px 0;
        max-width: 250px;
        color: ${props => props.theme.boxFont};
    }
    a{
        color: ${props => props.theme.boxFont};
        font-size: 16px;
        font-weight: bold;
        border-bottom: 1px solid transparent;
        transition: border 0.5s ease-in-out;

        &:hover{
            border-bottom: 1px solid ${props => props.theme.boxFont};
        }
    }

    span:nth-of-type(2){
        background-color: #fff;
        border: 3px solid ${props => props.theme.boxHighlight};
        border-radius: 50%;
        position: absolute;
        top: calc(50% - 10px);
        right: -40px;
        width: 20px;
        height: 20px;
        z-index: 100;

        ${StyledTimelineItem}:nth-child(odd) &{
            right: auto;
            left: -40px;
        }
    }
`
