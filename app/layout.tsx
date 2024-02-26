import type { Metadata } from 'next'
import '@/app/global.css'
import { inter } from '@/app/ui/fonts'

export const metadata: Metadata = {
  title: 'Accouting System',
  description: 'Enable to manage all the accouting operations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
