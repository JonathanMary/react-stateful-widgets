import React, {useState} from 'react';

const board = ["1a", "1b", "1c", "2a", "2b", "2c", "3a", "3b", "3c"];

export default function TicTacToe(){
    const [listOfSquares] = useState(board)
    const played = []

    let count = 0;
    const activeSquare = id => {
        //const caseId = (id.target.id)
        if(played.includes(id)){
            console.log("Already Played")
        }else{
            const getCase = document.getElementById(id)
            count%2?getCase.style.backgroundColor = "crimson":getCase.style.backgroundColor = "green"
            played.push(id)
            count += 1
            console.log(played)
        }
    }

    const squareStyle = {
        border: "2px solid grey",
        width: "70px",
        height: "70px",
        borderRadius: "15%",
    };
    const boardStyle = {
        border: "1px solid black",
        width: "213px",
        height: "213px",
        display: "flex",
        flexWrap: "wrap",
    };

    return (
        <div className="widget-TicTacToe container">
            <h2>TicTacToe</h2>
            <div>Let's Play!\n</div>
            <div style={boardStyle}>
                {
                listOfSquares.map(id=>
                    <div key={id} id={id} style={squareStyle} onClick={()=>activeSquare(id)}></div>
                    )
                }
            </div>
        </div>
    )
}