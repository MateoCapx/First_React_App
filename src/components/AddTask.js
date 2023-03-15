import { useState } from 'react'

const Addtask = ({onAdd}) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

// Funtion that runs when form is submitted
    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please Add Task!')
            return
        }
        
    // if the if statement passes then Add new task to array
        onAdd({ text, day, reminder })


        // reset the form feilds back to default state
        setText('')
        setDay('')
        setReminder(false)
    }

    


    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label> Task </label>
                <input
                    type='text'
                    placeholder='Add Task'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>

            <div className='form-control'>
                <label> Date & Time </label>
                <input
                    type='text'
                    placeholder='Add Day & Time'
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>

            <div className='form-control-check'>
                <label> Reminder </label>
                <input
                    type='checkbox'
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save Task' className="btn btn-block" />
        </form>
    )
}

export default Addtask




// "onChange" is a built-in event in React that is used to handle changes to an input field, such as a text input, textarea, or select element.