import { ArrowUpRight, Orbit } from 'lucide-react'
import Link from 'next/link'
import { navItems, product } from '@/data/content'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <div className="footer-brand">
            <Orbit size={16} />
            <span>{product.name}</span>
          </div>
          <p>Премиальная упаковка экспертности в продукт, воронку и запуск. Демоверсия без подключенного backend, CRM и платежей.</p>
        </div>
        <div className="footer-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
        <a className="footer-contact" href="mailto:hello@orbitmethod.example">
          hello@orbitmethod.example
          <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="footer-legal">
        <span className="footer-copyright">© {new Date().getFullYear()} {product.name}. Все права защищены.</span>
        <div className="footer-legal-links">
          <Link href="/privacy">Политика конфиденциальности</Link>
          <Link href="/offer">Публичная оферта</Link>
          <Link href="/license">Лицензионное соглашение</Link>
        </div>
      </div>
    </footer>
  )
}
