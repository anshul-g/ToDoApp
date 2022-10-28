import {useState} from 'react'; 
import '../components/style/AddTask.css';

const AddTask = (props) => {
    const [title, setTitle] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTitle('');
        if(title){
            props.onUpdate(title);
        }
    }
    
    return(
        <div className="form-container">
            <form className="task-form" onSubmit={handleSubmit}>
                <input onChange={titleChangeHandler} value={title} htmlFor="taskTitle"></input>
                <label type="text" id="taskTitle"></label>
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default AddTask;
