import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'F2E 台灣總統大選',
  description: '台灣總統大選開票與歷年統計票數',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="h-[100vh]">{children}</body>
    </html>
  )
}
