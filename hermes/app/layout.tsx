import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { UserProvider } from './context/user.context'
import { ProductsProvider } from './context/products.context'
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
    <html lang="en">
      <body className={`${montserrat.variable}`}>
        <UserProvider>
          <ProductsProvider>
            <CartProvider>
              {children}
            </CartProvider>
          </ProductsProvider>
        </UserProvider>
      </body>
    </html>
  )
}
