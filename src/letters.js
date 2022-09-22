import { useState } from "react"
import App from "./app"

export default function Letters(props){

    const {checkUpstage} = props

    console.log(checkUpstage)

    const alphabet = [
        "a", "b", "c", "d", "e", 
        "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ]
    
    return(
        <div className="letters-guess">
            {alphabet.map((l) => <Letter value={l} upstage ={checkUpstage}/>)}
        </div>
    )   
}

function Letter(props){
    const {value ,upstage} = props
    const[state, setState]= useState(true)

    function checkButton(){
        if(state){
            setState(false)
        }
        upstage()
    }


    return(
        <div className={(state)? "letter active" : "letter deactive"} 
        onClick={() => checkButton()}>
            <h1>{value}</h1>
        </div>
    )
}