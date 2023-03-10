import { useState } from "react";
import { Task } from "./Task";

 

// Looping through task from app.js page
const Tasks = ({tasks, onDelete}) => {
    return (
        <>
            {tasks.map((tasks) => (
                <Task key={tasks.id} task={tasks} 
                 onDelete ={onDelete}  
                />   
            ))}
        </>
    )
}


export default Tasks




 