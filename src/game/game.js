import ForcView from "./forcview.js"
import GameInit from "./gameinit.js"
import WordChosen from "./wordchosen.js"

import styled from "styled-components"

import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"


export default function Game(props){
    const {value, startGameClick, word, finished} = props

    function stageForc(){
        switch (value){
            case(0):
                return forca0
            case(1):
                return forca1
            case(2):
                return forca2
            case(3):
                return forca3
            case(4):
                return forca4
            case(5):
                return forca5
            case(6):
                return forca6
        }
   }

    return(
        <GameBox>
            <ForcView stage={stageForc()}/>
            <div>   
                <GameInit startGameClick={startGameClick}/>
                <WordChosen word={word} finished={finished}/>
            </div>
        </GameBox>
    )
}

const GameBox = styled.header`
   
    width: 95%;
    max-width: 900px;
    margin: 40px auto;
    display: flex;
    justify-content: space-between;
    

    .forc-image{
        width: 50%;
    }
    > div{
        width: 40%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-between;
    }
    button{
        width: fit-content;
        background-color: #0fb400;
        color: #ffffff;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 16px;
        font-weight: 500;
    }

    .word-chosen{
        display: flex;
        margin-bottom: 20px;
        flex-wrap: wrap;
        justify-content: center;
    }
    .word-chosen h1{
        margin: 0px 3px;
        font-size: 40px;
        font-weight: 700;
    }
    .win h1{
        color: #10a502;
    }
    .lose h1{
        color: #ce0303;
    }
`;