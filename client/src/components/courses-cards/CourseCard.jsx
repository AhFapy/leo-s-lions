import React from 'react'
import "../../pages/courses/courses-styles.css"

function CourseCard(props) {
  

    const redirectToCourse = function() {
      window.location.href = props.route;
    }
  
  return (
    <div className='course-card'>
    <div className='course-card-top'>
        <div className='course-img-div'>
          <img src={props.img} className='course-img'></img>
        </div>
        <span>{props.name}</span>
    </div>

    <div className='bar-bottom-container'>
    <button onClick={redirectToCourse} className='course-btn'>Watch</button>

    </div>

    </div>
  )
}

export default CourseCard