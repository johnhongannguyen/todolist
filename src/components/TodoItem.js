import React,{useState,useEffect} from 'react'
import styled from 'styled-components'

const TodoItem = ({todo, todos, setTodos,color}) => {
    const [editedTodo, setEditedTodo] = useState(todo.title);
    
    useEffect(() =>{
        setEditedTodo(todo.title);
    },[todo])
    const deleteHandler = () =>{
        const currentTodoId = todo.id;
        setTodos(todos.filter(todo => todo.id !== currentTodoId))
        console.log(todos);
    }

    const saveTodo = () =>{
        const currentTodoId = todo.id;
        setTodos(todos.map(
            todo => todo.id === currentTodoId ? {...todo,title:editedTodo} : todo
        ))
    }

    const completeTodo = () =>{
        const currentTodoId = todo.id;
        setTodos(todos.map (todo => 
            todo.id === currentTodoId ? {...todo,completed: !todo.completed} : todo
        ))
    }
    return (
    
        <TodoListItem>
      <Checkbox 
      className={todo.completed ? 'fas fa-check-circle' : 'far fa-circle'} 
      onClick={completeTodo}
      style={{color:color}}
      />
      <input 
      style={{textDecoration: todo.completed ? 'line-through' : 'none'}} 
      value={editedTodo} 
      onChange={e => setEditedTodo(e.target.value)}/>

      {todo.title !== editedTodo && (<SaveTodo className='fa-solid fa-check'  onClick={saveTodo} />)}
      <DeleteItem 
      className= 'fa-solid fa-trash-can' 
      onClick={deleteHandler}/>
        </TodoListItem>
        
    )

}

export default TodoItem

const TodoListItem= styled.div`
    height: 50x;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    transition: 0.3s;

    input {
        flex: 1;
        font-size: 22px;
        outline: none;
        background: none;
        border: none;
        color: #eee;
        // text-decoration: line-through
    }
`

const Checkbox = styled.i`
    font-size: 20px;
    margin-right: 10px;
    cursor: pointer;
`

const DeleteItem = styled.i`
    color: #ff1605;
    padding: 10px 16px;
    margin-left: 14px;
    border-radius: 4px;
    margin-right: -12px;

    &:hover{
        background-color: #7e2601;
        transition: 0.3s;
        cursor: pointer;
    }
`

const SaveTodo = styled.i`
    padding: 10px 16px;
    border-radius: 4px;
    margin-right: -12px;
    color: #42c732;

    &:hover{
        background-color: #2b6127;
        transition: 0.3s;
        cursor: pointer;
    }
`


