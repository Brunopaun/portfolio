'use client'

import './styles/globals.css'
import NavigationBar from './components/general/NavigationBar'
import LanguageProvider from './context/LanguageProvider'
import Footer from './components/general/Footer'
import localFont from 'next/font/local'
import { useEffect, useRef } from 'react'

const materialSymbols = localFont({
  variable: '--font-family-symbols', // Variable name (to reference after in CSS/styles)
  style: 'normal',
  src: '../node_modules/material-symbols/material-symbols-rounded.woff2', // This is a reference to woff2 file from NPM package "material-symbols"
  display: 'block',
  weight: '100 700',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  const appRef = useRef(null)

  useEffect(()=>{
    const moveGradient = (event:any) => {
      const winWidth = window.innerWidth
      const winHeight = window.innerHeight

      const mouseX = Math.round(event.pageX/ winWidth *100) 
      const mouseY = Math.round(event.pageY/ winHeight *100) 
    
      if(appRef) {
        appRef.current.style.setProperty(
          '--mouse-x',
          mouseX.toString() + '%'
        )
        appRef.current.style.setProperty(
          '--mouse-y',
          mouseY.toString() + '%'
        )
        
      }
    }

    document.addEventListener('mousemove', moveGradient)
    return () =>{ 
      document.removeEventListener('mousemove', moveGradient)
    }
  }, [appRef])

  return (
    <html lang="en" className={`${materialSymbols.variable}`}>
      <body className='overflow-y-hidden px-36 flex flex-col justify-between py-6' id='body' ref={appRef}>
        <LanguageProvider>
          <NavigationBar/>
            {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  )
}
