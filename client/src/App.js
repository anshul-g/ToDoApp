import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <AddTask updateList={} />
      <TaskList />
    </div>
  );
}

export default App;
