import React from 'react'
import aboutImage from "../images/hambu.jpg";
function Footer() {
  return (
    <div id='footer'>
        <div className='footer-text'>
            <h1>Footer</h1>
            <p>Centro Histórico,Ciudad de México, MX 12345</p>
            <p>+52 (555) 123-4567</p>
            <p>contacto@lamiafamiglia.com</p>
            <p>2023. UCamp. Todos los derechos reservados.</p>
            <p>Esta es una aplicación ficticia para fines académicos.</p>
        </div>
        <div className='about-image'>
        <img src={aboutImage} alt=""/>
        </div>
    </div>
  )
}

export default Footer