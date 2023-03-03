import React from 'react';

function TaskListItem({ task, onClick }) {
  return (
    <li onClick={() => onClick(task.id)}>
      <h3>{task.name}</h3>
      <p>{task.dueDate}</p>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </li>
  );
}

export default TaskListItem;
