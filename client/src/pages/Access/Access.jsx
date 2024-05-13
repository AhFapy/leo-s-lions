import React from 'react';
import "./access.css";
import CourseCard from '../../components/courses-cards/CourseCard';
import goldImg from "../../assets/gold-img.jpg"
import coursesImg from "../../assets/plan-imgs/foot-2.jpg"

function Access() {

  const redirectToCourse = function() {
    window.location.href = "/courses"
  }

  return (
    <div className='access-wrapper'>
        <CourseCard route={"/courses"} name={"Courses"} img={coursesImg}/>
        <CourseCard route={"/gold-lobby"} name={"Book A Call (Gold)"} img={goldImg}/>
    </div>
  );
}

export default Access;
