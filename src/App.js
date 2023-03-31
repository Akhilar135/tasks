//import logo from './logo.svg';
import React from 'react'
import {useState} from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import Tasks from './Tasks';
import AddTask from './AddTask';

function App() {

  
  const [tasks, setTasks] = useState([

  {
    id:1,
    text: 'Task No 1',
    activity:'Small',
    reminder:true,
   
},
{
    id:2,
    text: 'Task No 2',
    activity:'Medium',
    reminder:false,
},
{
    id:3,
    text: 'Task No 3',
    activity:'Large',
    reminder:true,
    
}
  ])
  const [showForm, setShowForm] = useState(false)
  
  const rClick = ()=>{
    setShowForm(!showForm)
  }

const gClick = ()=>{
    console.log("Clicked the Green Button")
  }
  const bClick = ()=>{
    console.log("Clicked the Blue Button")
  }
  const onDelete = (id)=>{
    setTasks(tasks.filter((task)=>
    task.id !==id
    ))
  }
  /*const deleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'DELETE'
    })*/
  
  const onRemind =(id) =>{
    setTasks(
      tasks.map((task) =>task.id===id?{...task, reminder:!task.reminder}: task))
    
  }
  const onAdd = (task)=>{
    const id= Math.floor(Math.random()*10000+1)
    console.log(id)
    const newTask = {...task, id}
    setTasks([...tasks, newTask])
 
  }
  

  return (
    <div className="App">
      <h1>Task App</h1>
      <Header headings="HELLO"></Header>
      <h2>Welcome</h2>
      
      <Tasks tasks={tasks} onClick={onDelete} onRemind={onRemind}/>

      <Button color= {showForm ? "red":"green"} text={showForm ? "EXIT":"ADD"} onClick={rClick}/>
      {showForm && <AddTask onAdd={onAdd}/>}
      <br></br>
      <br></br>

      <Button color='green' text= "Green Button" onClick={gClick}/>
      <Button color='blue' text="Blue Button" onClick={bClick}/>
      
      <Footer ftr='Akhila || 2023'></Footer>
      </div>
  );

  
}
export default App;
