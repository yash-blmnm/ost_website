import Header from '../components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Om Shanthi Theertham',
  description: 'Mrtyor Maa Amrtam Gamaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
