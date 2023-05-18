import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/home/About'
import Courses from './components/courses/Courses';
import Detail from './components/courses/Detail';
import Preferences from './components/preferences/Preferences';
import NotFound from './components/notFound/PageNotFound'
import Login from './components/login/Login';
import PasswordReset from './components/login/PasswordReset'

import SignupForm from './components/register/SignupForm.js'

import React, { useState } from 'react';

import TermOfUse from './components/footer/TermOfUse';
import PrivateNotice from './components/footer/PrivateNotice';
import Pricing from './components/common/Pricing';


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
          <Route path="/course/:category" element={<Courses/>} />
          <Route path="/:category/:id" element={<Detail />} />

          <Route exact path="/preferences" element={<Preferences/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignupForm/>}/>
          <Route exact path="/resetPassword" element={<PasswordReset/>}/>
          <Route exact path="/privateNotice" element={<PrivateNotice/>}/>
          <Route exact path="/termOfUse" element={<TermOfUse/>}/>
          <Route exact path="/pricing" element={<Pricing/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes> 

      
  
      <Footer/>
    </div>
  );
}

export default App;
