
export default function WordChosen(props){

    const{word, finished}= props

    function testExistence(l){
        if(l === ""){
            return(<h1>_</h1>)
        }else{
            return(<h1>{l}</h1>)
        }
    }
    console.log(word)

    if(Array.isArray(word)){
        return(
            <div className="word-chosen" data-identifier="word">
                {word.map((l) => testExistence(l))}
            </div>
        )
    }else if(typeof word === "string"){
        console.log(finished)
        return(
            <div className={(finished === 1)?"word-chosen finished win":"word-chosen finished lose"} data-identifier="word">
                <h1>{word}</h1>
            </div>
        )
    }else{
        return null
    }
}