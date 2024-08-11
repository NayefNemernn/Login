import React, {useState} from 'react'
import './App.css'
import Form from './components/Form'
import Counter from './Counter'

var isLogin = true

function App() {

  return (
    <>
      <Form areUlogin = {isLogin} />
      <Counter />
    </>
  )
}

export default App
