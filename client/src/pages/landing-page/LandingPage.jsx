import React, { useEffect } from 'react'
import "./landing-page-styles.css"
import DefaultButton from '../../components/DefaultButton'
import bronzeImg from "../../assets/plan-imgs/bronze.jpg"
import silverImg from "../../assets/plan-imgs/silver.jpg"
import goldImg from "../../assets/plan-imgs/gold.jpg"
import LandingImg from "../../assets/landingimg.png"
import {motion} from "framer-motion"
import { Tilt } from 'react-tilt'
import { importAllImages } from '../../utils';
import image1 from "../../assets/plan-imgs/a.jpg"
import image2 from "../../assets/plan-imgs/b.jpg"
import image3 from "../../assets/plan-imgs/c.jpg"
import image4 from "../../assets/plan-imgs/d.jpg"
import image5 from "../../assets/plan-imgs/e.jpg"
import image6 from "../../assets/plan-imgs/f.jpg"
import image7 from "../../assets/plan-imgs/g.jpg"
import image8 from "../../assets/plan-imgs/h.jpg"
import callsImg from "../../assets/plan-imgs/calls.jpg"
import gameplanImg from "../../assets/plan-imgs/gameplan.jpg"
import dailyCommunicationImg from "../../assets/plan-imgs/daily-communication.jpg"
import foot1 from "../../assets/plan-imgs/foot-1.jpg"
import foot2 from "../../assets/plan-imgs/foot-2.jpg"
import foot3 from "../../assets/plan-imgs/foot-3.jpg"
import foot4 from "../../assets/plan-imgs/foot-4.jpg"
import footVideo from "../../assets/plan-imgs/foot-ivd.mp4"
import footLion from "../../assets/plan-imgs/foot-lion.jpg"
import playIcon from "../../assets/plan-imgs/play-icon.png"
import goldContract from "../../assets/plan-imgs/gold-contract.jpg"
import fullAccess from "../../assets/plan-imgs/full-access.jpg"


function LandingPage() {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

useEffect(() => {
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  script.async = true;
  document.body.appendChild(script);

  return () => {
    document.body.removeChild(script);
  };
}, []);

  const scrollDown = () => {
    window.scrollTo({
      top: "650",
      behavior: 'smooth', 
    });
  };

  const redirectToBronze = function() {
    window.location.href = "https://pool-stop-378.notion.site/Leo-s-Lion-Teamspace-e97e36de437547a3b2c0421992fb12df?pvs=4"
  }

  const redirectToPlan = function(route) {
    window.location.href = `/${route}-plan`
  }

  const redirectToAccess = function() {
    window.location.href = "/access"
  }

  const bronzeData = ["Access To Leo's Personal Tools, Templates & Checklists", "Access To Private Routine", "Leo's Self Improvement Habit Guides (Meditation, Visualization, Stretching...)"];
  const silverData = ["Access To ALL 8 OF LEO'S HIGH LEVEL COURSES:", "- Hunters Habits Course (50eur) ","- Mens Life Mastery Course (25eur) ","- Up Your Health Up Your Wealth Course (75eur) ","-Kings Social Skills Course (50$) ","-Unleash Your Killer Instinct Course (25$) ","- Learn To Lead The Pack Course (25$) ","-Full LooksMaxxing Course (50eur/$) ","- Hack The School System Course (75$)", "375 eur for 129? That's A Deal"];
  const goldData = ["Access To ALL 8 Courses (Silver Pack)", "Daily Texting And Communication (Whatsapp)", "Full Daily, Weekly & Monthly Personalized Step By Step Gameplan To Ensure Goal Achievement", "1h Onboarding & Planning Coaching Call, Checkup & Coaching Call Every Other Week"];

  function redirectToCalendly() {
    window.location.href = "https://calendly.com/leo-matiano/coaching-fit-call"
  }

  const redirectToX = function() {
    window.location.href = "https://twitter.com/leo__matiano"
  }
  
  const redirectToInstagram = function() {
    window.location.href = "https://www.instagram.com/leo.matiano?utm_source=qr"
  }


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
          <span className='header-text'>LEO'S LIONS<br/> DEN</span>
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
      <span className='under-header-text pointer' onClick={redirectToAccess}>Or <b>Access</b>.</span>
      <div className='img-wrapper'>
      <div className='img-div'>
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img bronze-img' onClick={() => redirectToPlan("bronze")} src={bronzeImg}/>
      </Tilt>
      <span className='advantages-span bronze-text'>Bronze</span>
        {bronzeData.map(info => <span className='bronze-text bronze-span'>{info}<br/></span>)}
        <button className='plan-btn bronze-btn' onClick={() => redirectToPlan("bronze")}>See Plan</button>
      </div>
      <div className='img-div'>
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img silver-img' onClick={() => redirectToPlan("silver")} src={silverImg}/>
      </Tilt>
      <span className='advantages-span silver-text'>Silver</span>
      <span className='advantages-span silver-text'>Unlock All These Courses</span>
      <div className='plan-img-wrapper'>
      <img className='plan-img' src={image1}></img>
      <img className='plan-img' src={image2}></img>
      <img className='plan-img' src={image3}></img>
      </div>
      <div className='plan-img-wrapper'>
      <img className='plan-img' src={image4}></img>
      <img className='plan-img' src={image5}></img>
      <img className='plan-img' src={image6}></img>
      </div>
      <div className='plan-img-wrapper'>
      <img className='plan-img' src={image7}></img>
      <img className='plan-img' src={image8}></img>
      </div>
      <div className='silver-prices'>
          <span><span className='silver-prices-span'><b>99x4 + 49x4 = </b></span><span className='silver-prices-subtext'>592€</span></span><br/><br/>
        </div>
      <span className='under-header-text silver-price-span'>FOR ONLY A 1 TIME FEE OF 129€!</span>

        <button className='plan-btn silver-btn' onClick={() => redirectToPlan("silver")}>See Plan</button>
      </div>
      <div className='img-div' >
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img gold-img' onClick={() => redirectToPlan("gold")} src={goldImg}/>
      </Tilt>
      <span className='advantages-span gold-text'><b>LEO'S LIONS COACHING</b></span>
      <span className='advantages-span gold-text'>Gold</span>
        <div className='gold-showcase-div'>
          <img className='gold-plan-img' src={callsImg}></img>
          <span className='showcase-text'>1-1 Coaching Calls</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <img className='gold-plan-img' src={dailyCommunicationImg}></img>
          <span className='showcase-text'>Daily Communication</span>
        </div>
        <div className='gold-showcase-div '>
        <img className='gold-plan-img' src={gameplanImg}></img>
          <span className='showcase-text'>Personalised Gameplan</span>
        </div>
        <div className='gold-showcase-div reverse'>
        <img className='gold-plan-img' src={goldContract}></img>
          <span className='showcase-text'>90 Day Contract</span>
        </div>
        <div className='gold-showcase-div '>
        <img className='gold-plan-img' src={fullAccess}></img>
          <span className='showcase-text'>Full Access To Bronze <br/> and Silver Plans</span>
        </div>
        <div className='gold-prices'>
          <span className='gold-prices-span'><b>1-1 Coaching Calls</b></span> <br/><span className='gold-prices-subtext'>Each one is normally 30$, you get an Onboarding Call + 3 Calls/mo. (90eur)</span><br/><br/>
          <span className='gold-prices-span'><b>Daily Chat Coaching</b></span> <br/><span className='gold-prices-subtext'>So powerful you wont't even need calls because of it ($99/mo)</span><br/><br/>
          <span className='gold-prices-span'><b>Personalized Goal-Oriented Day-by-Day Monthly Gameplan</b></span> <br/><span className='gold-prices-subtext'>Just follow it and see the results ($30/mo)</span><br/><br/>
          <span><span className='gold-prices-end-span-no-bright'>$219 (gold) + $592 (silver included in gold) = </span><span className='gold-prices-end-span'>$804 FOR 299/mo!</span></span>
        </div>

      </div>
        <button className='plan-btn gold-btn' onClick={() => redirectToPlan("gold")}>See Plan</button>
      </div>
      
  <div className='foot-content-div'>
    <img className='foot-img' src={foot1}></img>
    <span className='foot-span'>DON'T JOIN <br/> & <br/> <span className='foot-span red'>DON'T IMPROVE</span></span>
    <img className='foot-img-2' src={foot2}></img>
  </div>
  <div className='foot-content-div'>
    <img className='foot-img-3' src={foot3}></img>
    <span className='foot-span-2'>LIVE AN AVERAGE LIFE <br/> & <br/> <span className='foot-span-2 red'>LOSE YOUR FREEDOM</span></span>
    <img className='foot-img-4' src={foot4}></img>
  </div>
  <div className='foot-content-div column'>
  <video className='foot-vid' controls src={footVideo}></video>

  <span className='foot-span-2'> <br/><span className='foot-span-2-gold OR-span'>OR</span> <br/><br/>

  <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
      <iframe
        src="https://calendly.com/leo-matiano/coaching-fit-call"
        style={{ border: 0, height: '100%', width: '100%' }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>

  <br/><br/><span className='join-me-size'>JOIN ME</span> <br/> & <br/> <span className='foot-span-2-gold'><span className='join-me-size'>NEVER</span><br/><br/> BE THE SAME AGAIN</span></span>
  <img className='lion-img' src={footLion}></img>
  <span className='refund-span'>100% FULL REFUND if you don't achieve your trimestral Goals & Not Happy with the Product (I know it won't happen that's why I'm betting on it)</span><br/><br/>
  </div>
  <div className='footer'>
  <span className='foot-span-2'>Leo<span className='foot-span-2 red'> Matiano</span></span>
  <div className='footer-svgs-container'>
  <svg onClick={redirectToX} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='svg'><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
  <svg onClick={redirectToX} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className='svg'><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
  </div>
  </div>
  

    </div>

   </>
  )
}

export default LandingPage