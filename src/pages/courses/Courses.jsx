import React from 'react'
import "./courses-styles.css"
import CourseCard from '../../components/courses-cards/CourseCard'

function Courses() {
  const mewingCourseData = {
    courseName: "Mewing Course",
    sections: [
      {sectionName: "Introduction", subSections: ["What is Mewing?", "The Benefits"]},
      {sectionName: "How To Mew?", subSections: ["Action Step"]},
  ],
  route: "/courses/mewing"

  }
  const physiqueCourseData = {
    courseName: "Aesthetique Physique Course",
    sections: [
      {sectionName: "Introduction", subSections: ["What is Mewing?", "The Benefits"]},
      {sectionName: "How To Mew?", subSections: ["Action Step"]},
  ],
  route: "/courses/physique"
  }
  const businessCourseData = {
    courseName: "Scale Your Business",
    sections: [
      {sectionName: "Introduction", subSections: ["What is Mewing?", "The Benefits"]},
      {sectionName: "How To Mew?", subSections: ["Action Step"]},
      ],
    route: "/courses/business"
  }


  return (
    <div className='courses-wrapper'>
        <div className='courses-top'>
            <span className='courses-sub'>Courses</span>
        </div>
        <div className='courses-card-container'>
            <CourseCard data={mewingCourseData}/>
            <CourseCard data={physiqueCourseData}/>
            <CourseCard data={businessCourseData}/>
        </div>
    </div>
  )
}

export default Courses