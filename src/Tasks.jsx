import {React} from 'react'
import Task from './Task'

function Tasks({tasks, onClick, onRemind}){
    return (
        <div>
            {tasks.map((task)=>(
                <Task key={task.id} ts={task} onClick={onClick} onRemind = {onRemind}/>
            ))
            }
        </div>
    )
}
export default Tasks