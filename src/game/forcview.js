import { useState } from "react"


export default function ForcView(props){
    let stage = props.stage
    return(
        <div className="forc-image">
            <img data-identifier="game-image" src={stage}/>
        </div>
    )
}