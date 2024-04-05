import React from 'react'
import "../../pages/courses/courses-styles.css"

function CourseCard(props) {
  
    const percentage = 0;
  
    const barStyle = {
      width: '80%',
      height: '1.2rem',
      marginTop: "2rem",
      backgroundColor: 'rgb(228, 228, 228)',
      border: '1px solid black',
      position: 'relative',
      borderRadius: '0.5rem',
      overflow: 'hidden',
      color: "black",
      borderRadius: "1.5rem",
    };
  
    const greenLayerStyle = {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: '#4CBB17',
      position: 'absolute',
      top: '0',
      left: '0',
      borderRadius: '0.5rem',
      transition: 'width 0.5s ease',
      color: "black",
    };

    const redirectToCourse = function() {
      window.location.href = props.data.route;
    }
  
  return (
    <div className='course-card'>
    <div className='course-card-top'>
        <div className='course-img'></div>
        <span>{props.data.courseName}</span>
    </div>

    <div className='bar-bottom-container'>
    <div style={barStyle}>
      <div style={greenLayerStyle}></div>
      <span className='bar-span'>0%</span>
    </div>
    <button onClick={redirectToCourse} className='course-btn'>Start</button>

    </div>

    </div>
  )
}

export default CourseCard