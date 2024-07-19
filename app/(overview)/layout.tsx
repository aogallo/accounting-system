import type { Metadata } from 'next'
import '@/app/global.css'
import SideNav from '@/components/Sidenav'
import { inter } from '@/components/fonts'
import { Toaster } from '@/components/ui/toaster'
import { Header } from '@/components/Header'

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
        <div className='flex h-screen flex-col bg-white md:flex-row md:overflow-hidden'>
          <div className='w-full flex-none md:w-64'>
            <SideNav />
          </div>
          <div className='flex-grow p-3 md:overflow-y-auto md:p-6'>
            <Header />
            {children}
            <Toaster />
          </div>
        </div>
      </body>
    </html>
  )
}
