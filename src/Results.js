import React from "react"
import Meaning from "./Meaning"
import "./Results.css"
import Phonetic from "./Phonetic"

export default function Results(props){
    console.log(props.results)
    if (props.results){
        return(
            <div className="Results">
                <div className="main"><h3>{props.results.word}</h3> 
                  {props.results.phonetics.map(function(phonetic, index){
                    return <div key={index}>
                        <Phonetic phonetic={phonetic}/>
                    </div>
                })}</div>
                
                {props.results.meanings.map(function (meaning, index){
                    return <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                })}
             
            </div>
        )
    }else{
        return null
    }
}