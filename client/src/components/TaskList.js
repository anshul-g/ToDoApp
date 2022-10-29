import '../components/style/TaskList.css'

const TaskList = (props) => {
    function debug() {console.log(props.tasks);};
    // debug();

    function onChangeHandler(e) {
        props.onCheckChangeHandler(e.target.id);
    }

    return(
        <div className="tasklist-container">
            <ul className="tasklist">
                {props.tasks.map(task => (
                    <li className="task">
                        <span className={task.completed ? "isCompleted" : ""}>{task.title}</span>
                        <input id={task.id} onChange={onChangeHandler} type="checkbox" checked={task.completed?true:false}></input>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;