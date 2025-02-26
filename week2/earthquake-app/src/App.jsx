import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import List from './components/List'
import Form from './components/Form'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<List/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
