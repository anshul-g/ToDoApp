import {useState} from 'react';
import TaskList from '../components/TaskList.js'; 

const AddTask = () => {
    const [title, setTitle] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
        console.log(title);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title){
            TaskList.updateList();
        }
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={titleChangeHandler} htmlFor="taskTitle"></input>
                <label type="text" id="taskTitle" placeholder="Add new task">Task</label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddTask;
