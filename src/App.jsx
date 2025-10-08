
import { Link, Route, Routes } from 'react-router-dom'
// import './App.css'
import Home from './Pages/Home'

import React, { useRef } from 'react'
import Agency from './Pages/Agency'
import Projects from './Pages/Projects'
import Navbar from './Components/Navigation/Navbar'
import FullScreenNav from './Components/Navigation/FullScreenNav'


const App = () => {

  return (

<div>

 <Navbar />
 <FullScreenNav /> 
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/agency' element={<Agency />} />
   <Route path='/projects' element={<Projects/>} />
</Routes>

  </div>  
  
  )
}

export default App
