import './App.css';
import Header from "./components/Header";
import {useState} from "react";
// import Task from "./components/Task";
import {FaTrash} from "react-icons/fa";

function App() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState();
  // var check = document.getElementById("inputCheck");
  // var message = document.getElementById("task");
  let inputCheck = false;
  // let checked = false;

  const handleChange = (e) =>{
    inputCheck = true;
    setValue(e.target.value);
  }


  const handleClick = (e) =>{
    e.preventDefault();
    if (task.length === 14){
        alert("Limite des 14 task atteinte.... on attends la v2");
      }
    if (value !== undefined){
      let obj = {value, completed:false};

      const newTab = [...task];
      newTab.push(obj);
      setTask(newTab);

      var form = document.getElementById("myForm");
      form.reset();
      setValue();
      }

    }
    
  return (
    <div className="App">
        <Header/>
        <div className='allContent'>
          <form id="myForm">                                
            <input id="inputTask" placeholder= "New Task" onChange={handleChange} maxLength={40}></input>
            <button type="submit" onClick={handleClick}>Add Task</button>
          </form>
          <ol className='allTasks'>
            <div className={task.length <= 14 ?'columnTasks' : 'columnTasks more'}>
              {task.map((t, index) =>{
                return <li key={index} className= 'taskAdded'>
                          <input id="inputCheck"  type="checkbox" onClick={()=>{
                            if (t.completed === false){
                                const newTask = [...task];
                                newTask[index].completed = true;
                                setTask(newTask);
                                console.log("lalalal",t);
                            }
                            else{
                                const newTask = [...task];
                                newTask[index].completed = false;
                                setTask(newTask);
                                console.log("lololool",t);
                            }
                              // console.log("value ::: ", t.value);
                          }} /> <span style={{textDecorationLine: t.completed && 'line-through'}} id={"font-task"}>{t.value}</span>
                          <button id="trash" onClick={() => {
                              const newTask = [...task];
                              newTask.splice(index, 1);
                              setTask(newTask);
                          }}><FaTrash/></button>
                        </li>
                })}
            </div>
          </ol>
        </div>
    </div>
    // </div>
  );
}

export default App;
