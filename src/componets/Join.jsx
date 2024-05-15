import React from 'react'
import Ethereum from '../assets/ethereum.png'
import Bitcoin from '../assets/bitcoin.png'

const Join = () => {
  return (
    <div id="joinUs">
        <img className='ethereum--coin' src={Ethereum} alt='ethereum'/>
        <img className='bitcoin--coin' src={Bitcoin} alt='ethereum'/>
      <h1>JOIN US VIA</h1>
      <h1 className="gradient--text">DISCORD</h1>
      <p>Invest and manage all your crypto at one place.</p>
      <button>Join via Discord</button>
    </div>
  )
}

export default Join
