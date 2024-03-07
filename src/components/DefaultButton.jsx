import React from 'react'
import "./default-button.css"

function DefaultButton() {

  const scrollToBottom = () => {
    window.scrollTo({
      top: "650",
      behavior: 'smooth', 
    });
  };

  return (
    <button className="learn-more" onClick={scrollToBottom}>
    <span className="circle" aria-hidden="true">
    <span className="icon arrow"></span>
    </span>
    <span className="button-text">Learn More</span>
    </button>
  )
}

export default DefaultButton