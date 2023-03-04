import React from "react";

function SelectedItem({task}) {
    return (  
        <div >
             <p>{task.due_date}</p>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
        </div>

    );
}

export default SelectedItem ;

