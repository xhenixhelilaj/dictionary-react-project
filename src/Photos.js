import React from "react"

export default function Photos(props){
    console.log(props.photos);
    if (props.photos){
           return(
        <div className="Photos">
            <div className="row">
            {props.photos.map(function(photo, index){
                <div className="col-3">
                return <img src={photo.src.landscape} key={index} />
                </div>
            })}
          </div>  
        </div>
    ) 
    }else{
        return null
    }

}