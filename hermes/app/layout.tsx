import './globals.css'
import type { Metadata } from 'next'
import { Spline_Sans_Mono } from 'next/font/google'
import { AuthProvider } from './context/AuthProvider'

const spline = Spline_Sans_Mono({
  subsets: ['latin'],
  variable: '--font-spline',
})

export const metadata: Metadata = {
  title: 'Hermes',
  description: 'Clothing Brand',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spline.variable}`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
