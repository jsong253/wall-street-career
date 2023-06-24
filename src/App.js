import logo from './logo.svg';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home'
import About from './components/home/About'
import Courses from './components/courses/Courses';
import Course from './components/courses/Course';
import Preferences from './components/preferences/Preferences';
import NotFound from './components/notFound/PageNotFound'
import Login from './components/login/Login';
import PasswordReset from './components/login/PasswordReset'

import SignupForm from './components/register/SignupForm.js'

import React, { useState } from 'react';



import Pricing from './components/pricing/Pricing';
import StandardPricing from './components/pricing/StandardPricing';
import PremiumPricing from './components/pricing/PremiumPricing';

// import CreateAccount from './components/login/CreateAccount';

import TermsOfUse from "./components/footer/TermsOfUse";
import PrivacyNotice from './components/footer/PrivacyNotice';

/* This is required only if the project file is located 
inside the app. Otherwise you can use the external link of the pdf file*/
import termsOfUsePDF from "./components/footer/pluralsight-individual-terms-of-use-v-2.pdf";
import privacyNoticePDF from "./components/footer/Privacy Notice.pdf";

import SendFeedback from "./components/feedback/SendFeedback";



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
          <Route path="/:category/:id" element={<Course />} />

          <Route exact path="/preferences" element={<Preferences/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/signup" element={<SignupForm/>}/>
          <Route exact path="/resetPassword" element={<PasswordReset/>}/>
          <Route exact path="/termOfUse" element={< TermsOfUse pdf={termsOfUsePDF}/>}/>
          <Route exact path="/privacyNotice" element={< PrivacyNotice pdf={privacyNoticePDF}/>}/>
          <Route exact path="/pricing" element={<Pricing/>}/>
          <Route exact path="/standardPricing" element={<StandardPricing/>}/>
          <Route exact path="/premiumPricing" element={<PremiumPricing/>}/>
          <Route exact path="/sendFeedback" element={<SendFeedback/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes> 

      
  
      <Footer/>
    </div>
  );
}

export default App;
