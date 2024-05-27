import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import SigninPage from './pages/SigninPage'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<label>Hello World!</label>} />
        <Route path='/signup' element={<SignupPage/>} />
        <Route path='/signin' element={<SigninPage/>} />
      </Routes>
    </Router>
  )
}
