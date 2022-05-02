import {FaTrash} from "react-icons/fa"; /*import icon*/

const Tasks = ({handleCheck, handleTrash, task}) => {
    /*return de notre liste*/
    return  <ol className='allTasks'>
                {/* limite de 14 task en v1 */}
                <div className={task.length <= 14 ?'columnTasks' : 'columnTasks more'}>
                {task.map((t, index) =>{ /*on map su rnos task*/
                // et on return nos element de liste
                return  <li key={index} className= 'taskAdded'> 
                            {/* on check a chaque changement en modifiant la key completed de l'objet a l'index */}
                            <input id="inputCheck"  type="checkbox" onChange={()=>handleCheck(index)}/>
                            {/* completed a true ou a false ? barré ou pas */}
                            <span style={{textDecorationLine: t.completed && 'line-through'}} id={"font-task"}>{t.title}</span>
                        {/* notre icon relié a remove */}
                        <button id="trash" onClick={handleTrash}><FaTrash/></button>
                        </li>
                })}
                </div>
            </ol>
}

export default Tasks;