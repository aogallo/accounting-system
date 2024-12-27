import type { Metadata } from 'next'
import '@/app/global.css'
import { inter } from '@/components/fonts'
// import { Toaster } from '@/components/ui/toaster'

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
      <body className={`${inter.className} antialiased`}>
        {children}
        {/* <Toaster /> */}
      </body>
    </html>
  )
}
