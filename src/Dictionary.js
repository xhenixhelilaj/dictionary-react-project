import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos"
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null)
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsApiKey = "563492ad6f9170000100000121c8453cced34091b1de5c80162617ed"
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`
    let headers = { Authorization: `Bearer ${pexelsApiKey}`};
    axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse)
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
    setLoaded(true)
  }

  function handlePexelsResponse(response){
    console.log(response)
    setPhotos(response.data.photos)
  }

let form = <form className="form" onSubmit={search}>
  <div className="row"><div className="col-9"> <input type="search" placeholder="enter a term" onChange={handleChange} className="form-control"/></div>
  <div className="col-3">
                      <input type="submit" value="Search" className="btn btn-outline-dark w-100"/>
                    </div> </div>
             
          </form>

if(loaded){
  return (
    <div className="response">
      <h1>What are you looking for?</h1> 
      {form}
      <div className="results">
        <Results results={results}/>
        <Photos photos={photos} />
        </div>
      <footer><a href="https://github.com/xhenixhelilaj/dictionary-react-project" rel="noreferrer" target="_blank">Open-sourced</a> on Github</footer>
    </div>
  );
}else{
  return(
    <div>
      <div className="center">
        <h1>what are you looking for?</h1>
       {form}
       <footer><a href="https://github.com/xhenixhelilaj/dictionary-react-project" rel="noreferrer" target="_blank">Open-sourced</a> on Github</footer>
 </div>
      
    </div>
  )
}
  
}