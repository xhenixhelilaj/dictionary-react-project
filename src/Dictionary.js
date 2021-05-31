import React,{useState} from "react"

export default function Dictionary(){
    let [keyword, setKeyword] = useState("")
    function search(event){
        event.preventDefault()
        alert(`Searching for ${keyword}`)
    }
    function handleChange(event){
        setKeyword(event.target.value)
    }
    return(
        <div>
            <form onSubmit={search}>
                <input type="search" placeholder="enter a term" onChange={handleChange} />
                <input type="submit" value="🔍" />
            </form>
        </div>
    )
}