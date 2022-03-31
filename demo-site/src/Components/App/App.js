
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import  {Home } from "../home/home";
import {Todo} from '../todo/todo';
import { Header } from "../header/header";
import React, {useContext} from "react";
import {Chat} from '../Chat/chat';
export const TodoContext = React.createContext();

function App() {
  const [todos, setTodos] = React.useState([]);
  return (
    <div>
        <TodoContext.Provider value ={{todos,setTodos}}>
      <HashRouter>
       <Header /> 
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/todo" element={<Todo />} /> 
          <Route path="/chat" element={<Chat />} /> 
        </Routes>
      </HashRouter>  
      </TodoContext.Provider>
     


    </div>
  );
}
export default App;