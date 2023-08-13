import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { UserProvider } from './context/user.context'
import { CategoriesProvider } from './context/categories.context'
import { CartProvider } from './context/cart.context'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
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
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <UserProvider>
          <CategoriesProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </CategoriesProvider>
        </UserProvider>
      </body>
    </html>
  )
}
