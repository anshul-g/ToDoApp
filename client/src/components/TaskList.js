const TaskList = (props) => {
    console.log(props.tasks)
    return(
        <div>
            {props.tasks.map(task => (
                <div>{task.title}</div>
            ))}
        </div>
    )
}

export default TaskList;