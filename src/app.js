import words from "./words"
import Game from "./game/game.js"
import Letters from "./letters.js"
import Guess from "./guess.js"

import "./css/reset.css"
import "./css/style.css"
import { useState } from "react"


export default function App(){
    const [value, setValue]= useState(0)

    function determineValue(){
        setValue(value +1)
    }

    return(
        <>
            <Game value={value}/>
            <Letters checkUpstage={determineValue}/>
            <Guess/>
        </>
    )
    
}

