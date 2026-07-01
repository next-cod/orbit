import Image from 'next/image'
import Link from 'next/link'
import { Arrow } from '@/components/ui/icons'
import { modules, ritm } from '@/data/content'

export const metadata = {
  title: 'Программа – Orbit Method',
  description: 'Восемь недель – восемь артефактов: от угла и оффера до лендинга, продаж и запуска.',
}

export default function ProgramPage() {
  return (
    <div className="page-in">
      <section className="page-head">
        <div className="wrap">
          <div className="row2">
            <div>
              <h1>Восемь недель – восемь артефактов</h1>
              <p>
                Каждую неделю вы собираете конкретный результат: от угла и оффера до лендинга, продаж
                и запуска потока. Ничего лишнего – только то, что нужно для первого понятного запуска.
              </p>
              <div className="chips">
                <span className="tag solid">8 модулей</span>
                <span className="tag soft">5–7 часов в неделю</span>
                <span className="tag soft">1:1 ревью упаковки</span>
              </div>
            </div>
            <div className="reveal media-card">
              <Image
                src="/gallery-3.png"
                alt="Работа над запуском"
                width={1672}
                height={941}
                sizes="(max-width: 960px) 100vw, 580px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-canvas" style={{ paddingTop: 'clamp(56px,7vw,92px)' }}>
        <div className="wrap">
          <div className="mod-layout">
            <div className="mod-list">
              {modules.map((m, i) => (
                <div className="reveal mod-card" data-delay={Math.min(i, 4) * 80} key={m.num}>
                  <div className="top">
                    <span className="mod-num">{m.num}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div className="mod-name">{m.name}</div>
                      <div className="mod-result">
                        <span className="k">Результат</span>
                        <span className="v">{m.result}</span>
                      </div>
                      <div className="mod-points">
                        {m.points.map((pt) => (
                          <span className="mod-point" key={pt}>
                            <Image src="/check-purple.png" alt="" width={12} height={12} />
                            {pt}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="side-card">
              <h2>Ритм без перегруза</h2>
              <div className="side-list">
                {ritm.map((r) => (
                  <div className="item" key={r.label}>
                    <div className="k">{r.label}</div>
                    <div className="v">{r.value}</div>
                    <div className="n">{r.note}</div>
                  </div>
                ))}
              </div>
              <Link className="btn btn-primary side-cta" href="/apply">
                Подать заявку <Arrow />
              </Link>
              <p className="side-note">Старт после набора группы. Бриф – 12 минут.</p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  )
}
