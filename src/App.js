import logo from './logo.svg';
import './App.css';
import { Route, Link, Routes} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Courses from './components/courses/Courses';
import Preferences from './components/preferences/Preferences';
import NotFound from './components/notFound/NotFound'
import Login from './components/login/Login';
import PasswordReset from './components/login/PasswordReset'

import SignupForm from './components/register/SignupForm.js'

import React, { useState } from 'react';


function App() {
  const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }

  return (
    <div className="App">
      <Header />

      <Routes>
          <Route exact path="/courses" element={<Courses/>}/>
          <Route exact path="/preferences" element={<Preferences/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignupForm/>}/>
          <Route exact path="/resetPassword" element={<PasswordReset/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes> 

      
  
      <Footer/>
    </div>
  );
}

export default App;
