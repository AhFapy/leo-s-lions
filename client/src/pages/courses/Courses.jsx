import React from 'react'
import "./courses-styles.css"
import CourseCard from '../../components/courses-cards/CourseCard'

function Courses() {


  return (
    <div className='courses-wrapper'>
        <div className='courses-top'>
            <span className='courses-sub'>Courses</span>
        </div>
        <div className='courses-card-container'>
            <CourseCard route={"courses/enhanced-masculinity"} name={"Enhanced Masculinity Course"}/>
            <CourseCard route={"courses/tribe-leader"} name={"Tribe Leader Course"}/>
            <CourseCard route={"courses/hack-the-school-system"} name={"Hack The School System Course"}/>
            <CourseCard route={"courses/alpha-social-skills"} name={"Alpha Social Skills Course"}/>
        </div>
    </div>
  )
}

export default Courses