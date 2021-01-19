import React, {useState} from 'react';


//let's make a todo list!
export default function Todo(){
    const [inputValue, setInputValue] = useState("")

    const changeInput = event => {
        const {value} = event.target;
        setInputValue(value);
    }

    return (
        <div className="widget-todo container">
            <h2>Todos</h2>
            <div>To Do List</div>
            <div>
                <input id="input" type="text" onChange={changeInput} value={inputValue}></input>
                <button onClick={event => {
                    if(inputValue !== ""){
                        const newLine = document.createElement("div");
                        const newTodo = document.createElement("p");
                        const toDone = document.createElement("button");
    
                        newLine.appendChild(newTodo);
                        newLine.appendChild(toDone);
    
                        newLine.style.display = "flex";
                        newLine.style.alignItems = "center";
    
                        newTodo.textContent = inputValue;
                        toDone.textContent = "x";
                        toDone.addEventListener("click", event => event.target.parentNode.remove());
    
                        document.querySelector(".widget-todo").appendChild(newLine);
                    }
                    setInputValue("");
                }}>Add</button>
            </div>
        </div>
    );
}