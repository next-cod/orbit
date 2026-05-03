import { Check, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { pricingTiers } from '@/data/content'

export const metadata = {
  title: 'Тарифы — Orbit Method',
  description: 'Выберите глубину сопровождения под зрелость продукта и аудитории.',
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Тарифы"
        title="Выберите глубину сопровождения под зрелость продукта и аудитории."
        text="Все тарифы дают готовую структуру продукта и запуска. Разница в количестве личного сопровождения, ревью и операционной помощи."
      />

      <section className="section pricing-page-grid">
        {pricingTiers.map((tier, idx) => (
          <Reveal className={`price-card large ${tier.accent}`} key={tier.name} delay={idx * 0.08} y={20}>
            <div className="price-topline">
              <span>{tier.bestFor}</span>
            </div>
            <h2>{tier.name}</h2>
            <strong>{tier.price}</strong>
            <p>{tier.note}</p>
            <ul>
              {tier.features.map((feature) => (
                <li key={feature}>
                  <Check size={14} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link className="button outlined full" href={`/apply?tier=${tier.name.toLowerCase()}`}>
              Оставить заявку на {tier.name}
            </Link>
          </Reveal>
        ))}
      </section>

      <section className="section compare-section">
        <div className="section-heading compact">
          <span className="eyebrow">Как выбрать</span>
          <h2>Если сомневаетесь, форма заявки подскажет рекомендуемый формат.</h2>
        </div>
        <div className="compare-grid">
          {[
            { name: 'Core', text: 'Подходит, если у вас есть время самому писать, собирать лендинг и делать первые продажи.' },
            { name: 'Studio', text: 'Лучший баланс: вы делаете продукт, а мы проверяем ключевые решения до запуска.' },
            { name: 'Partner', text: 'Для запуска с высокой ставкой, где важны стратегия, скорость и контроль деталей.' },
          ].map((item, idx) => (
            <Reveal key={item.name} delay={idx * 0.08}>
              <div>
                <HelpCircle size={20} color="var(--color-cofounder-blue)" />
                <h3>{item.name}</h3>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
