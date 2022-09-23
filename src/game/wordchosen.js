
export default function WordChosen(props){
    const {word} = props    
    if(word != null){
        console.log(word.split(""))
    }
    return(
        <div className="word-chosen">
            <h1 data-identifier="word">
                {word}
            </h1>
        </div>
    )
}