import ForcView from "./forcview.js"
import GameInit from "./gameinit.js"
import WordChosen from "./wordchosen.js"

export default function Game(){
    return(
        <header>
            <ForcView/>
            <GameInit/>
            <WordChosen/>
        </header>
    )
}