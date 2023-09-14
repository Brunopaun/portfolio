import './styles/globals.css'
import NavigationBar from './components/general/NavigationBar'
import LanguageProvider from './context/LanguageProvider'
import Footer from './components/general/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
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
