import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  let sampleTasks = [
    {
      title: "Complete online JavaScript course",
      completed: true,
    },
    {
      title: "Jog around the park 3x",
      completed: false,
    },
    {
      title: "10 minutes meditation",
      completed: false,
    },
    {
      title: "Read for 1 hour",
      completed: false,
    },
    {
      title: "Pick up groceries",
      completed: false,
    },
    {
      title: "Complete Todo app from Frontend Mentor",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(sampleTasks);

  const addTaskHandler = (task) => {
    const taskObject = {
      title: task,
      completed: false,
    };
    setTasks([...tasks, taskObject]);
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
