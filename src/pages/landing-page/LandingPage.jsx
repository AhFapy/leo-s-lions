import React, { useEffect } from 'react'
import "./landing-page-styles.css"
import DefaultButton from '../../components/DefaultButton'
import bronzeImg from "../../assets/bronze-img.avif"
import silverImg from "../../assets/silver-img.avif"
import goldImg from "../../assets/gold-img.avif"
import {motion} from "framer-motion"


function LandingPage() {
  
  const scrollDown = () => {
    window.scrollTo({
      top: "650",
      behavior: 'smooth', 
    });
  };
  const redirectToPlan = function(route) {
    window.location.href = `/${route}-plan`
  }

  const redirectToCourse = function() {
    window.location.href = "/courses"
  }

  const bronzeData = ["Access To Leo's Personal Tools, Templates & Checklists", "Access To Private Routine", "Leo's Self Improvement Habit Guides (Meditation, Visualization, Stretching...)"];
  const silverData = ["Access To ALL 8 OF LEO'S HIGH LEVEL COURSES:", "- Hunters Habits Course (50eur) ","- Mens Life Mastery Course (25eur) ","- Up Your Health Up Your Wealth Course (75eur) ","-Kings Social Skills Course (50$) ","-Unleash Your Killer Instinct Course (25$) ","- Learn To Lead The Pack Course (25$) ","-Full LooksMaxxing Course (50eur/$) ","- Hack The School System Course (75$)", "375 eur for 129? That's A Deal"];
  const goldData = ["Access To ALL 8 Courses (Silver Pack)", "Daily Texting And Communication (Whatsapp)", "Full Daily, Weekly & Monthly Personalized Step By Step Gameplan To Ensure Goal Achievement", "1h Onboarding & Planning Coaching Call, Checkup & Coaching Call Every Other Week"];

  
  return (
    <>
    <div className='lp-wrapper'>
      <nav>
        <div className='nav-left'>
          <span className='nav-span'>Become The King Of The Jungle</span>
        </div>

        <div className='nav-right'>
        </div>

      </nav>
      <div className='lp-header'>
          <span className='header-text'>LEO'S LIONS <br/>COACHING</span>
          <span className='under-header-text'>JOIN THE PACK & BECOME THE KING OF THE JUNGLE.</span>
      </div>
      <div className='under-header'>
        <div className='scroll-down' onClick={scrollDown}>
            <motion.dev 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="motion-dev"
            />
        </div>
      </div>
    </div>

    <div className='first-cta-wrapper'>
      <span className='header-text'>Select Your Rank</span>
      <div className='img-wrapper'>
      <div className='img-div'>
        <img className='img' onClick={() => redirectToPlan("bronze")} src={bronzeImg}/>
        {bronzeData.map(info => <span className='plan-span'>{info}<br/></span>)}
        <button className='plan-btn' onClick={() => redirectToPlan("bronze")}>See Plan</button>
      </div>
      <div className='img-div'>
        <img className='img' onClick={() => redirectToPlan("silver")} src={silverImg}/>
        {silverData.map(info => <span className='plan-span'>{info}<br/></span>)}
        <button className='plan-btn' onClick={() => redirectToPlan("silver")}>See Plan</button>
      </div>
      <div className='img-div'>
        <img className='img' onClick={() => redirectToPlan("gold")} src={goldImg}/>
        {goldData.map(info => <span className='plan-span'>{info}<br/></span>)}
        <button className='plan-btn' onClick={() => redirectToPlan("gold")}>See Plan</button>
      </div>
      </div>

      {/* <StripeComponent/> */}
      <button style={{backgroundColor: "white"}} onClick={() => redirectToCourse()}>course</button>
    </div>

   </>
  )
}

export default LandingPage