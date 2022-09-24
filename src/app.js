import words from "./words"
import Game from "./game/game.js"
import Letters from "./letters.js"
import Guess from "./guess.js"

import "./css/reset.css"
import "./css/style.css"
import { useState } from "react"


export default function App(){
    const map ={"â":"a","Â":"A","à":"a","À":"A","á":"a","Á":"A","ã":"a","Ã":"A","ê":"e","Ê":"E","è":"e","È":"E",
    "é":"e","É":"E","î":"i","Î":"I","ì":"i","Ì":"I","í":"i","Í":"I","õ":"o","Õ":"O","ô":"o","Ô":"O","ò":"o",
    "Ò":"O","ó":"o","Ó":"O","ü":"u","Ü":"U","û":"u","Û":"U","ú":"u","Ú":"U","ù":"u","Ù":"U","ç":"c","Ç":"C"}
    const [init, setInit] = useState(0)
    const [value, setValue]= useState(0)
    const [word, setWord] = useState("")
    const [wordDiscovery, setWordDiscovery]= useState([])
    const [letterGuessed, setLettersGuessed] = useState([])

    function compareArrays(x,y){ 
        if (x.length === y.length){
            let counter = 0
            for(let i = 0; i< x.length; i++){
                if(x[i]=== y[i]){
                    counter ++
                }
            }
            if(counter === x.length){
                return true
            }
            return false
        }
    }

    function startGame(){
        const wordGame = words[Math.floor(Math.random() * words.length)]
        setWord(wordGame)
        setWordDiscovery(wordGame.split("").map((l)=> letterGuessed.includes(l)? l : ""))    
        setInit(1)
    }

    function determineValue(letter){
        const wordFormatted = word.replace(/[\W\[\] ]/g,function(a){return map[a]||a})
        let letterBox 
        let letterGuessedNow
        let passed = 0

        switch(letter){
            case "c":
                letterBox = ["c", "ç"]
                letterGuessedNow= letterGuessed.concat(letterBox)
                break
            case "a":
                letterBox = ["a", "à", "á", "â", "ã"]
                letterGuessedNow= letterGuessed.concat(letterBox)
                break
            case "a":
                letterBox = ["e", "é", "ê"]
                letterGuessedNow= letterGuessed.concat(letterBox)
                break
            case "i":
                letterBox = ["i", "í", "î"]
                letterGuessedNow= letterGuessed.concat(letterBox)
                break
            case "o":
                letterBox = ["o", "ó", "ố","õ"]
                letterGuessedNow= letterGuessed.concat(letterBox)
                break
            case "u":
                letterBox = ["u", "ú", "û"]
                letterGuessedNow= letterGuessed.concat(letterBox)
                break
            default:
                letterGuessedNow= [...letterGuessed, letter]
                passed =1
        }

        setLettersGuessed(letterGuessedNow)

        if(init){
            if (wordFormatted.includes(letter)){
                const newValue = word.split("").map((l)=> letterGuessedNow.includes(l)? l : "")
                setWordDiscovery(newValue)    
                console.log(newValue)
                console.log(word.split(""))
                if(compareArrays(newValue, word.split(""))){
                    winGame()
                }
            }else{
                setValue(value +1)
                if(value === 5){
                    loseGame()
                }
            }
        }
    }
    
    function winGame(){
        console.log("sadbi")
    }

    function loseGame(){
        setInit(0)
    }


    return(
        <>
            <Game 
                value={value} 
                startGameClick={startGame}
                word={(init===1)?wordDiscovery:word}
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

