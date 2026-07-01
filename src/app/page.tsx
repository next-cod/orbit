import Image from 'next/image'
import Link from 'next/link'
import { Arrow } from '@/components/ui/icons'
import { Faq } from '@/components/ui/Faq'
import { PriceCard } from '@/components/ui/PriceCard'
import { cases, methodStages, product, routeSteps, systemPoints, tariffs } from '@/data/content'

export default function HomePage() {
  return (
    <div className="page-in">
      {/* Hero */}
      <section className="hero">
        <div className="hero-orb a" data-parallax="0.05" />
        <div className="hero-orb b" data-parallax="0.09" />
        <div className="hero-orb c" data-parallax="0.03" />
        <div className="hero-inner">
          <h1>
            Упакуйте
            <br />
            экспертность
            <br />
            в&nbsp;продукт
          </h1>
          <p className="hero-sub">{product.description}</p>
          <div className="hero-actions">
            <Link className="btn btn-white" href="/apply">
              Оставить заявку <Arrow />
            </Link>
            <Link className="btn btn-ghost" href="/program">
              Смотреть программу <Arrow size={15} />
            </Link>
          </div>
          <div className="hero-trust">8 недель&nbsp;· 42 шаблона&nbsp;· 1:1 ревью упаковки</div>
        </div>
      </section>

      {/* Route card */}
      <section className="sec-white">
        <div className="wrap">
          <div className="route-card">
            <div className="route-card-head">
              <h2>Четыре шага от идеи до первого потока</h2>
              <span className="chip-weeks">8 недель</span>
            </div>
            <div className="route-grid">
              <span className="route-line" />
              {routeSteps.map((step, i) => (
                <div className="reveal route-step" data-delay={i * 80} key={step.n}>
                  <span>{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="center-head">
            <h2 className="reveal section-title">Запуск как производственная система</h2>
            <p className="reveal section-lead" data-delay={80} style={{ marginTop: 18 }}>
              Orbit собирает запуск как производственную систему – на каждой неделе появляется
              артефакт, который можно проверить, показать и использовать в продаже.
            </p>
          </div>
          <div className="stage-grid">
            {methodStages.map((m, i) => (
              <div className="reveal lift stage-card" data-delay={i * 80} key={m.key}>
                <div className="n">{'0' + (i + 1)}</div>
                <h3>{m.key}</h3>
                <div className="sub">{m.sub}</div>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="reveal method-banner">
            <Image
              src="/gallery-2.png"
              alt="Еженедельный разбор упаковки и лендинга"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="shade" />
            <span className="tag">Каждую неделю – живой разбор: оффер, лендинг, тарифы</span>
          </div>
        </div>
      </section>

      {/* System */}
      <section className="sec sec-canvas">
        <div className="wrap">
          <div className="row2">
            <div className="reveal media-card">
              <Image
                src="/gallery-1.png"
                alt="Команда собирает запуск в одной системе"
                width={1448}
                height={1086}
                sizes="(max-width: 960px) 100vw, 580px"
              />
            </div>
            <div>
              <h2 className="reveal section-title">Продукт, страница и заявки – в одной системе</h2>
              <div className="point-list">
                {systemPoints.map((p, i) => (
                  <div className="reveal point" data-delay={i * 80} key={p.title}>
                    <span className="ico">✦</span>
                    <div>
                      <h3>{p.title}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases preview */}
      <section className="sec sec-white">
        <div className="wrap">
          <div className="head-row">
            <h2 className="reveal section-title">Первые запуски выпускников</h2>
            <Link className="btn-link" href="/cases">
              Все кейсы <Arrow />
            </Link>
          </div>
          <div className="cases-grid">
            {cases.map((c, i) => (
              <Link className="reveal case-card" data-delay={i * 80} href="/cases" key={c.id}>
                <div className="photo">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    sizes="(max-width: 960px) 100vw, 380px"
                  />
                </div>
                <div className="body">
                  <div className="name">{c.name}</div>
                  <div className="role">{c.role}</div>
                  <p className="short">«{c.short}»</p>
                  <div className="tag-row">
                    <span className="tag solid">{c.tag1}</span>
                    <span className="tag soft">{c.tag2}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing preview */}
      <section className="sec sec-canvas">
        <div className="wrap">
          <div className="center-head">
            <h2 className="reveal section-title">Три формата запуска</h2>
            <p className="reveal section-lead" data-delay={80} style={{ marginTop: 16 }}>
              Выберите глубину поддержки – от самостоятельной сборки до личного launch-room.
            </p>
          </div>
          <div className="pricing-grid">
            {tariffs.map((t, i) => (
              <PriceCard tier={t} delay={i * 80} key={t.id} />
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 28 }}>
            <Link className="btn-link" href="/pricing">
              Сравнить форматы подробнее <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec-white">
        <div className="wrap-narrow">
          <div className="center-head">
            <h2 className="reveal section-title">Коротко о главном</h2>
          </div>
          <Faq />
        </div>
      </section>
    </div>
  )
}
