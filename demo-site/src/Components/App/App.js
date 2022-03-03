
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {Home } from "../home/home";
import {Todo} from '../todo/todo';
import { Header } from "../header/header";
import React, {useContext} from "react";

export const TodoContext = React.createContext();

function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div>
        <TodoContext.Provider value ={{todos,setTodos}}>
      <BrowserRouter>
       <Header /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/todo" element={<Todo />} /> 
        </Routes>
      </BrowserRouter>  
      </TodoContext.Provider>
    </div>
  );
}
export default App;