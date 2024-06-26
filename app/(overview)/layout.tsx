
import type { Metadata } from 'next'
import '@/app/global.css'
import SideNav from '@/app/ui/Sidenav'
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
      <body className={`${inter.className} antialiased`}>
        <div className='flex h-screen flex-col bg-white md:flex-row md:overflow-hidden'>
          <div className='w-full flex-none md:w-64'>
            <SideNav />
          </div>
          <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
