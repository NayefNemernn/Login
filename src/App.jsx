import React from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'

var isLogin = true

function App() {
  return (
    <>
      {isLogin ? <Login /> : <Register />}
    </>
  )
}

export default App
