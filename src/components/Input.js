
// import {useState} from "react";

const Input = ({handleChange, handleClick}) => {
    // retour de notre form
    return  <form id="myForm">   
                {/* input avce recup de la value avec onChange */}
                <input id="inputTask" placeholder= "New Task" onChange={handleChange}></input>
                {/* notre submit qui va envoyer la task */}
                <button type="submit" onClick={handleClick}>Add Task</button>
            </form>
}

export default Input;