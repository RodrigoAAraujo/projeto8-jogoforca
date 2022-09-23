import { useState } from "react"
import App from "./app"

export default function Letters(props){
    const {checkLetter, putOn} = props

    const alphabet = [
        "a", "b", "c", "d", "e", 
        "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ]
    
    return(
        <div className="letters-guess">
            {alphabet.map((l) => 
            <Letter 
                value={l} 
                checkLetter ={checkLetter}
                putOn={putOn}
            />)}
        </div>
    )   
}

function Letter(props){
    const {value ,checkLetter, putOn} = props
    const [putOnCheck, setCheck] = useState(true)

    console.log(checkLetter)


    function checkButton(value){
        if(putOn && putOnCheck){
            checkLetter(value)
            setCheck(false)
        }
    }




    return(
        <div className={(putOn && putOnCheck)? "letter active" : "letter deactive"} 
        onClick={() => checkButton(value)}>
            <h1>{value}</h1>
        </div>
    )
}