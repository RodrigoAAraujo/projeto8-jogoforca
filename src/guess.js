import styled from "styled-components"

export default function Guess(props) {
    const { putOn, wordValue, clicking,writingValue} = props

    console.log(writingValue)
    return (
        <GuessBlock>
            <p>Já sei a palavra!</p>
            <form onSubmit={clicking}>
                <input 
                    onChange={(e) => wordValue(e.target.value.toLowerCase())} 
                    data-identifier="type-guess" type="text" required 
                    value={writingValue}>
                </input>
                <button data-identifier="guess-button" className={(putOn)?"active":"deactive"}>Chutar</button>
            </form>
        </GuessBlock>
    )

}

const GuessBlock = styled.div`
    
    display: flex;
    max-width: 600px;
    width: 90%;
    margin: 30px auto;
    align-items: center;
    justify-content: space-between;
    
    form {
        width: 70%;
        display: flex;
        justify-content: space-between;
    }
    input{
        padding: 5px;
        border-radius: 5px;
        background-color: #f3f3f3;
        width:70%;
        border: 2px solid #e4e4e4;
        outline: none;
        color: #6d6d6d;
        font-size: 16px;
        font-weight: 500;
    }
    input :hover{
        background-color: #ffffff;
        border: 2px solid #ee0000;
    }
    button{
        padding: 10px 15px;
        font-size: 15px;
        font-weight: 500;
        border-radius: 5px;
        background-color: #ade0f5;
        color: #128cbd;
    }
    .active{
        background-color: #ade0f5;
        color: #309ac4;
    }
    .deactive{
        background-color: #b3b3b3;
        color:#6d6d6d;
    }
`