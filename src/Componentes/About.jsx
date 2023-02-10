import React from "react";
import aboutImage from "../images/about.png";
function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>PROXIMAMENTE</h1>
            <p>Es hora de una hamburguesa. Sí, la hamburguesa es el mejor bocadillo cuando la gente tiene hambre y quiere comer algo sabroso. Las hamburgueserías proporcionan a los clientes algo realmente sabroso y crujiente.</p>
          <button>Leer más</button>
        </div>
        <div className='about-image'>
        <img src={aboutImage} alt=""/>
        </div>
    </div>
  )
}

export default About