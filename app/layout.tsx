import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '../styles/fonts/inter.css'
import '../styles/fonts/MantouSans.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'F2E 台灣總統大選 | 示範網站',
  description: '台灣總統大選開票與歷年統計票數',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-gray-100`}>{children}</body>
    </html>
  )
}
