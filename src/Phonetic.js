import React from "react"
import "./Phonetic.css"

export default function Phonetic(props){
 const audio = new Audio(props.phonetic.audio);
 function playSound(){
     audio.play();
 }
 return(
     <div className="Phonetic">
         <span className="sound"> 
           <i className="fas fa-volume-up" onClick={playSound}></i>
         </span>
         <span className="text">{props.phonetic.text}</span>
     </div>
 )

}