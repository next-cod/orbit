import Link from 'next/link'
import { Arrow } from '@/components/ui/icons'

export default function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>Такой страницы нет. Вернитесь на главную или откройте заявку на участие в Orbit Method.</p>
      <Link className="btn btn-primary" href="/">
        На главную <Arrow />
      </Link>
    </section>
  )
}
