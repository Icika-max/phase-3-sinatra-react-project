import React from 'react';
import TaskListItem from './TaskListItem';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <TaskListItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;