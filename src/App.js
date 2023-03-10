import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";


const App = () => {
  // Array of Task we are using to render on page
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

  // Function to Delete A Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }
  return (
    <div className="container">
      <Header />
      <Task tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
