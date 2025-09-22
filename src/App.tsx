import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/login.tsx'
import SignUp from './pages/signUp.tsx'
import Header from './defaultLayout/header.tsx'
import ContactUs from './pages/contactUs.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Header />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/contactUs' element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
