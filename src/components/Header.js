import React from "react"
import Button from "./Button"
// import { Task } from "./Task"


const Header = ({onAdd, showAdd}) => {
   
  return (
    <header className="header">
        <h1> Task Tracker </h1>
        <Button color='green' text='Add' onClick={(onAdd)} />
        
    </header>
  )
}

export default Header



// Ways to wrtie css in React inline
// inline =  <h1 style={{color: 'green'}}> Task Tracker </h1>



// Create varible
// const headingStyle ={
//     color: 'green',
//     backgroundColor:'black'
// }
  