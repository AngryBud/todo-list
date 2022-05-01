
// import {useState} from "react";

// const Input = (props) => {
//     const {task,setTask, value, setValue} = props;
//     let inputCheck = false;

//     const handleChange = (e) =>{
//       inputCheck = true;
//       setValue(e.target.value);
//     }
  
  
//     const handleClick = (e) =>{
//       e.preventDefault();
//       if (task.length === 14){
//           alert("Limite des 14 task atteinte.... on attends la v2");
//         }
//       if (value != undefined){
//           const newTab = 
//         // setTask([...task, value]);
//         var form = document.getElementById("myForm");
//         form.reset();
//         setValue();
//         }
//       }

//     return  <form id="myForm">
//                 <input id="inputTask" placeholder= "New Task" onChange={handleChange} minLength={3}></input>
//             <button type="submit" onClick={handleClick}>Add Task</button>
//             </form>;
// }

// export default Input;