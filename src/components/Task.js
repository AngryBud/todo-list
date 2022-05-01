import {FaTrash} from "react-icons/fa";

const Tasks = (props) => {
    const {index, t, task} = props;
    // console.log("check :: 1", check.check);
    var checked = false;

    const isCheck = () => {
        var box = document.getElementById('inputCheck');
        var text = document.getElementsByClassName('font-task');
        // console.log(box);
        // if (box.checked == false)
        // {}
        // inputCheck = true
        // console.log("check :: 1", checked);
        //     // {!checked ? true : false}; 
        //     if (checked === true){
        //         checked = false;
        //     }
        //     else{
        //         checked = true;
        //         document.getElementByClassName('font-task').style.textDecoration="line-through";
        //     }

        // }
            
        console.log("chacked :: 2", box.checked);
        // if (checked === true)
        //     checked = false;
        // checked = true;
    } 
    
    return  <div key={index} className= 'taskAdded'>
                <input id="inputCheck"  type="checkbox" onClick={isCheck}></input>
                <span className="font-task">{t}</span>
                <FaTrash/>
            </div>;
}

export default Tasks;