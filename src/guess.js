export default function Guess(){
    return(
        <div className="word-guess">
            <p>Já sei a palavra!</p>
            <input type="text"></input>
            <button data-identifier="guess-button">Chutar</button>
        </div>
    )
}