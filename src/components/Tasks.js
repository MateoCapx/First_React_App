import { useState } from "react";
import { Task } from "./Task";

 

// Looping through task from app.js page
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
            {tasks.map((tasks) => (
                <Task 
                key={tasks.id} 
                task={tasks} 
                onDelete ={onDelete}  
                onToggle={onToggle}
                />   
            ))}
        </>
    )
}


export default Tasks




 