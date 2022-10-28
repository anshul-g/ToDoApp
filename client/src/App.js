import {useState} from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState([]);

  const updateList = (userInput) => {
    setTasks(
        [
          {
            title : userInput,
            completed : false
          }, 
          ...tasks
        ]
    )
  }

  return (
    <div className="App">
      <AddTask onUpdate={updateList}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
