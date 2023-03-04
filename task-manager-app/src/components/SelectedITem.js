import React from "react";

function SelectedItem({task}) {
    return (  
        <div>
             <p>{task.dueDate}</p>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
        </div>

    );
}

export default SelectedItem ;

