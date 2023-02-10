import React from "react";
import Productbox from './Productbox';
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
function Products() {
  return (
    <div id='products'>
        <h1>ESCOGE Y DISFRUTA</h1>
        <p>Una dieta equilibrada es una hamburguesa en ambas manos</p>
        <div className='a-container'>
            <Productbox image={pimage1} tilte="Luger Burger"/>
            <Productbox image={pimage2} tilte="Le pigeon burger"/>
            <Productbox image={pimage1} tilte="Luger Burger"/>
        </div>
    </div>
  )
}

export default Products