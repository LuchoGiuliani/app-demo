import Navbar from '@/components/layout/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Alegreya } from 'next/font/google'
import { cookies } from 'next/headers'

const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' })
const alegreya = Alegreya({ subsets: ['latin'], variable: '--font-alegreya' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const loggedUsernameCookie = cookies().get("SocialUsername")
  return (
    <html lang="en">
      <body className={`${mulish.className} ${mulish.variable} ${alegreya.variable}`}>
        <Navbar loggedUsername={loggedUsernameCookie?.value}/>
        {children}
      </body>
    </html>
  )
}
