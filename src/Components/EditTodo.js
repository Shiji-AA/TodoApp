import React,{ useState } from 'react'
export const EditTodoForm = ({editTodo,task,todos}) => {
    const [value,setValue] = useState(task.task);
    const [error, setError] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
           //validation
        if (value.trim() === "") {
            setError("Task cannot be empty");
        } else if (value.length < 3) {
            setError("Task cannot be less than 3 characters");
        } else if (value.length > 20) {
            setError("Task cannot be more than 20 characters");        
        } else {             
            if (todos.some(todo =>task.id !== todo.id && todo && todo.task && typeof todo.task === 'string' && todo.task.toLowerCase() === value.toLowerCase())) {
                setError("Task already exists");
        }else {
                editTodo(value,task.id);
                setValue("");
                setError("");
            }
        }
    };

    return (
        <form className='TodoForm' onSubmit={handleSubmit}> 
        <input type="text" className='todo-input' value={value} placeholder='Update task'
        onChange={(e)=>setValue(e.target.value)}/>

        <button type='submit' className='todo-btn'>Update Task</button> 

        {error && <p style={{color:'red'}}>{error}</p>}            
        </form>        
    )
  };
