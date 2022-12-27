import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './components/style/App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeTask, setActiveTask] = useState({ title: '', completed: '' });

  const getData = () => {
    fetch('http://127.0.0.1:8000/task-list/')
      .then((resp) => resp.json())
      .then((data) => setTasks(data));
  };

  const addTask = () => {
    const taskRequest = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: activeTask.title,
        completed: activeTask.completed,
      }),
    };

    fetch('http://localhost:8000/task-create/', taskRequest)
      .then(() => setActiveTask({ title: '', completed: '' })
    );
  };

  const updateList = (userInput) => {
    setTasks([
      ...tasks,
      {
        title: userInput,
        completed: false,
      },
    ]);

    setActiveTask({
      title: userInput,
      completed: false,
    });
  };

  useEffect(() => {
    addTask();
  }, [tasks]);

  const toggleHandler = (id) => {
    let changedList = tasks.map((task) => {
      return task.id === id
        ? { ...task, completed: !task.completed }
        : { ...task };
    });

      setTasks(changedList);

    fetch(`http://localhost:8000/task-detail/${id}/`)
      .then((resp) => resp.json())
      .then((data) => {
        fetch(`http://localhost:8000/task-update/${id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: data.title,
            completed: !data.completed,
          }),
        })});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <AddTask onUpdate={updateList} />
      <TaskList
        tasks={tasks}
        onCheckChangeHandler={toggleHandler}
        fetchList={getData}
      />
    </div>
  );
}

export default App;
