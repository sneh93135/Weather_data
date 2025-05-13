import React, { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleSave = () => {
    if (newTitle.trim() === "") return;
    onEdit(task.id, newTitle);
    setEditMode(false);
  };

  return (
    <div className={`task-item ${task.completed ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      {editMode ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <button onClick={() => (editMode ? handleSave() : setEditMode(true))}>
        {editMode ? "Save" : "Edit"}
      </button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
