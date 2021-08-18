import React from 'react'
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let cont = {
        minHeight : "50vh"
    }
    return (
        <div className="container my-3" style={cont}>
            <h3 className= "text-center">Todos List</h3>
            {props.todos.length===0? "All todos was deleted" : 
            props.todos.map((todo)=>{
                return <TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}/>
            })}
        </div>
    )
}
