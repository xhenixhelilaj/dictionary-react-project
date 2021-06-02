import React,{useState} from "react"
import Results from "./Results"
import axios from "axios"
import "./Dictionary.css"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")
    let [results, setResults]=useState(null)
    function search(event){
        event.preventDefault()
         let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
         axios.get(apiUrl).then(handleResponse)
    }
    function handleChange(event){
        setKeyword(event.target.value)
    }
    function handleResponse(response){
        setResults(response.data[0])
    }
  

    return(
        <div>
            <form onSubmit={search}>
                <input type="search" placeholder="enter a term" onChange={handleChange} />
                <input type="submit" value="🔍" />
            </form>
            <Results results={results} />
        </div>
    );
}