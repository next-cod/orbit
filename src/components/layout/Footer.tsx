'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'
import { disclaimer, navItems, product } from '@/data/content'

export function Footer() {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const bodyRef = useRef<HTMLDivElement | null>(null)

  const toggle = () => {
    if (!open && bodyRef.current) setHeight(bodyRef.current.scrollHeight)
    setOpen((v) => !v)
  }

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="row">
              <span className="footer-mark" aria-hidden />
              <span className="name">{product.name}</span>
            </div>
            <p>
              8-недельная программа, чтобы упаковать экспертность в продукт и сделать первый понятный запуск
            </p>
          </div>
          <div className="footer-contact">
            <div className="lab">Пишите на почту</div>
            <a href={`mailto:${product.email}`}>{product.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <nav className="footer-nav">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/apply">Оставить заявку</Link>
          </nav>
          <div className="footer-legal">
            <Link href="/privacy">Политика конфиденциальности</Link>
            <Link href="/offer">Оферта</Link>
            <Link href="/license">Лицензия</Link>
            <button type="button" className="footer-disclaimer-toggle" onClick={toggle} aria-expanded={open}>
              {disclaimer.lead}
            </button>
            <span className="copy">© {new Date().getFullYear()} {product.name}</span>
          </div>
        </div>

        <div className="footer-disclaimer-body" style={{ maxHeight: open ? height : 0 }}>
          <div ref={bodyRef}>
            <p>{disclaimer.text}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
