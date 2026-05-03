'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronRight, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { caseStudies, faq, features, galleryImages, pricingTiers, product, schedule, stats, trustSignals } from '@/data/content'

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-stars" />
        <div className="hero-bg-grid" />
        <div className="hero-content">
          <motion.span className="eyebrow hero-eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            {product.eyebrow}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 26, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.18, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            {product.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ delay: 0.5, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            {product.description}
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link className="button primary" href="/apply">
              Оставить заявку
              <ArrowRight size={16} />
            </Link>
            <Link className="button ghost" href="/program">
              Смотреть программу
              <ChevronRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            className="hero-proof"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.78 } },
            }}
          >
            {[product.startDate, product.seats, product.conversion].map((item) => (
              <motion.span
                key={item}
                variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Ключевые показатели">
        {stats.map((stat) => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section intro-section">
        <Reveal className="section-heading">
          <span className="eyebrow">Что внутри</span>
          <h2>Не курс про мотивацию. Рабочая сборка продукта, который можно продавать.</h2>
        </Reveal>
        <div className="feature-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Reveal className="feature-card" key={feature.title} delay={index * 0.09}>
                <Icon size={24} />
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="dark-band">
        <div className="dark-band-copy">
          <span className="eyebrow">Главная идея</span>
          <h2>Orbit превращает хаос экспертных знаний в управляемую систему запуска.</h2>
          <p>
            Каждый участник работает не с абстрактными лекциями, а со своим оффером, тарифами, лендингом, заявкой и продажами. В конце остается не папка с материалами, а готовый контур.
          </p>
          <div className="trust-grid">
            {trustSignals.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label}>
                  <Icon size={18} />
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="mission-panel">
          {schedule.map((item) => (
            <div key={item.label} className="schedule-row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section gallery-section">
        <Reveal className="section-heading compact">
          <span className="eyebrow">Процесс</span>
          <h2>Фокус на реальную работу: исследование, упаковка, контент, продажи.</h2>
        </Reveal>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} className={`gallery-item gallery-item-${index + 1}`} delay={index * 0.06}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section pricing-preview">
        <Reveal className="section-heading">
          <span className="eyebrow">Тарифы</span>
          <h2>Три уровня участия: от самостоятельной сборки до сопровождения запуска.</h2>
        </Reveal>
        <div className="pricing-grid">
          {pricingTiers.map((tier, idx) => (
            <Reveal className={`price-card ${tier.accent}`} key={tier.name} delay={idx * 0.1} y={26}>
              <div className="price-topline">
                <span>{tier.bestFor}</span>
                {tier.accent === 'hot' && <Sparkles size={18} />}
              </div>
              <h3>{tier.name}</h3>
              <strong>{tier.price}</strong>
              <p>{tier.note}</p>
              <ul>
                {tier.features.slice(0, 4).map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link className="button small" href={`/apply?tier=${tier.name.toLowerCase()}`}>
                Выбрать тариф
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section cases-preview">
        <Reveal className="section-heading compact">
          <span className="eyebrow">Доверие</span>
          <h2>Кейсы показывают не магию, а понятные изменения в упаковке и воронке.</h2>
        </Reveal>
        <div className="case-row">
          {caseStudies.slice(0, 2).map((study, idx) => (
            <Reveal key={study.name} delay={idx * 0.12}>
              <article className="case-card">
                <img src={study.image} alt={`${study.name}, ${study.role}`} loading="lazy" />
                <div>
                  <span>{study.result}</span>
                  <h3>{study.name}</h3>
                  <p>{study.quote}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <Reveal className="section-heading compact">
          <span className="eyebrow">FAQ</span>
          <h2>Коротко о том, что обычно спрашивают перед заявкой.</h2>
        </Reveal>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <ShieldCheck size={26} color="#41a1cf" />
        <h2>Заявка занимает 3 минуты. После нее вы увидите, какой формат участия подходит.</h2>
        <p>Никакой автосписания и настоящей оплаты в демо нет. Это качественный фронтенд-прототип заявочной воронки.</p>
        <Link className="button ghost" href="/apply" style={{ marginTop: '24px', display: 'inline-flex', width: 'auto' }}>
          Перейти к заявке
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  )
}
