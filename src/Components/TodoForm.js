import React,{ useState } from 'react'
export const TodoForm = ({addTodo,todos}) => {
    const [value,setValue] = useState("");  // this is the value we are entering as new task
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        // validations
        if (value.trim() === "") {
            setError("Task cannot be empty");
        } else if (value.length < 3) {
            setError("Task cannot be less than 3 characters");
        } else if (value.length > 20) {
            setError("Task cannot be more than 20 characters");        
        } else {         
        if (todos.some(todo => todo && todo.task && typeof todo.task === 'string' && todo.task.toLowerCase() === value.toLowerCase())) { //IF todo exists,todo.task exists
                setError("Task already exists");
                //validation ends here
        }else {
                addTodo(value);
                setValue("");   //after adding the task ,input label should be blank
                setError("");
            }
        }
    };
    
    
    return (

        <form className='TodoForm' onSubmit={handleSubmit}> 

        <input type="text" className='todo-input' value={value} placeholder='What is the task today?'
        onChange={(e)=>setValue(e.target.value)}/>
            
        <button type='submit' className='todo-btn'>Add Task</button>  

        {error && <p style={{color:'red'}}>{error}</p>}  

        </form>        
    )
  };
