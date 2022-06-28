import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  let sampleTasks = [
    "Complete online JavaScript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo app from Frontend Mentor",
  ];

  const [tasks, setTasks] = useState(sampleTasks);

  return (
    <div className="App">
      <Header />
      <AddTaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
