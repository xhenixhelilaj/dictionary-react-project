import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css"
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    setResults(response.data[0]);
    setLoaded(true)
  }

let form =
  <form onSubmit={search}>
<div className="row">
  <div className="col-7"><input
  type="search"
  placeholder="enter a term"
  onChange={handleChange}
  className="form-control"
/></div>
  <div className="col-2">
    <input type="submit" value="🔍" className="btn btn-light" />
  </div>
</div>
</form>
if(loaded){
  return (
    <div>
      <h1>what are you looking for?</h1> 
      {form}
       <Results results={results} />
      <footer><a href="https://github.com/xhenixhelilaj/dictionary-react-project" rel="noreferrer" target="_blank">Open-sourced</a> on Github</footer>
    </div>
  );
}else{
  return(
    <div className="center">
      <h1>what are you looking for?</h1> 
    {form}
    <footer><a href="https://github.com/xhenixhelilaj/dictionary-react-project" rel="noreferrer" target="_blank">Open-sourced</a> on Github</footer>
</div>
  )
}
  
}