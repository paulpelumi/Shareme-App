import React from 'react'
// import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from 'react-router-dom';


const App = () => {
  
  return (
    <div>
         
      <Login />
    </div>
    
  )
};

export default App