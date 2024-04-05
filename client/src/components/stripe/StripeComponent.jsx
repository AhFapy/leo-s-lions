import React from 'react'
import "./stripe-styles.css"
import bronzeImg from "../../assets/bronze-img.avif"
import silverImg from "../../assets/silver-img.avif"
import goldImg from "../../assets/gold-img.avif"

function StripeCard(props) {
  function redirectToCheckout() {
    window.location.href = "https://leo-lions-coaching-checkout.tiiny.site/"
  }
  return  (
          <div className='stripe-column'>
        <div className='img-div'>
          <img className='img' src={props.img}></img>
        </div>
        <div className='text-div'>
          <span className='product-title'>{props.planTitle}</span>
          <span className='product-subtitle'>{props.planSubtitle}</span>
          <div className='price-div'>
          <span className='product-price-number'>{props.price}</span>
          <p className='price-p'>per<br/>month</p>
          </div>
          <div className='stripe-btn-div'>
            <button onClick={redirectToCheckout} className='stripe-btn'>{props.productPaymentMethod}</button>
          </div>
          <div className='advantage-container'>
          {props.advantages.map((advantage, index) => (
          <>
            <div className='advantage-div'>
            <div className='svg-div'>
           <svg className='advantage-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
          </div>
              <span className='advantage-span' key={index}>{advantage}</span>
            </div>
          </>
      ))}

          </div>


        </div>

      </div>

  )
}

function StripeComponent() {
  const bronzeAdvantages = ["10 Min Weekly Private Call With Leo", "Access To Private Routine Guides (meditation, stretching, exercise...)", "Hunter Tools, Checklists & Templates"];
  const silverAdvantages = ["90 Min Of Weekly Calls", "The Lion Regime Bootcamp", "Hunters Workout Routine", "Killer Habits Course", "The Art Of Persuasion Course", "Master Social Skills Course", "Up Your Health Up Your Brain Course", "Life Mastery Guide", "ONLY 8 SPOTS AVAILABLE"]
  const goldAdvantages = ["3h x Week Of Coaching Calls", "Constant 24/7 Communication", "Step By Step Walk-Trough Of Courses", "Personalized Diet & Workout Plan", "Hack The School System Guide", "Get Rich Reselling Course", "ONLY 4 SPOTS AVAILABLE"]
  
  return (
    <>
    <div className='stripe-wrapper'>
      <StripeCard img={bronzeImg} planTitle="BRONZE PLAN" planSubtitle="FREE" price="0€" productPaymentMethod="Subscribe" advantages={bronzeAdvantages}/>
      <StripeCard img={silverImg} planTitle="SILVER PLAN" planSubtitle="Basic Lions Coaching Bundle" price="129€" productPaymentMethod="Start 7 Day Trial" advantages={silverAdvantages}/>
      <StripeCard img={goldImg} planTitle="GOLD PLAN" planSubtitle="Premium Level Lions Coaching Bundle" price="299€" productPaymentMethod="Start 7 Day Trial" advantages={goldAdvantages}/>
    </div>
    </>
  )
}

export default StripeComponent