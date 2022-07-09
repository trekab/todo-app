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
      completed: true,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Jog around the park 3x",
      completed: false,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "10 minutes meditation",
      completed: false,
    },
    {
      id: Math.ceil(Math.random() * 1000000000),
      title: "Read for 1 hour",
      completed: false,
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

  const [allTasks, setAllTasks] = useState(sampleTasks);
  const [tasks, setTasks] = useState(allTasks);

  const addTaskHandler = (task) => {
    const taskObject = {
      id: Math.ceil(Math.random() * 1000000000),
      title: task,
      completed: false,
    };
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, taskObject];
      return updatedTasks;
    });
    setAllTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, taskObject];
      return updatedTasks;
    });
  };

  const taskStatusHandler = (task, status) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = [...prevTasks].map((t) => {
        if (t.id === task.id) {
          t.completed = status;
        }
        return t;
      });
      return updatedTasks;
    });
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks].map((t) => {
        if (t.id === task.id) {
          t.completed = status;
        }
        return t;
      });
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (task) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter(
        (currentTask) => currentTask !== task
      );

      return updatedTasks;
    });
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter(
        (currentTask) => currentTask !== task
      );

      return updatedTasks;
    });
  };

  const clearCompletedTasksHandler = () => {
    setAllTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => !task.completed);
      return updatedTasks;
    });
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => !task.completed);
      return updatedTasks;
    });
  };

  const showActiveTasks = () => {
    setTasks(() => {
      const updatedTasks = allTasks.filter((task) => !task.completed);
      return updatedTasks;
    });
  };

  const showAllTasks = () => {
    setTasks(allTasks);
  };

  const showCompletedTasks = () => {
    setTasks(() => {
      const updatedTasks = allTasks.filter((task) => task.completed);
      return updatedTasks;
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <AddTaskForm addTask={addTaskHandler} />
        <TaskList
          tasksTotal={allTasks}
          tasks={tasks}
          deleteTask={deleteTaskHandler}
          updateTaskStatus={taskStatusHandler}
          clearCompletedTasks={clearCompletedTasksHandler}
          activeTasks={showActiveTasks}
          allTasks={showAllTasks}
          completedTasks={showCompletedTasks}
        />
      </main>
      <footer className="app-footer">Drag and drop to reorder list</footer>
    </div>
  );
};

export default App;
