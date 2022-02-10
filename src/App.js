import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login'
import Contact from './Pages/Contact/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Pages/Shared/Header/Header';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './Context/AuthProvider';
AOS.init();

function App() {
  return (
    <AuthProvider>
          <BrowserRouter>

          <Header/>

            <Routes>

              <Route path="/" element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/registration" element={<Registration/>}/>

            </Routes>
          
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
