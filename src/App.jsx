import React, { useState, useEffect } from "react";
 import TaskList from "./Component/TaskList";
 import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Weather_api_data from "./Component/Weather/Weather_api_data";

function App() {
  const [tasks, setTasks] = useState(() => {
    let data = localStorage.getItem("taskList");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  });

  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = () => {
    if (inputVal.trim() === "") return;

    let newTask = {
      id: Math.floor(Math.random() * 100000),
      title: inputVal,
      completed: false,
    };

    setTasks([newTask, ...tasks]);
    setInputVal(""); // reset
  };

  const handleDelete = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
  };

  const handleToggle = (id) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, completed: !t.completed };
      }
      return t;
    });
    setTasks(updated);
  };

  const handleEdit = (id, title) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, title: title } : task
    );
    setTasks(updated);
  };

  return (
    <div className="app">
      <h2>Task App</h2>
      <div className="input-section">
        <input
          type="text"
          placeholder="type something..."
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <TaskList
        tasks={tasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
        onEdit={handleEdit}
      />

    <BrowserRouter>
      <Routes>
        <Route path="/weather" element={<Weather_api_data />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
