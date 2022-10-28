import {useState} from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

import './components/style/App.css'

const data = [{
  "id": 1,
  "title": "Give dog a bath",
  "completed": true
}, {
  "id": 2,
  "title": "Do laundry",
  "completed": true
}, {
  "id": 3,
  "title": "Vacuum floor",
  "completed": false
}, {
  "id": 4,
  "title": "Feed cat",
  "completed": true
}, {
  "id": 5,
  "title": "Change light bulbs",
  "completed": false
}]


function App() {
  const [tasks, setTasks] = useState(data);

  const updateList = (userInput) => {
    setTasks(
        [ ...tasks,
          {
            id: tasks.length + 1,
            title : userInput,
            completed : false
          }, 
        ]
    )
  }

  const toggleHandler = (id) => {
    let changedList = tasks.map(task => {
      return task.id == id ? {...task, completed: !task.completed} : {...task} 
    })

    setTasks(changedList);
    console.log(changedList);
  }

  return (
    <div className="App">
        <AddTask onUpdate={updateList}/>
        <TaskList tasks={tasks} onCheckChangeHandler={toggleHandler}/>
    </div>
  );
}

export default App;
