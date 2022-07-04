import "./App.css";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import { useState } from "react";

const App = () => {
  let sampleTasks = [
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Complete online JavaScript course",
      completed: false,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Jog around the park 3x",
      completed: true,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "10 minutes meditation",
      completed: false,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Read for 1 hour",
      completed: true,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Pick up groceries",
      completed: false,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Complete Todo app from Frontend Mentor",
      completed: false,
    },
  ];

  const [tasks, setTasks] = useState(sampleTasks);

  const addTaskHandler = (task) => {
    const taskObject = {
      id: Math.ceil(Math.random() * 1000000000),
      title: task,
      completed: false,
    };
    setTasks([...tasks, taskObject]);
  };

  const taskStatusHandler = (task, status) => {
    let newTasks = tasks.map((t) => {
      if (t.id === task.id) {
        t.completed = status;
      }
      return t;
    });

    setTasks(newTasks);
  };

  const deleteTaskHandler = (task) => {
    let newTasks = tasks.filter((currentTask) => currentTask !== task);
    setTasks(newTasks);
  };

  const clearCompletedTasksHandler = () => {
    let newTasks = tasks.filter((task) => !task.completed);

    setTasks(newTasks);
  };

  return (
    <div className="App">
      <Header />
      <AddTaskForm addTask={addTaskHandler} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTaskHandler}
        updateTaskStatus={taskStatusHandler}
        clearCompletedTasks={clearCompletedTasksHandler}
      />
      <footer className="app-footer">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
