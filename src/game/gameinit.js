export default function GameInit(props){
    const {startGameClick}= props

    return(
        <button data-identifier="choose-word" onClick={startGameClick}>
            Escolher Palavra
        </button>
    )
}