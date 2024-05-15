import React from 'react'
import ChooseBox from './ChooseBox'
import ChooseImage from '../assets/choose-main.png'

const WhyUs = () => {
  return (
    <div id="whyUs">
      <h1>WHY <span>CHOOSE US</span></h1>

      <div className="choose-us__container">
      <div className="choose-us__container-box">
      <ChooseBox chooseClass = 'fa-solid fa-wallet' heading = 'CONNECT YOUR WALLET' para = 'Use Trust Wallet, Metamask or to connect to the app.' /> 
      <ChooseBox chooseClass = 'fa-solid fa-pen' heading = 'SELECT YOUR QUANTITY' para = 'Upload your crypto and set a title, description and price.' /> 
      <ChooseBox chooseClass = 'fa-solid fa-list' heading = 'CONFIRM TRANSACTION' para = 'Earn by selling your crypto on our marketplace.' /> 
      </div>
      <div className="choose-us__container-box box-2">
      <img src= {ChooseImage} alt="Choose Main Image" />
      </div>
      <div className="choose-us__container-box">
      <ChooseBox chooseClass = 'fa-solid fa-comments-dollar' heading = 'RECEIVE YOUR OWN NFTS' para = 'Invest all your crypto at one place on one platform.' /> 
      <ChooseBox chooseClass = 'fa-solid fa-sack-dollar' heading = 'TAKE A MARKET TO SELL' para = 'Discover, collect the right crypto collections to buy or sell.' /> 
      <ChooseBox chooseClass = 'fa-solid fa-cubes' heading = 'DRIVE YOUR COLLECTION' para = 'We make it easy to Discover, Invest and manage.' /> 
      </div>
      
     </div>
    </div>
  )
}

export default WhyUs
