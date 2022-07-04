import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  let sampleTasks = [
    {
      title: "Complete online JavaScript course",
      completed: false,
    },
    {
      title: "Jog around the park 3x",
      completed: true,
    },
    {
      title: "10 minutes meditation",
      completed: false,
    },
    {
      title: "Read for 1 hour",
      completed: true,
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

  const deleteTaskHandler = (task) => {
    let newTasks = tasks.filter((currentTask) => currentTask !== task);

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <AddTaskForm addTask={addTaskHandler} />
      <TaskList tasks={tasks} deleteTask={deleteTaskHandler} />
      <footer className="app-footer">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
