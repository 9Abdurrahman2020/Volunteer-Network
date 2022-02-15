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
import Events from './Pages/Events/Events';
import Causes from './Pages/Causes/Causes';
import Donate from './Pages/Donate/Donate';
import SuccessPayment from './Pages/SuccessPayment/SuccessPayment';
import JoinEvent from './Pages/JoinEvent/JoinEvent';
import BecomeVolunteer from './Pages/BecomeVolunteer/BecomeVolunteer';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import VolunteerRoute from './Pages/VolunteerRoute/VolunteerRoute';
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
              <Route path="/events" element={<Events/>}/>
              <Route path="/causes" element={<Causes/>}/>
              <Route path="/registration" element={<Registration/>}/>
              <Route path="/donate/:id" element={ <Donate/> }/>
              <Route path="/success" element={ <SuccessPayment/> }/>
              <Route path="/join-event/:id" element={ <VolunteerRoute> <JoinEvent/> </VolunteerRoute>  }/>
              <Route path="/become-volunteer" element={ <PrivateRoute> <BecomeVolunteer/> </PrivateRoute>  }/>

            </Routes>
          
        </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
