import React from 'react'
import "./access.css"

function Access() {
  return (
    <div className='access-wrapper'>
        <div className='access-header'>
            <span className='access-text'>Welcome Back!</span> 
        </div>
        <div className='add-member-wrapper'>
            <div className='add-member-container'>
                <span className='header-subtitle'>Log In</span>
                <form className='add-member-form'>
                <input className="add-member-input" placeholder="Email"/>
                <input className="add-member-input" placeholder="Password"/>
                <button className='add-member-button-access'>Submit</button>
                </form>
                <span className='warning-span'>(If you just bought any subscription, Leo will send you your credentials on Email.)</span>
            </div>
        </div>
    </div>
  )
}

export default Access