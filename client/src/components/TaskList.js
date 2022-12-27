import {useRef} from 'react';
import '../components/style/TaskList.css'

const TaskList = (props) => {
    const ref = useRef(null);

    function onChangeHandler(e) {
        props.onCheckChangeHandler(e);
    }

    function onDeleteHandler(taskID) {
        console.log(taskID);
        fetch(`http://localhost:8000/task-delete/${taskID}`, {method: 'DELETE'})
            .then(() => props.fetchList());
    }

    return(
        <div className="tasklist-container">
            <ul className="tasklist">
                {props.tasks.map(task => (
                    <li className="task">
                        <span className={task.completed ? "isCompleted" : ""}>{task.title}</span>
                        <div>
                            <input 
                                id={task.id} 
                                style={{marginRight: '5px'}} 
                                onChange={() => onChangeHandler(task.id)} 
                                type="checkbox" 
                                checked={task.completed ? true : false}
                            />
                            <button onClick={() => onDeleteHandler(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;