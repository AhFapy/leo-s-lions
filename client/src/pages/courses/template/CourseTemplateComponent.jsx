import React, { useState } from 'react';
import "./course-component-styles.css";

const coursesData = {
  "Enhanced Masculinity Course": {
    sections: [
      { sectionName: "Basics", link: "https://www.loom.com/embed/9a175b42eba8451388e16947a20da1d5?sid=abb76fb6-3440-4c44-94e0-4ecada734c7c" },
      { sectionName: "The Masculine Man", link: "https://www.loom.com/embed/592c04d86e8644f3946ccd77797dac51?sid=599add78-ab31-4ff3-bffb-193c797c1a3b"},
      { sectionName: "The Feminine Gifts", link: "https://www.loom.com/embed/0adf9edb9b7d418183d127b1bd3651c0?sid=5d9c6ec9-e3f4-4185-b27b-2d132740095b" },
      { sectionName: "Using Red Pill To Attract", link: "https://www.loom.com/embed/368976a8976f476785f8a4b6b75241ab?sid=3e108979-4a21-4086-a877-c1e1cd6e582e" },
      { sectionName: "Hard D Energy", link: "https://www.loom.com/embed/682cad824d7d4e4b9bd4436032bbd9d5?sid=dc64b902-a882-4a06-97a5-57c6d7bd1fb1" },
      { sectionName: "Levels", link: "https://www.loom.com/embed/9330963c351d4a239c15b5abfdedea7d?sid=9fb89e0a-4702-42c0-9dbf-8598cd9f1126" },
    ]
  },
  // Add more courses here
};

function CourseTemplateComponent(props) {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSelectionChange = (index) => {
    setSelectedSection(index);
  };

  const courseData = coursesData[props.courseKey];

  if (!courseData) {
    return <div>No course found for the key: {props.courseKey}</div>;
  }

  return (
    <div className='course-wrapper'>
      <div className='course-nav'>
        <span className='course-title'>{props.courseKey}</span>
      </div>
      <div className='course-main-body'>
        <div className='course-sections'>
          <div className='course-section-container'>
            {/* Render course sections */}
            {courseData.sections.map((section, index) => (
              <div className='section' key={index} onClick={() => handleSelectionChange(index)}>
                <span className='section-title'>{section.sectionName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className='course-video-container'>
          <div className='course-video'>
            {/* Render selected course section's video */}
            {selectedSection !== null && (
              <iframe
                className='course-video-iframe'
                src={courseData.sections[selectedSection].link}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseTemplateComponent;
