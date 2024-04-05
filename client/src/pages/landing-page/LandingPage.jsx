import React, { useRef, useState } from 'react'
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
import footVideo from "../../assets/plan-imgs/foot-vid.mp4"
import footLion from "../../assets/plan-imgs/foot-lion.jpg"
import playIcon from "../../assets/plan-imgs/play-icon.png"



function LandingPage() {
  const videoRef = useRef(null); // Referencia al elemento de video
  const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar la reproducción del video

  const togglePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
    setIsPlaying(!isPlaying); // Actualiza el estado de reproducción
  };


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
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img bronze-img' onClick={() => redirectToPlan("bronze")} src={bronzeImg}/>
      </Tilt>
      <span className='advantages-span bronze-text'>Bronze</span>
        {bronzeData.map(info => <span className='plan-span'>{info}<br/></span>)}
        <button className='plan-btn' onClick={() => redirectToPlan("bronze")}>See Plan</button>
      </div>
      <div className='img-div'>
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img silver-img' onClick={() => redirectToPlan("silver")} src={silverImg}/>
      </Tilt>
      <span className='advantages-span silver-text'>Silver</span>
      <span className='advantages-span'>Unlock All These Courses</span>
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
        <button className='plan-btn' onClick={() => redirectToPlan("silver")}>See Plan</button>
      </div>
      <div className='img-div' >
      <Tilt options={defaultOptions} className="tilt-box">
        <img className='img gold-img' onClick={() => redirectToPlan("gold")} src={goldImg}/>
      </Tilt>
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
      </div>
        <button className='plan-btn' onClick={() => redirectToPlan("gold")}>See Plan</button>
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
  <span className='foot-span-2'> <span className='foot-span-2-gold'>OR</span> <br/><br/>JOIN ME <br/> & <br/> <span className='foot-span-2-gold'>NEVER BE THE SAME AGAIN</span></span>
  <img className='lion-img' src={footLion}></img>
  <video className='foot-vid' controls ref={videoRef} autoPlay src={footVideo}></video>
  <span className='vid-span'>My Purpose:</span>
  <span className='vid-span-white'>TO GUIDE YOUNG MEN INTO THE PATH<br/>I'M GOING THROUGH, TO ADD <br/> SUCCESSFUL BROTHERS INTO MY TRIBE</span>
  </div>


      {/* <StripeComponent/>
      <button style={{backgroundColor: "white"}} onClick={() => redirectToCourse()}>course</button> */}
    </div>

   </>
  )
}

export default LandingPage