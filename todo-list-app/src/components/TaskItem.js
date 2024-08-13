import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, title, description, lastUpdated: new Date().toISOString() });
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleUpdate} className="btn btn-success">Save</button>
          </>
        ) : (
          <>
            <h5 className="card-title">{task.title}</h5>
            <p className="card-text">{task.description}</p>
            <p className="card-text"><small>Last updated: {new Date(task.lastUpdated).toLocaleString()}</small></p>
            <button onClick={() => setIsEditing(true)} className="btn btn-secondary">Edit</button>
            <button onClick={() => updateTask({ ...task, completed: !task.completed })} className="btn btn-success">
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)} className="btn btn-danger">Delete</button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
