import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  let sampleTasks = [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo app from Frontend Mentor",
  ];

  return (
    <div className="App">
      <Header />
      <AddTaskForm />
      <TaskList tasks={sampleTasks} />
      <footer className="app-footer">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
