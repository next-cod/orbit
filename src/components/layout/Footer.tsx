import Link from 'next/link'
import { navItems, product } from '@/data/content'

export function Footer() {
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
            <span className="copy">© {new Date().getFullYear()} {product.name}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
