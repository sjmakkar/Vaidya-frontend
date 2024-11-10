import { useState } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignupPage';
import './App.css'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AppointmentPage from './pages/AppointmentPage';

function App() {
 

  return (

 
     <Router>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/appointment" element={<AppointmentPage/>} />
      </Routes>
     </Router>
  )
}

export default App
