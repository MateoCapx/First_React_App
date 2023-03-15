import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";
import Addtask from "./components/AddTask";


const App = () => {
  // Array of Task we are using to render on page
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: ' Docotrs Apponiment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: ' Dogs Apponiment',
      day: 'Feb 7th at 5:30pm',
      reminder: false,
    },
    {
      id: 3,
      text: ' Cats Apponiment',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },

  ])

  //Add Task function
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }

    //Copy the current task that are already there then adding new task
    // to the exsisting array.
    setTasks([...tasks, newTask])
  }



  // Toggle Reminder function
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  // Function to Delete A Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {/* if showAddTask is TRUE then display add task form - && means short  verizon or terniery*/}

      {showAddTask && <Addtask onAdd={addTask} />}
      {tasks.length > 0 ? <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : ('No Tasks to Show')
      }

    </div>
  );
}

export default App;


// ternary operator
// condition ? valueIfTrue : valueIfFalse
