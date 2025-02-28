import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from '../pages/Home'
import Services from '../pages/Services'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import DoctorDetails from '../pages/Docters/DoctorDetails'
import Doctors from '../pages/Docters/Doctors'
import MyAccount from '../DashBoard/user-account/MyAccount'
import Dashboard from '../DashBoard/doctor-account/Dashboard'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/doctors' element={<Doctors />} />
      <Route path='/doctors/:id' element={<DoctorDetails />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Signup />} />
      <Route path='/services' element={<Services />} />
      <Route 
        path='/users/profile/me' 
        element={
          <ProtectedRoute allowedRoles={['patient']} >
            <MyAccount />
          </ProtectedRoute> 
        } 
      />
      <Route 
        path='/doctors/profile/me' 
        element={
          <ProtectedRoute allowedRoles={['doctor']} >
            <Dashboard />
          </ProtectedRoute> 
        } 
      />
    </Routes>
  )
}

export default Routers