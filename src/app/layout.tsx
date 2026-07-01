import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { ScrollFX } from '@/components/layout/ScrollFX'

const manrope = Manrope({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Orbit Method – упакуйте экспертность в продукт',
  description:
    'За 8 недель собираем оффер, программу, лендинг, тарифы и заявку для первого понятного запуска.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={manrope.variable} data-scroll-behavior="smooth">
      <body>
        <div className="site-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollFX />
      </body>
    </html>
  )
}
