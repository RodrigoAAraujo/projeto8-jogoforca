
export default function WordChosen(props){
    return(
        <div className="word-chosen">
            <h1 data-identifier="word">
                {props.word}
            </h1>
        </div>
    )
}