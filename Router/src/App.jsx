import { useState } from 'react'
import './App.css'
import Home from "./pages/home"
import Contact from "./pages/contact"
import About from "./pages/about"

import {Route , Routes} from 'react-router-dom'
import Nav from "./components/Nav"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    
    <Routes>
     <Route path='/' element= {<Home />} />
     <Route path='/contact' element= {<Contact />} />
     <Route path='/about' element= {<About />} />
    </Routes>
    </>
  )
}

export default App
