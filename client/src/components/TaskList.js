import '../components/style/TaskList.css'

const TaskList = (props) => {
    const onChangeHandler = (e) => {
        props.onCheckChangeHandler(e.target.id);
    }

    return(
        <div className="tasklist">
            {props.tasks.map(task => (
                <div className="task">
                    <span className={task.completed ? "isCompleted" : ""}>{task.title}</span>
                    <input id={task.id} onChange={onChangeHandler} type="checkbox" checked={task.completed?true:false}></input>
                </div>
            ))}
        </div>
    )
}

export default TaskList;