
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../home/home";
// import Todo/ist from '../todo/TodoList';
import { Header } from "../header/header";

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/todo" element={<TodoList />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;