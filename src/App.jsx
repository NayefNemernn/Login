import React from 'react'
import './App.css'
import Form from './components/Form'

var isLogin = false

function App() {
  return (
    <>
      <Form areUlogin = {isLogin}/>
    </>
  )
}

export default App
