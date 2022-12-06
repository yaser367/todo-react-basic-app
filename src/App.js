import {useEffect, useState} from 'react'
import './App.css'
function App() {
  const [toDos,setTodos] = useState([])
  const [toDo,setTodo] = useState('')
  const remove = (index)=>{
    const newTask = [...toDos]
    newTask.splice(index,1)
    setTodos(newTask)
  }

  return (
    
    <div className="todoapp stack-large">
      <h1>Todo List</h1>
      <div className='form'>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={toDo}
          onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="btn btn__primary btn__lg">
          Add
        </button>
        </div>
        {/* <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
      </div> */}
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {
          toDos.map((value)=>{

          return ( <li key={value.id}
           className="todo stack-small">
          <div className="c-cb">
            <input onChange={(e)=>{
              setTodos(toDos.filter(obj2=>{
                if(obj2.id === value.id){
                  obj2.status =e.target.checked
                }
                return obj2 
              }))
            }} value={value.status} id="todo-0" type="checkbox"  />
            <label className="todo-label" htmlFor="todo-0">
              {value.text}
            </label>
            <button onClick={()=>{
              remove(value.text)
            }} type="button" className=" btn btn__danger">
              Delete <span className="visually-hidden">Eat</span>
            </button>
            
          
          </div>
       
        </li>)
        
          })
        }
        {
        toDos.map((value)=>{
          
          if(value.status){
           
            return (
            <h1>{value.text}</h1>)
          }
          return null;
          
        })}
      </ul>
    </div>
  );
}

export default App;




