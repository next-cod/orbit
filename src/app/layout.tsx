import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { LenisProvider } from '@/components/layout/LenisProvider'
import { PageTransition } from '@/components/layout/PageTransition'

export const metadata: Metadata = {
  title: 'Orbit Method — 8-недельная программа для экспертов',
  description: 'Соберите инфопродукт, который выглядит как сильный бренд, а продается как система.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <LenisProvider>
          <div className="site-shell">
            <Navbar />
            <PageTransition>
              <main>{children}</main>
            </PageTransition>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  )
}
