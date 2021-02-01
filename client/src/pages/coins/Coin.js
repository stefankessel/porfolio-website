import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Loader from "react-loader-spinner";
import SingleCoin from '../../components/coins/SingleCoin';
import { Container, SearchBox, ApiDisclaimer, Alert } from './StyledCoin';

const Coin = () => {

    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const [offline, setOffline] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async() => {
            try{
                setLoading(true);
                const {data} = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false')

                if(data){
                    setTimeout( () => {
                        setLoading(false)
                    },500)
                    setOffline(false)
                }
                setCoins(data)
                localStorage.setItem('coindata', JSON.stringify(data))
            }
            catch(err){
                setOffline(true);
                setLoading(false)
                let coinsFromStorage = JSON.parse(localStorage.getItem('coindata')) ;
                setCoins(coinsFromStorage)
                
            }

        }
        getData()
        
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <Container>
            <SearchBox>
                <h3>Search for a Crypto Currency: </h3>
                <form>
                    <input
                        placeholder='search'
                        type='text'
                        onChange={handleChange}
                    />
                </form>
            </SearchBox>
            {offline && <Alert>You are offline, refresh Page once you are online again to get the latest data</Alert>}
            {loading && <Loader
                            type="Audio"
                            color="#00BFFF"
                            height={100}
                            width={100}
                        />}
            {!loading && filteredCoins.map(coin => (
            <SingleCoin 
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                marketcap={coin.market_cap}
                allTimeHigh={coin.ath}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
            />
            ))}
            <ApiDisclaimer>Data is requested from the Coingecko API</ApiDisclaimer>
        </Container>
    )
}

export default Coin
