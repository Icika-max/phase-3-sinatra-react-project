import React from "react";


function TaskDetail({ task }) {
    return (
      <div>
        <h1>{task.name}</h1>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Status: {task.completed ? 'Completed' : 'Incomplete'}</p>
      </div>
    );
  }
  export default TaskDetail;

  