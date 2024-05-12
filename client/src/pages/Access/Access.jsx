import React from 'react';
import "./access.css";

function Access() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Datos del formulario
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const route = "../../public/api/login.php";

    try {
      const response = await fetch(route, {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const data = await response.json(); // Convertir la respuesta a JSON

      if (response.ok) {
        // Respuesta exitosa del servidor
        console.log(data.message); // Registrar mensaje en la consola
      } else {
        // Respuesta de error del servidor
        console.error(data.error); // Registrar error en la consola
      }

    } catch (error) {
      // Error de red o del cliente
      console.error('Error:', error);
    }
  };

  return (
    <div className='access-wrapper'>
      <div className='access-header'>
        <span className='access-text'>Welcome Back!</span> 
      </div>
      <div className='add-member-wrapper'>
        <div className='add-member-container'>
          <span className='header-subtitle'>Log In</span>
          <form className='add-member-form' onSubmit={handleSubmit}>
            <input className="add-member-input" name="email" placeholder="Email" required />
            <input className="add-member-input" name="password" type="password" placeholder="Password" required />
            <button type="submit" className='add-member-button-access'>Submit</button>
          </form>
          <span className='warning-span'>(If you just bought any subscription, Leo will send you your credentials on Email.)</span>
        </div>
      </div>
    </div>
  );
}

export default Access;
