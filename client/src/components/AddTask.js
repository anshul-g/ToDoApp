import {useState} from 'react'; 

const AddTask = (props) => {
    const [title, setTitle] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title)
        if(title){
            props.onUpdate(title);
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
