import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="not-found">
      <span className="eyebrow">404</span>
      <h1>Такой страницы нет.</h1>
      <p>Вернитесь на главную или откройте заявку на участие в Orbit Method.</p>
      <Link className="button primary" href="/">
        На главную
      </Link>
    </section>
  )
}
