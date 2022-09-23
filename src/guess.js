export default function Guess(props){
    const {putOn}= props

    if(putOn){
        return(
            <div className="word-guess">
                <p>Já sei a palavra!</p>
                <input type="text"></input>
                <button data-identifier="guess-button">Chutar</button>
            </div>
        )
    }else{
        return null
    }    
}