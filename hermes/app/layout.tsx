import './globals.css'
import type { Metadata } from 'next'
import { Spline_Sans_Mono } from 'next/font/google'
import { UserProvider } from './context/user.context'
import { ProductsProvider } from './context/products.context'
import { CartProvider } from './context/cart.context'

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
