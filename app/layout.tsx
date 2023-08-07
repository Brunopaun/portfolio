import './styles/globals.css'
import NavigationBar from './components/general/NavigationBar'
import LanguageProvider from './context/LanguageProvider'
import Footer from './components/general/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <NavigationBar/>
            {children}
          <Footer/>
        </LanguageProvider>
      </body>
    </html>
  )
}
