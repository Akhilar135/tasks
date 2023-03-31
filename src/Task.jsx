import React from 'react'
import {RxCrossCircled} from 'react-icons/rx'

function Task({ts, onClick, onRemind}) {
    return (
    <div style={{width:"30%", background:"violet", alignContent:'center', marginLeft:400}}>
        <div className={`${ts.reminder?'reminder':''}`} style = {{textAlign:'center'}} onDoubleClick={()=>onRemind(ts.id)}>
            <h2 style={{color:'white'}}>{ts.text}</h2>
        </div>
        <div>
            <RxCrossCircled style={{color:'white'}} onClick={()=>onClick(ts.id)}/>
        </div>
        </div>
    )
}
export default Task