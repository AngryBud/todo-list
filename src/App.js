import './App.css';                                     /*Les differentas imports */
import Header from "./components/Header";
import {useState} from "react";
import Task from "./components/Task";
import Input from "./components/Input";

// import axios from "axios";

function App() {
  const [task, setTask] = useState([]);     /*creation state d'un tableau vide */
  const [value, setValue] = useState();     /*creation state d'une valeur, ici sera une string */

  const handleChange = (e) =>{
      setValue(e.target.value);             /*recuperation de l'input user*/
  }

  const handleClick = (e) =>{
    e.preventDefault();                     /*previens le rafraichissement au submit */
    if (task.length === 14){                /*limite fixe du nombre de task */
        alert("Limite des 14 task atteinte.... on attends la v2");
      }
    if (value !== undefined){               /*si le user ne rentre pas rien */
      let obj = {title: value.length > 20 ? value.substring(0, 30) + "..." : value, completed:false};/*on cree un objet avec comme title la value entre si >30 on ajoute des ... et "completed"comme unchecked yet */
      const newTab = [...task];             /*on fait une copie du tableau */
      newTab.push(obj);                     /* on push l'obj dans notre copie*/
      setTask(newTab);                      /* on met a jour notre tableau state*/
      var form = document.getElementById("myForm"); /*on regarde notre element my form */
      form.reset();                         /*on reset notre input */
      setValue();                           /*on remet value a zero*/
      }
    }

    const handleCheck = (index) => {
      let newTab = [...task];               /*on fait une copie du tableau */
      newTab[index].completed = !newTab[index].completed; /*si c'est pas check , on le check et inversment*/
      setTask(newTab);                      /*on met a jour le state*/
    };    

    const handleTrash = (index) => {
      let newTab = [...task];               /*on fait une copie du tableau */
      newTab.splice(newTab.indexOf(newTab[index]), 1); /*on remove la task a l'index */
      setTask(newTab);                      /*on met a jour le state*/
    }
  return (
    <div className="App">
        <Header/>
        <div className='allContent'>
          {/* on appel nos components avec en props les fonction dedie */}
          <Task handleCheck={handleCheck}
                handleTrash={handleTrash}
                task={task}/>
          <Input handleChange={handleChange}
                  handleClick={handleClick}/>
        </div>
    </div>
  );
}

export default App;
