    import React,{useState} from 'react'
    import {TodoForm} from './TodoForm'
    import { v4 as uuidv4 } from 'uuid';
    import{Todo} from './Todo';
    import { EditTodoForm } from './EditTodo';

    export const TodoWrapper = () => {
        const[todos,setTodos]=useState([]);    //todos is an array to store all the todos.. setTodos is used to update the array.   
//addition
        const addTodo = (todo) => {
        setTodos([         
        {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false
        }, ...todos
        ]);
        console.log(todos);
        }
//completed
        const toggleComplete = (id) => {
        setTodos(
        todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo     //todo.completed value is false and when we give ! ,it will change as true...
        )
        );
        }
//deletion
        const deleteTodo=id=>{
        setTodos(todos.filter(todo=>todo.id !== id)) // display all tasks except , whose id=selected id;
        }
//edit
        const editTodo=id=>{
        setTodos(todos.map(todo=>todo.id ===id? {...todo,isEditing:!todo.isEditing}:todo))
        }        
//updating
        const editTask= (task,id) => {
        setTodos(todos.map(todo=>todo.id === id ? {...todo,task,isEditing: !todo.isEditing}:todo))
        } 
        
        
       return (

            <div className='TodoWrapper'>
                
            <h1>Get things Done !</h1>

            <TodoForm addTodo={addTodo} todos={todos}/>

            {todos.map((todo,index) => (
                todo.isEditing ? (  // if is editing is  true then edit form will show else normal task will show
                    <EditTodoForm editTodo={editTask} task={todo} todos={todos}/>
                ):(
                    <Todo task = {todo}
                    key={index} 
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    />
                )           
            ))}

        </div>
        )
    }
    
