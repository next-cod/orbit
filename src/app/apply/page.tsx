import { Suspense } from 'react'
import { PageHeader } from '@/components/ui/PageHeader'
import { ApplyForm } from '@/components/ui/ApplyForm'

export const metadata = {
  title: 'Заявка — Orbit Method',
  description: 'Расскажите о продукте. Мы покажем, какой формат участия логичнее.',
}

export default function ApplyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Заявка"
        title="Расскажите о продукте. Мы покажем, какой формат участия логичнее."
        text="Форма не отправляет данные на сервер: это фронтенд-прототип. В реальном проекте сюда подключается CRM, email-уведомление и аналитика."
      />
      <section className="section apply-layout">
        <Suspense fallback={<div className="route-loader">Загрузка</div>}>
          <ApplyForm />
        </Suspense>
        <aside className="apply-aside">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
          <h2>Что будет после заявки</h2>
          <ol>
            <li>Система показывает рекомендуемый тариф и вопросы для созвона.</li>
            <li>Куратор проверяет, подходит ли формат под вашу задачу.</li>
            <li>После созвона можно подключить оплату, договор и CRM.</li>
          </ol>
          <p>Сейчас это честный frontend: форма, валидация, состояния и UX готовы, backend не подключен.</p>
        </aside>
      </section>
    </>
  )
}
