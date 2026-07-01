import Image from 'next/image'
import Link from 'next/link'
import { Arrow } from '@/components/ui/icons'
import { cases } from '@/data/content'

export const metadata = {
  title: 'Кейсы – Orbit Method',
  description: 'Эксперты из разных ниш собрали продукт и сделали первый поток. Вот что получилось.',
}

export default function CasesPage() {
  return (
    <div className="page-in">
      <section className="page-head">
        <div className="wrap">
          <h1 style={{ maxWidth: '18ch' }}>Истории первых запусков</h1>
          <p>
            Эксперты из разных ниш собрали продукт и сделали первый поток. Вот что у них получилось.
          </p>
        </div>
      </section>

      <section className="sec-canvas" style={{ padding: 'clamp(56px,7vw,92px) 0 clamp(72px,9vw,108px)' }}>
        <div className="wrap">
          {cases.map((c, i) => (
            <div className="reveal case-study" key={c.id}>
              <div className={`case-row${i % 2 === 1 ? ' flip' : ''}`}>
                <div className="case-photo">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    sizes="(max-width: 960px) 100vw, 500px"
                    priority={i === 0}
                  />
                </div>
                <div>
                  <span className="case-role">{c.role}</span>
                  <p className="case-quote">«{c.quote}»</p>
                  <div className="case-name">{c.name}</div>
                  <div className="case-metrics">
                    {c.metrics.map((mt) => (
                      <div key={mt.label}>
                        <div className="big">
                          <span data-count={mt.count} data-dec={mt.dec}>
                            {mt.dec > 0 ? String(mt.count).replace('.', ',') : String(mt.count)}
                          </span>
                          {mt.suffix}
                        </div>
                        <div className="lbl">{mt.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="reveal cta-row cases-cta" style={{ marginTop: 'clamp(16px,3vw,32px)' }}>
            <h2>Хотите собрать такой же первый запуск?</h2>
            <Link className="btn btn-primary" href="/apply">
              Оставить заявку <Arrow />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
