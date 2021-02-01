import React from 'react'
import { CoinContainer, CoinRow, CoinName, CoinData } from './StyledSingleCoin'

const SingleCoin = ({ name, price, symbol, marketcap, allTimeHigh, image, priceChange}) => {
    return (
        <CoinContainer>
            <CoinRow>
                <CoinName>
                    <img src={image} alt={name} />
                    <h1>{name}</h1>
                    <p className='coin-symbol'>{symbol}</p>
                </CoinName>
                <CoinData>
                    <p>€{price.toLocaleString()}</p>

                    {priceChange < 0 ? (
                        <p style={{color:'#f00606'}}>{priceChange.toFixed(2)}%</p>
                    ) : (
                        <p style={{color:'#11d811'}}>{priceChange.toFixed(2)}%</p>
                    )}
                    <p>€{allTimeHigh.toLocaleString()}</p>
                    <p>
                        Mkt Cap: €{marketcap.toLocaleString()}
                    </p>
                </CoinData>
            </CoinRow>
            </CoinContainer>
    )
}

export default SingleCoin
