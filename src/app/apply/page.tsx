import { Suspense } from 'react'
import { ApplyForm } from '@/components/ui/ApplyForm'
import { afterSteps } from '@/data/content'

export const metadata = {
  title: 'Заявка – Orbit Method',
  description: 'Расскажите о себе и задаче – подберём формат и покажем маршрут под вашу нишу.',
}

export default function ApplyPage() {
  return (
    <div className="page-in">
      <section className="page-head">
        <div className="wrap">
          <h1 style={{ maxWidth: '20ch' }}>Оставьте заявку на программу</h1>
          <p>Расскажите о себе и задаче – подберём формат и покажем маршрут под вашу нишу.</p>
        </div>
      </section>

      <section className="sec-canvas" style={{ padding: 'clamp(36px,5vw,60px) 0 clamp(72px,9vw,108px)' }}>
        <div className="wrap">
          <div className="apply-layout">
            <Suspense fallback={<div style={{ minHeight: 360 }} />}>
              <ApplyForm />
            </Suspense>

            <aside className="apply-aside">
              <div className="card">
                <h2>Что будет после заявки</h2>
                <div className="after-steps">
                  <span className="line" />
                  {afterSteps.map((a) => (
                    <div className="after-step" key={a.n}>
                      <span className="n">{a.n}</span>
                      <div>
                        <div className="t">{a.title}</div>
                        <div className="d">{a.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="apply-note-card">
                <p>
                  Оплата, договор и доступ к программе оформляются после короткого созвона с куратором.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
