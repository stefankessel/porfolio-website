import styled from 'styled-components'


export const CoinContainer = styled.div`

    display: flex;
    justify-content: center;
    margin: auto 0;
    width:90%;
`

export const CoinRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    height: 80px;
    border-bottom: 1px solid #d7d7d7;
    width: 100%;
`

export const CoinName = styled.div`
    display: flex;
    align-items: center;
    padding-right: 24px;

    width: 14em;

    h1{
        font-size: 16px;
        width: 8em;
    }
    img{
        height: 30px;
        width: 30px;
        margin-right: 10px;
    }
    p{
        text-transform: uppercase;
    }
`

export const CoinData = styled.div`
    display: flex;
    text-align: right;
    justify-content: space-around;
    width: 100%;

    p:nth-of-type(4){
        @media (max-width: 768px){
            display:none;
        }
    }
    p:nth-of-type(3){
        @media (max-width: 768px){
            display:none;
        }
    }
`