import './styles/globals.css'
import NavigationBar from './components/general/NavigationBar'
import LanguageProvider from './context/LanguageProvider'
import Footer from './components/general/Footer'
import localFont from 'next/font/local'

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

  return (
    <html lang="en" className={`${materialSymbols.variable}`}>
      <body className='h-screen max-h-screen overflow-y-hidden px-36 flex flex-col justify-between py-6'>
        <LanguageProvider>
          <NavigationBar/>
            {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  )
}
