import React from 'react'
import "./gold-lobby-styles.css"

function GoldLobby() {
  const keyPassword = "LpNBEIQN13RW2aw";

  const handleSubmit = function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    
    const inputValue = event.target.elements.key.value;
    
    if (inputValue === keyPassword) {
      document.querySelector('#access-container').classList.add('fade-out');
      document.querySelector('#access-container').classList.add('hidden');
      document.querySelector('.course-wrapper').classList.remove('hidden');
    } else {
      document.querySelector("#incorrectKey").classList.remove("hidden")
    }
  }

  return (
    <>
    <div id='access-container'>
    <div className='access-wrapper'>
    <div className='access-header'>
    </div>
    <div className='add-member-wrapper'>
      <div className='add-member-container'>
        <span className='header-subtitle'>Introduce The Key To Access The Gold Lobby</span>
        <form className='add-member-form' onSubmit={handleSubmit}>
          <input className="add-member-input" name="key" type="password" placeholder="Key" required />
          <button type="submit" className='add-member-button-access'>Submit</button>
          <span className='warning-span red hidden' id='incorrectKey'>Incorrect Key</span>
        </form>
        
        <span className='warning-span'>(If you just bought any subscription, Leo will send you the key on Email.)</span>
      </div>
    </div>
  </div>
  </div> 

    <div className='course-wrapper hidden'>
      <div className='course-nav'>
        <span className='course-title'>Gold Lobby</span>
      </div>
      <div className='gold-lobby-body'>
      <span className='under-header-text'>Book Your Call</span>
      </div>
      <div className='iframe-container-gold'>
      <iframe
        title="Calendly"
        src="https://calendly.com/leo-matiano/30min"
        width="500px"
        height="500px"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
    <div className="whatsapp-btn-wrap">
    <a href="https://wa.me/+34649138322?text=Hello" class="whatsapp-button">Message Me On WhatsApp</a>
</div>

    </div>
    </>
  )
}

export default GoldLobby