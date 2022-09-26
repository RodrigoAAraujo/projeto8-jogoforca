import styled from "styled-components"

export default function Letters(props){
    const {checkLetter, putOn, letterOn} = props

    const alphabet = [
        "a", "b", "c", "d", "e", 
        "f", "g", "h", "i", "j", 
        "k", "l", "m", "n", "o", 
        "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"
    ]
    
    return(
        <LetterBox>
            {alphabet.map((l) => 
            <Letter 
                value={l} 
                checkLetter ={checkLetter}
                putOn={putOn}
                letterOn ={letterOn}
            />)}
        </LetterBox>
    )   
}

function Letter(props){
    const {value ,checkLetter, putOn,letterOn} = props
    
    return(
        <button className={(!letterOn.includes(value) && putOn)? "letter active" : "letter deactive"} 
            data-identifier="letter"
            onClick={(!letterOn.includes(value) && putOn) ? checkLetter(value) : null}>
            <h1>{value}</h1>
        </button>
    )
}

const LetterBox = styled.div`

    width: 95%;
    max-width: 800px;
    margin: 0px auto;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(13,max-content);
    align-items: center;
    justify-content: center;
    
    .letter{
        margin: 5px;
        width: 40px;
        height: 40px;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 23px;
        font-weight: 900;
    }
    .active, .word-guess .active{
        background-color: #ade0f5;
        color: #309ac4;
    }
    .deactive, .word-guess .deactive{
        background-color: #b3b3b3;
        color:#6d6d6d;
    }
    @media (max-width:700px){
        display: flex;
        flex-wrap: wrap;
    }

`
