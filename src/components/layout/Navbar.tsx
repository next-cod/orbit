'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { navItems, product } from '@/data/content'
import { Arrow } from '@/components/ui/icons'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [lastPathname, setLastPathname] = useState(pathname)

  const isHome = pathname === '/'
  const heroTop = isHome && !scrolled
  const solid = !heroTop

  // close the mobile menu whenever the route changes (adjust state during
  // render instead of in an effect, per React's guidance on this pattern)
  if (pathname !== lastPathname) {
    setLastPathname(pathname)
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 26)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // lock background scroll while the fullscreen menu is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const navInnerClass = [
    'nav-inner',
    solid && 'solid',
    solid && scrolled && 'shadow',
    open && 'menu-open',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <header className="nav">
      <div className={navInnerClass}>
        <div className="nav-bar">
          <Link href="/" className="nav-brand" aria-label="Orbit Method – на главную">
            <span className="brand-mark" aria-hidden />
            <span>{product.name}</span>
          </Link>

          <nav className="nav-desk" aria-label="Основная навигация">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="nav-cta-wrap nav-desk">
            <Link href="/apply" className={`nav-cta ${heroTop ? 'on-hero' : 'on-solid'}`}>
              Оставить заявку
            </Link>
          </div>

          <button
            type="button"
            className={`nav-burger${open ? ' open' : ''}`}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger-lines" aria-hidden>
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-mobile" role="dialog" aria-modal="true" aria-label="Мобильное меню">
          <nav className="nav-mobile-links" aria-label="Мобильная навигация">
            <Link href="/" className={pathname === '/' ? 'active' : ''}>
              Главная
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'active' : ''}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="nav-mobile-foot">
            <Link href="/apply" className="btn btn-white btn-full">
              Оставить заявку <Arrow />
            </Link>
            <a className="nav-mobile-email" href={`mailto:${product.email}`}>
              {product.email}
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
