import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

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
  }

  let form = <form onSubmit={search}>
        <div className="row">
          <div className="col-9"><input
          type="search"
          placeholder="enter a term"
          onChange={handleChange}
          className="form-control"
        /></div>
          <div className="col-3">
            <input type="submit" value="🔍" className="btn btn-light" />
          </div>
        </div>
      </form>


     return (
    <div className="name">
      {form}  
      <Results results={results} />
    </div>
  );
  
  
}