import './globals.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html className={'contentSection scrollbar-thin scrollbar-thumb-purple-500  scrollbar-track-slate-700' }  lang="en">
      <body className={'contentSection scrollbar-thin scrollbar-thumb-purple-500  scrollbar-track-slate-700' }>{children}</body>
    </html>
  )
}
