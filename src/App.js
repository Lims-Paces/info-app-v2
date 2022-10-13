import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Testimonials from './components/testimonials/Testimonials'
import Moments from './components/moments/Moments'
import Cta from './components/cta/Cta'
import Footer from './components/footer/Footer'
import { themeContext } from './Context'
import { useContext } from 'react'

const App = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div
      className='App'
      style={{
        background: darkMode ? 'black' : '',
        color: darkMode ? 'white' : '',
      }}
    >
      <Header />
      <Hero />
      <Testimonials />
      <Moments />
      <Cta />
      <Footer />
    </div>
  )
}

export default App
