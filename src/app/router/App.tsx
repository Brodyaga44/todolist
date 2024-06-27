import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../../App.css";
import "../../styles/index.scss";

import Welcome from "../../widgets/Welcome/welcome";
import TodoPage from "../../widgets/ToDoPage/todoPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
