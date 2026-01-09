import React from 'react'
import Spline from '@splinetool/react-spline'

function subhero() {
  return (
    // 1. Add 'relative' to the parent so the button stays inside it
    <div className='relative w-full h-screen overflow-hidden mt-10'>
      
      <Spline
        scene="https://prod.spline.design/JJn3wDxpkqG1neZJ/scene.splinecode" 
      />

      {/* 2. Use 'absolute' to place the button exactly where you want */}
      
      <div className='absolute bottom-4 right-5 z-10 bg-neutral-950  px-4 py-2 rounded-md w-40 h-10 '></div>
      
    </div>
  )
}

export default subhero