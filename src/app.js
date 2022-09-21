import words from "./words"
import Game from "./game/game.js"
import Letters from "./letters.js"
import Guess from "./guess.js"

import "./css/reset.css"
import "./css/style.css"


export default function App(){
    return(
        <>
            <Game/>
            <Letters/>
            <Guess/>
        </>
    )
    
}

