import { useState } from 'react'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/AuthContext'



function App() {
 const {authUser}=useAuthContext()
 console.log(import.meta.env.VITE_BASEURL, "clglglglgllglg");

  return (
  <div className='h-screen w-full overflow-hidden'>
     
    <Routes>
 
      <Route path='/' element={authUser?<Home/>:<Navigate to="login"/>}/>
      <Route path='/login' element={authUser?<Navigate to="/"/>:<Login/>}/> 
      <Route path='/signup' element={authUser?<Navigate to="/"/>:<Signup/>}/>
      </Routes>
    <Toaster/>  
  </div>
  )
}

export default App
