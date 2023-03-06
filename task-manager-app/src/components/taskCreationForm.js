import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

function TaskCreationForm({ onSubmit }) {
  // const [name, setName] = useState('');
  // const [description, setDescription] = useState('');
  // const [dueDate, setDueDate] = useState('');

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   console.log({ name, description, dueDate });
  //   setName('');
  //   setDescription('');
  //   setDueDate('');
  // }

  return (
    
    <form className="form-container" action="https://icika.onrender.com/new_task" method='post'>
      <label className='task'> 
        Task Name:
        <input type="name" placeholder='title' name='title'/>
        {/* <input
          type="text"
          value={name}
          name= "title"
          
          onChange={(event) => setName(event.target.value)}
        /> */}
      </label>
      <br />
      <label className='task'>
        Task Description:
        <input type="name" placeholder='description' name='description'/>
        {/* <textarea
          value={description}
          name="description"
          onChange={(event) => setDescription(event.target.value)}
        /> */}
      </label>
      <br />
      <label
      className='task'>
        Due Date:
        <input type="date" placeholder='Due_date' name='due_date'/>
        {/* <input
          type="date"
          value={dueDate}
          name="due_date"
          onChange={(event) => setDueDate(event.target.value)}
        /> */}
      </label>
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
}
export default TaskCreationForm;