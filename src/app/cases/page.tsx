import { TrendingUp } from 'lucide-react'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { caseStudies } from '@/data/content'

export const metadata = {
  title: 'Кейсы — Orbit Method',
  description: 'Результаты выглядят сильнее, когда продукт становится понятным.',
}

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Кейсы"
        title="Результаты выглядят сильнее, когда продукт становится понятным."
        text="Это вымышленные, но реалистичные кейсы для демонстрации сайта: в реальном проекте их нужно заменить подтвержденными историями клиентов."
      />

      <section className="section case-study-grid">
        {caseStudies.map((study, index) => (
          <Reveal key={study.name} delay={index * 0.05}>
            <article className="case-study">
              <img src={study.image} alt={`${study.name}, ${study.role}`} />
              <div>
                <span className="case-role">{study.role}</span>
                <h2>{study.name}</h2>
                <p>{study.quote}</p>
                <div className="case-metrics">
                  <div>
                    <TrendingUp size={16} />
                    <strong>{study.result}</strong>
                  </div>
                  <div>
                    <TrendingUp size={16} />
                    <strong>{study.metric}</strong>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
    </>
  )
}
