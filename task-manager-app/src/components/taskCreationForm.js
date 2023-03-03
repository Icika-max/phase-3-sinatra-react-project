import React from 'react';
import { useState } from 'react';

function TaskCreationForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({ name, description, dueDate });
    setName('');
    setDescription('');
    setDueDate('');
  }

  return (
    <form className="form-container" onSubmit={handleSubmit} action="http://localhost:9292/new_task" method='post'>
      <label className='task'> 
        Task Name:
        <input
          type="text"
          value={name}
          name= "title"
          
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label className='task'>
        Task Description:
        <textarea
          value={description}
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label
      className='task'>
        Due Date:
        <input
          type="date"
          value={dueDate}
          name="due_date"
          onChange={(event) => setDueDate(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
}
export default TaskCreationForm;