import React from 'react';

import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';

import Profile from './pages/Profile';




function App() {
 



  return (
    <div className="App">
      <BrowserRouter>
         <Nav />
         
     <main className="form-signin w-100 m-auto">
      
      <Routes>
      <Route path="/" element={<Home />}/>
      if (loggedIn === 'true') {
       // <Route path="/logout" element={<Logout />}/>
        //<p>You are logged in</p>
      } 
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/profile" element={<Profile />}/>
      
        
      
        
        
  
      
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}
     
export default App;
