import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  let sampleTasks = [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo app from Frontend Mentor",
  ];

  const [tasks, setTasks] = useState(sampleTasks);

  const addTaskHandler = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <Header />
      <AddTaskForm addTask={addTaskHandler} />
      <TaskList tasks={tasks} />
      <footer className="app-footer">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
