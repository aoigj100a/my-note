import React from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import TodoPage from "./pages/TodoPage";
import DashboardPage from "./pages/DashboardPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<>home.</>}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
