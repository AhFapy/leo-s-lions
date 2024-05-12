import React from 'react'
import "./courses-styles.css"
import "../Access/access.css"
import CourseCard from '../../components/courses-cards/CourseCard'
import image1 from "../../assets/plan-imgs/a.jpg"
import image2 from "../../assets/plan-imgs/b.jpg"
import image3 from "../../assets/plan-imgs/c.jpg"
import image4 from "../../assets/plan-imgs/d.jpg"
import image5 from "../../assets/plan-imgs/e.jpg"
import image6 from "../../assets/plan-imgs/f.jpg"
import image7 from "../../assets/plan-imgs/g.jpg"
import image8 from "../../assets/plan-imgs/h.jpg"
import footLion from "../../assets/plan-imgs/foot-lion.jpg"


function Courses() {
  const keyPassword = "aWvEgb3pKkWZ0Dh";

  const handleSubmit = function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    const inputValue = event.target.elements.key.value;
    
    if (inputValue === keyPassword) {
      document.querySelector('#access-container').classList.add('fade-out');
      document.querySelector('#access-container').classList.add('hidden');
      document.querySelector('.courses-wrapper').classList.remove('hidden');
    } else {
      document.querySelector("#incorrectKey").classList.remove("hidden")
    }
  }
  
  
  return (
    <>
    {/* <div id='access-container'>
    <div className='access-wrapper'>
    <div className='access-header'>
    </div>
    <div className='add-member-wrapper'>
      <div className='add-member-container'>
        <span className='header-subtitle'>Introduce The Key To Access The Courses</span>
        <form className='add-member-form' onSubmit={handleSubmit}>
          <input className="add-member-input" name="key" type="password" placeholder="Key" required />
          <button type="submit" className='add-member-button-access'>Submit</button>
          <span className='warning-span red hidden' id='incorrectKey'>Incorrect Key</span>
        </form>
        
        <span className='warning-span'>(If you just bought any subscription, Leo will send you the key on Email.)</span>
      </div>
    </div>
  </div>
  </div> */}



    <div className='courses-wrapper'>
        <div className='courses-top'>
            <span className='courses-sub'>Courses</span>
        </div>
        <div className="before-watching-courses">
      <iframe
        src="https://www.loom.com/embed/673037d097824072930443074b00c3fc?sid=bebab7a3-2505-4894-a536-481317cd255c"
        frameBorder="0"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
    <div className='courses-card-container'>
    <CourseCard route={"courses/before-watching"} name={"Before Watching Courses"} img={footLion}/>
    </div>

        <div className='courses-card-container'>
        <CourseCard route={"courses/men-life-mastery"} name={"Men's Life Mastery Course"} img={image1}/>
        <CourseCard route={"courses/hack-the-school-system"} name={"Hack The School System Course"} img={image2}/>
        <CourseCard route={"courses/tribe-leader-course"} name={"Tribe Leader Course"} img={image3}/>
        </div>
        <div className='courses-card-container'>
        <CourseCard route={"courses/winners-mindset-course"} name={"Winner Mindsets Course"} img={image4}/>
        <CourseCard route={"courses/killer-habits-course"} name={"Killer Habits Course"} img={image5}/>
        <CourseCard route={"courses/enhanced-masculinity"} name={"Enhanced Masculinity Course"} img={image6}/>
        </div>
        <div className='courses-card-container'>
        <CourseCard route={"courses/up-your-health-up-your-wealth"} name={"Up Your Health Up Your Wealth Course"} img={image7}/>
        <CourseCard route={"courses/alpha-social-skills"} name={"Alpha Social Skills Course"} img={image8}/>
        </div>
    </div>
    </>
  )
}

export default Courses