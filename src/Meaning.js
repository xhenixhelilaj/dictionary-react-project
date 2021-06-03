import React from "react"
import "./Meaning.css"
import Synonyms from "./Synonyms"

export default function Meaning(props){
    console.log(props.meaning)
    return ( 
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            {props.meaning.definitions.map(function (definition, index){
                return (
                    <div key={index}>
                        <p><div className="definition">{definition.definition}</div>
                          
                          <em>{definition.example}</em>  
                          <br />
                          <strong><Synonyms synonyms={definition.synonyms}/></strong>
                          
                        </p>
                    </div>
                )
            })}
            
        </div>
    )
}