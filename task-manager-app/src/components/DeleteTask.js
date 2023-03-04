// import React, {useState, useEffect} from "react";

// function DeleteItem() {
//     const [task, setTask]=useState()
//     useEffect(()=>{
//     function handleDeleteClick() {
//       fetch(`http://localhost:9292/tasks/${task.id}`, {
//         method: "DELETE",
//       })
//         .then((r) => r.json())
//         .then((deletedTask) => setTask(deletedTask));
//     }
// })
//     return (
//       <div>
//         <p>title: {task.title}</p>
//         <p>{task.description}</p>
//         <button onClick={handleDeleteClick}>Delete Review</button>
//       </div>
//     );
//   }
//   export default DeleteItem