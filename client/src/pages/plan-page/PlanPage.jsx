import React from 'react'
import "./plan-page-styles.css"
import BronzeImg from "../../assets/bronze-img.jpg"
import SilverImg from "../../assets/silver-img.jpg"
import GoldImg from "../../assets/gold-img.jpg"

function PlanPage(props) {
  function redirectToBronze() {
    window.location.href = "https://pool-stop-378.notion.site/Leo-s-Lion-Teamspace-e97e36de437547a3b2c0421992fb12df?pvs=4"
  }
  function redirectToSilver() {
    window.location.href = "https://buy.stripe.com/bIYcP7aXjeBj8aQ8wx"
  }
  function redirectToGold() {
    window.location.href = "https://buy.stripe.com/fZecP78PbeBjaiY8ww"
  }

  function redirectToCalendly() {
    window.location.href = "https://calendly.com/leo-matiano/coaching-fit-call"
  }

  return (
    <div className='plan-page-wrapper'>
      <div className='plan-page-nav'>
        <span className='plan-page-header'>{props.plan} PLAN</span>
      </div>
      <div className='plan-container'>
        <div className='video-container'> 
        {props.plan === "BRONZE" ?  <iframe width="100%" height="100%" className='loom-plan' src="https://www.loom.com/embed/9e19da54f2494225a39a80087f35872d?sid=ec02ee9a-2c6a-46fe-9077-d9050be8bc5b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>: ""}
        {props.plan === "SILVER" ?  <iframe width="100%" height="100%"  className='loom-plan' src="https://www.loom.com/embed/0e0ff5acb2d445fca73ea9a3e57ddd0c?sid=14fda2b8-c831-45f1-88cd-90c77b6ef9d0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>: ""}
        {props.plan === "GOLD" ?  <iframe width="100%" height="100%"  className='loom-plan' src="https://www.loom.com/embed/b62cd3f3d81b4301806d444ef24a4816?sid=2cdc0356-a2e9-49fc-acb2-f58deec425f7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> : ""}
        </div>
        <div className='plan-info'>
        {props.plan === "BRONZE" ? <img className='img-plan' src={BronzeImg}/> : ""}
        {props.plan === "SILVER" ? <img className='img-plan' src={SilverImg}/> : ""}
        {props.plan === "GOLD" ? <img className='img-plan' src={GoldImg}/> : ""}
        <span className='plan-sub'>{props.plan}</span>

        {props.plan === "BRONZE" ? <span className='span-plan-info'>FREE PLAN</span> : ""}
        {props.plan === "SILVER" ? <span className='span-plan-info'>Basic Lions Coaching Bundle</span> : ""}
        {props.plan === "GOLD" ? <span className='span-plan-info'>Premium Level <br/> Lions Coaching Bundle</span> : ""}
        <div className='stripe-btn-div'>
        {props.plan === "BRONZE" ? <button onClick={redirectToBronze} className='stripe-btn'>Subscribe</button> : ""}
        {props.plan === "SILVER" ? <button onClick={redirectToSilver} className='stripe-btn'>Start Now</button> : ""}
        {props.plan === "GOLD" ? <button onClick={redirectToGold} className='stripe-btn'>Start Now</button> : ""}
        </div>
        
        </div>
        
      </div>
      <div className='call-div'>
      {props.plan === "GOLD" ? <iframe
        title="Calendly"
        src="https://calendly.com/leo-matiano/coaching-fit-call"
        width="500px"
        height="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
 : ""}
      </div>

    </div>
  )
}

export default PlanPage