import { useState } from "react"

export default function Letters(){
    const alphabet = [
        "a", "b", "c", "d", "e", 
        "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ]
    
    return(
        <div className="letters-guess">
            {alphabet.map((l) => <Letter value={l}/>)}
        </div>
    )   
}

function Letter(props){
    const[state, setState]= useState(true)

    function check(){
        if(state){
            setState(false)
        }
    }

    return(
        <div className={(state)? "letter active" : "letter deactive"} 
        onClick={() => check()}>
            <h1>{props.value}</h1>
        </div>
    )
}