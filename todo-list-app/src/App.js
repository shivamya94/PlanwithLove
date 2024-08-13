import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import tasksData from './data/tasks.json';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: tasks.length + 1 }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const searchTasks = (query) => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      task.description.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <div className=" p-3 mb-2 bg-secondary text-white">
      <h1 className="mt-5">To-Do List</h1>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search tasks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
