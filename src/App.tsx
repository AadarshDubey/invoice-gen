// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import "./index.css";
import Login from "./components/login";
import Product from "./pages/product";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />

          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
