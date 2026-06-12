import React from 'react'
import LoginPageHome from './LoginPageHome'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPageDashBoard from './LoginPageDashBoard'

const LoginPageParent = () => {


  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/dashboard' element={<LoginPageDashBoard/>}/>
        <Route path='/' element={<LoginPageHome/>}/>
     </Routes>
     </BrowserRouter>
    </>   
  )
}

export default LoginPageParent