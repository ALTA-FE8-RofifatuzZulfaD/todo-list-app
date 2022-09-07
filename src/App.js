import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTodo from "./component/addtodo";
import DetailTodo from "./pages/DetailTodo";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/detail-todo" element={<DetailTodo/>} />
        <Route path="/addtodo" element={<AddTodo/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
