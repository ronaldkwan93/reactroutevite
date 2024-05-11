import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutPage from './pages/About'
import HomePage from './pages/Home'
import ContactPage from './pages/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/about' element={<AboutPage />}/>
          <Route path='/contact' element={<ContactPage />}/>
          <Route path='*' element={<PageNotFound />}/>
        </Routes>
    </>
  )
}

export default App
