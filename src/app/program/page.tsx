import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { curriculum, operations } from '@/data/content'

export const metadata = {
  title: 'Программа — Orbit Method',
  description: '8 недель, где каждый модуль двигает ваш продукт к продаже.',
}

export default function ProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="Программа"
        title="8 недель, где каждый модуль двигает ваш продукт к продаже."
        text="Программа построена как производственный цикл: исследование, оффер, методика, контент, лендинг, продажи, запуск и масштабирование."
      />

      <section className="section program-layout">
        <div className="timeline">
          {curriculum.map((module, index) => {
            const Icon = module.icon
            return (
              <Reveal className="module-card" key={module.week} delay={Math.min(index * 0.03, 0.18)}>
                <div className="module-week">{module.week}</div>
                <div className="module-body">
                  <Icon size={20} color="var(--color-cofounder-blue)" />
                  <h2>{module.title}</h2>
                  <p>{module.outcome}</p>
                  <ul>
                    {module.lessons.map((lesson) => (
                      <li key={lesson}>
                        <CheckCircle2 size={14} />
                        {lesson}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        <aside className="sticky-panel">
          <span className="eyebrow">Ритм участия</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '22px', letterSpacing: '-0.01em', color: '#fff', marginTop: '12px' }}>
            Без перегруза, но с жесткой структурой результата.
          </h2>
          <p>Каждую неделю вы закрываете один конкретный артефакт: карту сегмента, оффер, модуль, лендинг, скрипт, календарь запуска.</p>
          <div className="operation-list">
            {operations.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title}>
                  <Icon size={16} />
                  <span>{item.title}</span>
                  <strong style={{ color: 'var(--color-action-azure)', fontSize: '13px' }}>{item.value}</strong>
                </div>
              )
            })}
          </div>
          <Link className="button outlined full" href="/apply">
            Подать заявку
            <ArrowRight size={16} />
          </Link>
        </aside>
      </section>
    </>
  )
}
