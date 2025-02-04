import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Singup'
import Login from './pages/Login'
import Settings from './pages/Settings'
import Profile from './pages/Profile'
import { useAuthStore } from './store/useAuthStore'
import { useEffect } from 'react'
import { Loader } from "lucide-react"
import { Navigate } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import { useThemeStore } from './store/useThemeStore'
const App = () => {
  const { authUser, checkAuth, isCheckingAuth , onlineUsers} = useAuthStore()
  const {theme} =  useThemeStore()

  useEffect(() => {
    checkAuth()
  }, [checkAuth])        //if you're authenticated or not

  console.log(authUser)
  console.log("Online",onlineUsers)

  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <Loader className="size-10 animate-spin" />
    </div>
  )

  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route exact path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route exact path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
        <Route exact path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route exact path="/settings" element={<Settings />} />
        <Route exact path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
       <Route exact path="/profile" element={authUser ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  )
}

export default App
