import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";
import "../css/Loading.css";

function Loading() {
   
  return (
    <div className='divPadre'>
      <div className='divHijo'>
         <PacmanLoader 
          color={"red"}
          size={60}
        />
      </div>
    </div>
  )
}

export default Loading