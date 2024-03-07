import React, { useState } from 'react'
import "./auth-styles.css"
import CardButton from '../../components/select-card/CardButton'

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const setEmailUseState = (event) => {
    setEmail(event.target.value);
  };

  const setPasswordUseState = (event) => {
    setPassword(event.target.value);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    try {
      
      const response = await fetch('http://localhost/leo-matiano-access/auth.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email: email, password: password }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();

      if (responseData.success) {
        console.log('Login successful:', responseData.message);
        // Redirect or perform additional actions for successful login
      } else {
        setErrorMessage(responseData.message);
        console.error('Login failed:', responseData.message);
      }
    } catch (error) {
      console.error('Error sending data to PHP:', error);
    }
  };
  

  return (
    <div className='auth-wrapper'>

    <nav>
        <div className='nav-left'>
          <span className='nav-span'>Leo's Lions Coaching</span>
        </div>
        <div className='nav-right'>
        </div>
      </nav>

    <div className='form-container'>

      <div className='form-box'>
        <div className='form-header-div'>
          <span className='form-header'>Welcome!</span>
        </div>

        <div className='input-div'>
        <input placeholder='Email' className='input' onChange={setEmailUseState}/>
        <input placeholder='Password' className='input' type='password' onChange={setPasswordUseState}/>

        <div onClick={formSubmit}>
        <CardButton text="Access"/>
        </div>

        </div>
      </div> 

    </div>
    </div>
  )
}

export default Auth