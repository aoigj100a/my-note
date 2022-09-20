import React from "react";
import TodoPage from "./pages/TodoPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<>home.</>}></Route>
      <Route path="/todo" element={<TodoPage />}></Route>
      <Route path="/dashboard" element={<>dashboard.</>}></Route>
    </Routes>
  );
}

export default App;
