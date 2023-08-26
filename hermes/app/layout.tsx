import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { CategoriesProvider } from "./context/categories.context";
import ReduxProvider from "./store/ReduxProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Hermes",
  description: "Clothing Brand",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <body>
        <ReduxProvider>
            <CategoriesProvider>{children}</CategoriesProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
