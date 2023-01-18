import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Projects } from './components/Projects'
import './additionalcss/app.scss'
import Main from './components/Main'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'

const App = () => {
  return (
    <div    className='app-container'>
    <BrowserRouter>
    <Navbar />
    {/* <Menu /> */}
    <Routes>
    <Route path='/'     element={<Main />} />
    <Route path='/projects' element={<Projects />} />
    <Route path='/contact' element={<Contact   />} />

    </Routes>
    <Footer />
    </BrowserRouter>
   </div>
  )
}

export default App