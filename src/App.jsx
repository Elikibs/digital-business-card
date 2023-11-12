import { useState } from 'react'
import About from "./components/About"
import Interests from './components/Interests'
import Info from './components/Info'
import Footer from './components/Footer'
import './App.css'



function App() {
  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  )
}

export default App;
