import React from 'react'
import CoinItems from './CoinItems'
import './Coins.css'
import {Link} from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = (props) => {
  return (
    <div className='container'>
        <div className='heading'>
            <p>#</p>
            <p className='coin-name'>Coin</p>
            <p>Price</p>
            <p>24h</p>
            <p className='hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt cap</p>
        </div>
        {props.coins.map(coins => {
            return(
              <Link to={`/coin/${coins.id}`} element ={<Coin/>} key= {coins.id} >
                <CoinItems coins = {coins} />
              </Link>
                
            )
        })}
      
    </div>
  )
}

export default Coins
