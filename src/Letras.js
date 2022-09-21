
export default function LettersGuess(){
    const alfabeto = [
        "a", "b", "c", "d", "e", 
        "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ]
    
    return(
        <div className="letters-guess">
            {alfabeto.map((l) => <Letter value={l}/>)}
        </div>

    )   
}

function Letter(props){
    return(
        <div className="letter">
            <h1>{props.value}</h1>
        </div>
    )
}