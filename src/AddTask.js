import React from 'react'

import {useState} from 'react';

function AddTask({onAdd}) {

    const [text, setText] = useState('');
    const [activity, setActivity] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert("Add Your Task")
            return
        }
        onAdd({ text, activity, reminder})
        setText('')
        setActivity('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='control'>
            <label>Enter the Task</label>
            <input type='text' placeholder='Add Your Task'
            value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <br></br>
            <div className='control'>
                <label>Activity</label>
                <input type='text' placeholder='Add Activity'
                value={activity} onChange={(e) => setActivity(e.target.value)}
                />
            </div>
            <br></br>
            <div className='control'>
                <label>Remember me</label>
                <input type='checkbox'
                checked={reminder}
                  value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>

            <input type='submit' value='Save' className='btn btn-block'/>
    </form>
  )
}

export default AddTask