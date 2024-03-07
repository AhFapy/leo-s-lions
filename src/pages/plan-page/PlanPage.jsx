import React from 'react'
import "./plan-page-styles.css"
import BronzeImg from "../../assets/bronze-img.avif"
import SilverImg from "../../assets/silver-img.avif"
import GoldImg from "../../assets/gold-img.avif"

function PlanPage(props) {
  function redirectToBronze() {
    window.location.href = "https://checkout.stripe.com/c/pay/cs_live_a1hlUWsfEuh5ztaIqrlCZ5h0R1teVeJ1bGzblTvLjFYKCuEcFJxxZr2KO1#fidkdWxOYHwnPyd1blppbHNgWjA0S2EzN0NBYGZkSzRHSm1vVjJ8XVFOVk1yT2I2UFZiTk5WS1dQRkthZjJ3XUJNbUlPYEwzb1NnS09IXWQ3M1RUUV1jdFw8QU1yaDYwYF1PVlVyMHxMdzQyNTVhVnRWM0xDQCd4JSUl"
  }
  function redirectToSilver() {
    window.location.href = "https://checkout.stripe.com/c/pay/cs_live_a1duRzyRntdOtRieJa9t0DDrah2tocFF3xQ8PHxp9NH18Ko3kDclIIZ4hN#fidkdWxOYHwnPyd1blppbHNgWjA0S2EzN0NBYGZkSzRHSm1vVjJ8XVFOVk1yT2I2UFZiTk5WS1dQRkthZjJ3XUJNbUlPYEwzb1NnS09IXWQ3M1RUUV1jdFw8QU1yaDYwYF1PVlVyMHxMdzQyNTVhVnRWM0xDQCd4JSUl"
  }
  function redirectToGold() {
    window.location.href = "https://checkout.stripe.com/c/pay/cs_live_a1WZcTOWNFVzIDM0hK9v0IizTuWYU0lI5gTxl4BEyROMzMNHkrVefYbsaK#fidkdWxOYHwnPyd1blppbHNgWjA0S2EzN0NBYGZkSzRHSm1vVjJ8XVFOVk1yT2I2UFZiTk5WS1dQRkthZjJ3XUJNbUlPYEwzb1NnS09IXWQ3M1RUUV1jdFw8QU1yaDYwYF1PVlVyMHxMdzQyNTVhVnRWM0xDQCd4JSUl"
  }


  return (
    <div className='plan-page-wrapper'>
      <div className='plan-page-nav'>
        <span className='plan-page-header'>{props.plan} PLAN</span>
      </div>
      <div className='plan-container'>
        <div className='video-container'> 
        *video*
        </div>
        <div className='plan-info'>
        {props.plan === "BRONZE" ? <img className='img-plan' src={BronzeImg}/> : ""}
        {props.plan === "SILVER" ? <img className='img-plan' src={SilverImg}/> : ""}
        {props.plan === "GOLD" ? <img className='img-plan' src={GoldImg}/> : ""}
        <span className='plan-sub'>{props.plan}</span>

        {props.plan === "BRONZE" ? <span className='span-plan-info'>FREE PLAN</span> : ""}
        {props.plan === "SILVER" ? <span className='span-plan-info'>Basic Lions Coaching Bundle</span> : ""}
        {props.plan === "GOLD" ? <span className='span-plan-info'>Premium Level Lions Coaching Bundle</span> : ""}
        <div className='stripe-btn-div'>
        {props.plan === "BRONZE" ? <button onClick={redirectToBronze} className='stripe-btn'>Subscribe</button> : ""}
        {props.plan === "SILVER" ? <button onClick={redirectToSilver} className='stripe-btn'>Start Trial</button> : ""}
        {props.plan === "GOLD" ? <button onClick={redirectToGold} className='stripe-btn'>Start Trial</button> : ""}
        </div>
        </div>
      </div>
    </div>
  )
}

export default PlanPage