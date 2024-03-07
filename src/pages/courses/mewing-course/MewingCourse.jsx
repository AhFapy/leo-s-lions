import React from 'react'
import "./mewing-styles.css"

function MewingCourse() {

    const mewingCourseData = {
        courseName: "Mewing Course",
        sections: [
          {sectionName: "Introduction", subSections: ["What is Mewing?", "The Benefits"]},
          {sectionName: "How To Mew?", subSections: ["Action Step"]},
      ],
      route: "/courses/mewing"
    }

  return (
    <div className='course-wrapper'>
        <div className='course-nav'>
            <span className='course-title'>{mewingCourseData.courseName}</span>
        </div>
        <div className='course-main-body'>
            <div className='course-sections'>
                <div className='course-section-container'>

                {mewingCourseData.sections.map((section, index) => (
            <div className='section' key={index}>
              <span className='section-title'>{index + 1}. {section.sectionName}</span>
              <ul className='sub-sections'>
                {section.subSections.map((subSection, subIndex) => (
                  <li className='course-sub-section' key={subIndex}>{subSection}</li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        </div>
        <div className='course-video-container'>
            <div className='course-video'>
                <img className='course-img' src='https://dudewipes.com/cdn/shop/articles/gigachad.jpg?v=1667928905&width=2048'></img>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MewingCourse