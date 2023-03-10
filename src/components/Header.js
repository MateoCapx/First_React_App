import React from "react"
import PropTypes from 'prop-types'
import Button from "./Button"
// import { Task } from "./Task"


const Header = () => {
    const onClick =() =>{
        console.log("Clicked")
    }
  return (
    <header className="header">
        <h1> Task Tracker </h1>
        <Button color='green' text='ADD' onClick={onClick} />
        
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
  