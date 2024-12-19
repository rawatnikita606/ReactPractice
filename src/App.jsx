import React from 'react'
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Header from './pages/Header'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Blogs from './pages/Blogs'
import DigitalClock from './pages/DigitalClock'
import LoginForm from './pages/LoginForm';
import WelcomePage from './pages/Welcomepage';
import SignUp from './pages/SignUpForm';
import Fetch from './pages/Fetch';
import NewWebsite from './pages/NewWebsite';
import Hospital from './pages/Hospital';


//import 'bootstrap/dist/css/bootstrap.min.css';

// import Clock2 from './pages/Clock2';



const App = () => {
  return (
<BrowserRouter>
<Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/welcome' element={<WelcomePage />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/digitalclock' element={<DigitalClock />}></Route>
         <Route path='/loginform' element={<LoginForm />}></Route> 
         <Route path='/register' element={<SignUp />}></Route> 
         <Route path='/login' element={<LoginForm />}></Route> 
         <Route path='/fetch' element={<Fetch />}></Route> 
         <Route path='/newwebsite' element={<NewWebsite />}></Route> 
         <Route path='/hospital' element={<Hospital />}></Route> 
      
</Routes>
</BrowserRouter>
   
  )
}

export default App