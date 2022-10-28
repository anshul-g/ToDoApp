import {useState} from 'react';

const TaskList = (props) => {
    const [tasks, setTasks] = useState("");

    const updateList = () => {
        setTasks(
            ...tasks,
            {
                title : props.title,
                completed : false
            }
        )
    }


    return(
        <div>
            {tasks.title}
        </div>
    )
}

export default TaskList;