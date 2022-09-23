import words from "./words"
import Game from "./game/game.js"
import Letters from "./letters.js"
import Guess from "./guess.js"

import "./css/reset.css"
import "./css/style.css"
import { useState } from "react"


export default function App(){
    const [init, setInit] = useState(0)
    const [value, setValue]= useState(0)
    const [word, setWord] = useState("")
    const [letterGuess, setLetter] = useState("")

    function startGame(){
        setWord(words[Math.floor(Math.random() * words.length)])
        setInit(1)
    }

    function determineValue(letter){
        if (init){
            console.log(word)
            if (!word.includes(letter)){
                setValue(value +1)
            }else{

            }
        }
    }
    


    return(
        <>
            <Game 
                value={value} 
                startGameClick={startGame}
                word={(init===1)?word:false}
                letter={(init===1)?letterGuess:false}
            />
            <Letters 
                checkLetter={determineValue} 
                putOn={(init === 1)? true:false}
            />
            <Guess
                putOn={(init === 1)? true:false}
            />
        </>
    )
    
}

