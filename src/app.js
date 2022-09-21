import palavras from "./palavras"
import Visualization from "./Jogo"
import Interface from "./interface"

export default function App(){
    return(
        <div className="app">
            <Visualization/>
            <Interface/>
        </div>
    )
}