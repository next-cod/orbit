import Link from 'next/link'
import { Arrow } from '@/components/ui/icons'
import { PriceCard } from '@/components/ui/PriceCard'
import { tariffs } from '@/data/content'

export const metadata = {
  title: 'Тарифы – Orbit Method',
  description: 'Один маршрут, три уровня поддержки: от самостоятельной сборки до личного launch-room.',
}

export default function PricingPage() {
  return (
    <div className="page-in">
      <section className="page-head tight">
        <div className="wrap-narrow" style={{ textAlign: 'center' }}>
          <h1 style={{ marginInline: 'auto' }}>Выберите формат запуска</h1>
          <p style={{ marginInline: 'auto' }}>
            Один маршрут, три уровня поддержки. От самостоятельной сборки до личного launch-room с
            командой кураторов.
          </p>
        </div>
      </section>

      <section className="sec-white" style={{ padding: 'clamp(40px,5vw,64px) 0 clamp(72px,9vw,110px)' }}>
        <div className="wrap">
          <div className="pricing-grid">
            {tariffs.map((t, i) => (
              <PriceCard tier={t} delay={i * 80} key={t.id} />
            ))}
          </div>

          <div className="reveal cta-row" style={{ marginTop: 'clamp(48px,6vw,76px)' }}>
            <div className="copy">
              <h2>Не уверены, какой формат подойдёт?</h2>
              <p>
                Заполните заявку – форма подберёт тариф под вашу нишу и цель, а куратор подтвердит на
                коротком созвоне.
              </p>
            </div>
            <Link className="btn btn-primary" href="/apply">
              Подобрать тариф <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
