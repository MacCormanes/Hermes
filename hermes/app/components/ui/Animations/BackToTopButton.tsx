import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button';

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 600) {
        setBackToTopButton(true)
      } else {
        setBackToTopButton(false)
      }
    })
  }, [])
  
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='relative'>
      {backToTopButton && (
        <Button onClick={scrollUp} className="fixed w-10 h-10 text-xl font-bold transition-all duration-300 bg-orange-500 rounded-full bottom-12 right-12 hover:bg-orange-400">^</Button>
      )}
    </div>
  )
}

export default BackToTopButton