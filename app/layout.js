import { Inter } from 'next/font/google';
import Footer from "./(components)/Footer/footer"
import Haeder from"./(components)/Header/header"
import './globals.css'
const inter = Inter({ subsets: ['latin'] });
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout(  { children }  )
  {
  return (
    <html lang="en">
     
      <body className={inter.className}>
      <Haeder/>
        {children}
        <Footer/>
    
      </body>
    </html>
  )
}
