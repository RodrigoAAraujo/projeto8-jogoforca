
export default function WordChosen(props){

    function testExistence(l){
        if(l === ""){
            return(<h1>_</h1>)
        }else{
            return(<h1>{l}</h1>)
        }
    }

    if(Array.isArray(props.word)){
        return(
            <div className="word-chosen" data-identifier="word">
                {props.word.map((l) => testExistence(l))}
            </div>
        )
    }else if(typeof props.word === "string" ){
        return(
            <div className="word-chosen finished" data-identifier="word">
                <h1>{props.word}</h1>
            </div>
        )
    }else{
        return null
    }
}