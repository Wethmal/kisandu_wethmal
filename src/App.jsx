import React from 'react'
import { div, main } from 'motion/react-client' 
import './App.css'


import Tech from './components/Tech' 
import Projects  from './components/Projects' 
import Contact from './components/Contact'
import My from './components/My'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Education from './components/Education'
import Services from './components/Services'

function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      
      {/* Background Wrapper */}
      <div className='fixed top-0 -z-10 h-full w-full'>
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#0d0b16]"></div>
      </div>

      {/* Main Content */}
      <div className='flex flex-col items-center w-full'>
        <Navbar />
        <My />
        <Tech />
        <Projects />
        <Education />
        <Services />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App