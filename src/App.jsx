import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Seeds from './components/Seeds'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Team/>
      <Seeds/>
    </main>
  )
}

export default App