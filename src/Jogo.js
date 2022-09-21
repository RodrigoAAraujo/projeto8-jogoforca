import ForcView from "./visualization/forcview.js"
import GameInit from "./visualization/gameinit.js"
import WordChosen from "./visualization/wordchosen.js"

export default function Visualization(){
    return(
        <header>
            <ForcView/>
            <GameInit/>
            <WordChosen/>
        </header>
    )
}