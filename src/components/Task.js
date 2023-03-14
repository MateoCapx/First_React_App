// State get passed down - Actions get passed Up
import { FaTimes } from 'react-icons/fa'


// Outputs task into the webpage
// Formatting the task in an H3 heading - Adding X to delete task
export const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ' '}`} onDoubleClick={()=>{
            onToggle(task.id)
        }}>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }}
                onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}




