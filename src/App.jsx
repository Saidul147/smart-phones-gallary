import { useState } from 'react'
import './App.css'
import NavBar from './NavBar/NavBar'
import ShowPhones from './showPhone/ShowPhones'
import Hero from './Hero/Hero'
import CustomCursor from './customCursor/CustomCursor'
import Brand from './brand/Brand'
import About from './About/About'
import Service from './service/Service'

function App() {

  return (
    <div className=' bg-white pt-5 '>

    {/* <CustomCursor></CustomCursor> */}
    <NavBar></NavBar>
    <Hero></Hero>
    <Brand></Brand>
    <About></About>
    <Service></Service>
     <ShowPhones></ShowPhones>
    </div>
  )
}

export default App 
