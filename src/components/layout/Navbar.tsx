'use client'
import { Menu, Orbit, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { navItems, product } from '@/data/content'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="navbar">
      <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="На главную Orbit Method">
        <span className="brand-mark">
          <Orbit size={17} />
        </span>
        <span>{product.name}</span>
      </Link>

      <nav className="desktop-nav" aria-label="Основная навигация">
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

      <Link className="nav-cta" href="/apply">
        Оставить заявку
      </Link>

      <button
        className="icon-button mobile-menu-button"
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Открыть меню"
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      {open && (
        <div className="mobile-nav" role="dialog" aria-label="Мобильное меню">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            style={{ background: 'var(--color-night-sky)', color: '#fff', border: '1px solid var(--color-rich-black)' }}
          >
            Оставить заявку
          </Link>
        </div>
      )}
    </header>
  )
}
