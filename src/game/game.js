import ForcView from "./forcview.js"
import GameInit from "./gameinit.js"
import WordChosen from "./wordchosen.js"
import words from "../words.js"
import { useState } from "react"



import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"


export default function Game(props){
    const {value, startGameClick, word, letter} = props

    function stageForc(){
        switch (value){
            case(0):
                return forca0
            case(1):
                return forca1
            case(2):
                return forca2
            case(3):
                return forca3
            case(4):
                return forca4
            case(5):
                return forca5
            case(6):
                return forca6
        }
   }

    return(
        <header>
            <ForcView stage={stageForc()}/>
            <div>   
                <GameInit startGameClick={startGameClick}/>
                <WordChosen word={word} letter={letter}/>
            </div>
        </header>
    )
}
