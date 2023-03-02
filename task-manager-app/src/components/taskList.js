import React from "react";
// import { useEffect } from "react";

function TaskList({ tasks, onTaskClick }) {
    
    return (
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onClick={() => onTaskClick(task.id)}>
            <strong>{task.name}</strong>
            <br />
            {task.description}
            <br />
            Due Date: {task.dueDate}
            <br />
            Status: {task.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    );
  }
  export default TaskList