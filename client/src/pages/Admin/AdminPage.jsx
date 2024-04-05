import React, { useEffect, useState } from 'react'
import "./admin.css"

function AdminPage() {
    const serverRoute = "http://localhost:8000/index.php"
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [rank, setRank] = useState('');
    const [password, setPassword] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleRankChange = (e) => {
            setRank(e.target.value);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const userInformation = {
            name: name,
            mail: email,
            rank: rank,
        }
    
        try {
            // Make POST request to PHP server
            const response = await fetch('http://localhost:8000/index.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInformation),
            });
    
            // Check if response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            // Parse response
            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            // Log detailed error message
            console.error('Error:', error.message);
        }
    };
    

  return (
    <div className='admin-wrapper'>
        <div className='admin-header'>
            <span className='admin-text'>Welcome Back Leo!</span> 
        </div>
        <div className='add-member-wrapper'>
            <div className='add-member-container'>
                <span className='header-subtitle'>Add Member</span>
                <form className='add-member-form'>
                <input className="add-member-input" placeholder="Name" value={name} onChange={handleNameChange}/>
                <input className="add-member-input" placeholder="User Password" value={password} onChange={handlePasswordChange}/>
                <input className="add-member-input" placeholder="eMail" value={email} onChange={handleEmailChange}/>
                <input className="add-member-input" placeholder="Rank" value={rank} onChange={handleRankChange}/>
                <button className='add-member-button' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default AdminPage