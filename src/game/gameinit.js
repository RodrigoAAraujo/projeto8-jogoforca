import { useState } from "react"
import escape from "./game"

export default function GameInit(props){
    const {startGameClick}= props

    return(
        <button data-identifier="choose-word" onClick={startGameClick}>
            Escolher Palavra
        </button>
    )
}