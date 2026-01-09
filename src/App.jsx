import React from 'react'
import { div, main } from 'motion/react-client' // Keep if you use it, otherwise remove
import './App.css'

// 1. FIXED IMPORT (No curly braces)
import Tech from './components/Tech' 

// Check these imports too! If they are 'export default', remove the { }
import { Projects } from './components/Projects' 
import { Contact } from './components/Contact'

import Hero from './components/Hero'
import Subhero from './components/subhero'
import My from './components/my'
import Navbar from './components/Navbar'

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
        <Subhero />
        
        {/* Your Hero Section */}
        <My />
        
        {/* Your Tech Section */}
        <Tech />
        

      </div>
    </div>
  )
}

export default App