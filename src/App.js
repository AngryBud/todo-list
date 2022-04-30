import './App.css';
import Header from "./components/Header";
import {FaTrash} from "react-icons/fa";
import {useState} from "react";

function App() {
  const [task, setTask] = useState([]);
  const [value, setValue] = useState();
  const handleChange = (e) =>{
    setValue(e.target.value);
  }
  const handleClick = (e) =>{
    e.preventDefault();
    setTask([...task, value]);
    console.log(task);
    var form = document.getElementById("myForm");
    form.reset();
  }
  return (
    <div className="App">
      <Header/>
      <div className='addBar'>
        <form id="myForm">
          <input id="inputTask" placeholder= "New Task" onChange={handleChange}></input>
          <button type="submit" onClick={handleClick}>Add Task</button>
        </form>
        <div className={task.length > 0? 'taskAdded' : 'taskAdded hide'}>
          <input id="inputCheck"  type="checkbox"></input>
          <span>{value}</span>
          <FaTrash/>
        </div>
      </div>
    </div>
  );
}

export default App;
