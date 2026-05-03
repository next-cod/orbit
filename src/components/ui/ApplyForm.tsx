'use client'
import { CheckCircle2, Loader2, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { pricingTiers } from '@/data/content'

type FormState = {
  name: string
  email: string
  telegram: string
  niche: string
  audience: string
  tier: string
  goal: string
  budget: boolean
}

const initialState: FormState = {
  name: '',
  email: '',
  telegram: '',
  niche: '',
  audience: 'До 1 000',
  tier: 'Studio',
  goal: '',
  budget: false,
}

export function ApplyForm() {
  const params = useSearchParams()
  const selectedTier = params.get('tier')
  const defaultTier = useMemo(() => {
    const found = pricingTiers.find((t) => t.name.toLowerCase() === selectedTier)
    return found?.name ?? initialState.tier
  }, [selectedTier])

  const [form, setForm] = useState<FormState>({ ...initialState, tier: defaultTier })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const update = (key: keyof FormState, value: string | boolean) => {
    setForm((c) => ({ ...c, [key]: value }))
    setErrors((c) => ({ ...c, [key]: undefined }))
  }

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (form.name.trim().length < 2) e.name = 'Укажите имя, чтобы мы понимали, как к вам обращаться.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Введите рабочий email.'
    if (form.niche.trim().length < 8) e.niche = 'Коротко опишите нишу и вашу экспертизу.'
    if (form.goal.trim().length < 20) e.goal = 'Напишите, какой продукт хотите запустить и какой результат важен.'
    if (!form.budget) e.budget = 'Подтвердите, что понимаете формат заявки без оплаты.'
    return e
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return
    setStatus('loading')
    window.setTimeout(() => setStatus('success'), 800)
  }

  return (
    <form className="apply-form" onSubmit={submit} noValidate>
      {status === 'success' ? (
        <div className="success-state" role="status">
          <CheckCircle2 size={40} />
          <h2>Заявка собрана</h2>
          <p>В демо данные никуда не отправлены. В реальной версии здесь будет подтверждение, письмо и запись в CRM.</p>
          <button type="button" className="button primary" onClick={() => setStatus('idle')}>
            Заполнить заново
          </button>
        </div>
      ) : (
        <>
          <div className="form-row two">
            <label>
              Имя
              <input value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Например, Дима" />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>
            <label>
              Email
              <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="name@company.ru" />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </label>
          </div>

          <div className="form-row two">
            <label>
              Telegram
              <input value={form.telegram} onChange={(e) => update('telegram', e.target.value)} placeholder="@username" />
            </label>
            <label>
              Размер аудитории
              <select value={form.audience} onChange={(e) => update('audience', e.target.value)}>
                <option>До 1 000</option>
                <option>1 000 - 5 000</option>
                <option>5 000 - 20 000</option>
                <option>20 000+</option>
              </select>
            </label>
          </div>

          <label>
            Ниша и экспертиза
            <input value={form.niche} onChange={(e) => update('niche', e.target.value)} placeholder="Например: HR-консалтинг для IT-команд" />
            {errors.niche && <span className="field-error">{errors.niche}</span>}
          </label>

          <label>
            Предпочтительный тариф
            <div className="segmented-control" role="radiogroup" aria-label="Выбор тарифа">
              {pricingTiers.map((tier) => (
                <button
                  key={tier.name}
                  type="button"
                  className={form.tier === tier.name ? 'selected' : ''}
                  onClick={() => update('tier', tier.name)}
                  aria-pressed={form.tier === tier.name}
                >
                  {tier.name}
                </button>
              ))}
            </div>
          </label>

          <label>
            Что хотите запустить
            <textarea value={form.goal} onChange={(e) => update('goal', e.target.value)} placeholder="Опишите идею продукта, желаемый результат, дедлайн и что уже есть." rows={6} />
            {errors.goal && <span className="field-error">{errors.goal}</span>}
          </label>

          <label className="checkbox-line">
            <input type="checkbox" checked={form.budget} onChange={(e) => update('budget', e.target.checked)} />
            <span>Я понимаю, что это заявка на обучение, а не мгновенная оплата. Финальные условия обсуждаются после отбора.</span>
          </label>
          {errors.budget && <span className="field-error">{errors.budget}</span>}

          <button className="button primary submit-button" type="submit" disabled={status === 'loading'}>
            {status === 'loading' ? <Loader2 className="spin" size={16} /> : <Send size={16} />}
            Отправить заявку
          </button>
        </>
      )}
    </form>
  )
}
