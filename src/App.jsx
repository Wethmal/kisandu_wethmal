import { div, main } from 'motion/react-client'
import './App.css'

import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import Hero from './components/Hero'

import Navbar from './components/Navbar'


function App() {
  

  return (
  
//  <div>
//   <div class="absolote z-0 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
//    <main className='flex flex-col items-center px-4 md:px-8
//    lg:px-16'>
    
//     <Navbar />
//     <Hero />
//     <Tech />
//     <Projects />
//     <Contact />

//    </main>
// </div> 

 <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 '>
   <div className='fixed top-0 -z-10 h-full w-full'>
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
   </div>

   <div className='flex flex-col items-center '>
    <Navbar />
    <Hero/>


   </div>
 </div>
 

  )
}

export default App
