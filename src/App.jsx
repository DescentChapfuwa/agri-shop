import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Team from './components/Team'
import Seeds from './components/Seeds'
import Tools from './components/Tools'
import Chemicals from './components/Chemicals'
import Fertilizers from './components/Fertilizers'

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Team/>
      <Seeds/>
      <Tools/>
      <Chemicals/>
      <Fertilizers/>
    </main>
  )
}

export default App