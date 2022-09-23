import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import TodoPage from "./pages/TodoPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage/>}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
