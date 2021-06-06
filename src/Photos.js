import React from "react"

export default function Photos(props){
    console.log(props.photos);
    if (props.photos){
           return(
        "hi"
    ) 
    }else{
        return null
    }

}