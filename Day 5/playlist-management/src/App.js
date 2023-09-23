import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/Signup';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<SignUp />} />
        <Route path="/home" element={<Home/> }/>
        <Route path="/dashboard" element={<Dashboard />} />

                {/* Add other routes as needed */}
      </Routes>
    </Router>
  );  
}

export default App;