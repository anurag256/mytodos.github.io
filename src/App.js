import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import React, { useState } from 'react';

function App() {

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const [todos, settodos] = useState([
  {
    sno: 1,
    title: "Go to the mall",
    desc: "You need to go to the market to get this job done"
  },
  {
    sno: 2,
    title: "Go to the mall",
    desc: "You need to go to the market to get this job done"
  },
  {
    sno: 3,
    title: "Go to the mall",
    desc: "You need to go to the market to get this job done"
  }
]);
  return (
    <>
    <Header title="My Todos" searchBar={true}/>
    <Todos todos = {todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
