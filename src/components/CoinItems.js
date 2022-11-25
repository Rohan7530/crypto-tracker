import React from 'react'
import './Coins.css'

const CoinItems = (props) => {
  return (
    <div className='coin-row'>
      <p> {props.coins.market_cap_rank}</p>
      <div className='img-symbol'>
        <img src={props.coins.image} alt = ''/>
        <p> {props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>&#x20b9;{props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed()}%</p>
      <p className='hide-mobile'>&#x20b9;{props.coins.total_volume.toLocaleString()}</p>
      <p className='hide-mobile'>&#x20b9;{props.coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItems
