'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { useSearchParams } from 'next/navigation'
import { Arrow } from '@/components/ui/icons'
import { audienceOptions, tariffs } from '@/data/content'

type FormState = {
  name: string
  email: string
  telegram: string
  audience: string
  niche: string
  tariff: string
  goal: string
  consent: boolean
}

const emptyForm: FormState = {
  name: '',
  email: '',
  telegram: '',
  audience: '',
  niche: '',
  tariff: '',
  goal: '',
  consent: false,
}

export function ApplyForm() {
  const params = useSearchParams()
  const presetTier = useMemo(() => {
    const t = params.get('tier')
    return tariffs.find((x) => x.id === t)?.id ?? ''
  }, [params])

  const [form, setForm] = useState<FormState>({ ...emptyForm, tariff: presetTier })
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})
  const [submitted, setSubmitted] = useState(false)
  const [audienceOpen, setAudienceOpen] = useState(false)

  const setField = (key: keyof FormState, value: string | boolean) => {
    setForm((c) => ({ ...c, [key]: value }))
    setErrors((c) => ({ ...c, [key]: '' }))
  }

  const validate = () => {
    const e: Partial<Record<keyof FormState, string>> = {}
    if (!form.name.trim()) e.name = 'Укажите имя'
    if (!form.email.trim()) e.email = 'Укажите email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e.email = 'Проверьте формат email'
    if (!form.audience) e.audience = 'Выберите размер аудитории'
    if (!form.niche.trim()) e.niche = 'Опишите нишу и экспертизу'
    if (!form.tariff) e.tariff = 'Выберите тариф'
    if (!form.consent) e.consent = 'Нужно согласие на обработку данных'
    return e
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const e = validate()
    if (Object.keys(e).length) {
      setErrors(e)
      return
    }
    setErrors({})
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const reset = () => {
    setSubmitted(false)
    setForm({ ...emptyForm })
    setErrors({})
  }

  if (submitted) {
    return (
      <div className="apply-success" role="status">
        <span className="ok">
          <Image src="/check-purple.png" alt="" width={32} height={32} />
        </span>
        <h2>Заявка отправлена</h2>
        <p>
          Спасибо! Форма подобрала формат под вашу задачу. Дальше куратор посмотрит заявку и предложит
          короткий созвон – обычно отвечаем в течение одного рабочего дня.
        </p>
        <div className="actions">
          <Link className="btn btn-primary" href="/">
            На главную
          </Link>
          <button type="button" className="btn-soft" onClick={reset}>
            Отправить ещё одну
          </button>
        </div>
      </div>
    )
  }

  return (
    <form className="apply-form" onSubmit={submit} noValidate>
      <div className="field-pair">
        <div className="field">
          <label htmlFor="f-name">Имя</label>
          <input
            id="f-name"
            className={`inp${errors.name ? ' err' : ''}`}
            value={form.name}
            onChange={(e) => setField('name', e.target.value)}
            placeholder="Как к вам обращаться"
          />
          {errors.name && <div className="err-msg">{errors.name}</div>}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input
            id="f-email"
            className={`inp${errors.email ? ' err' : ''}`}
            value={form.email}
            onChange={(e) => setField('email', e.target.value)}
            placeholder="you@example.com"
          />
          {errors.email && <div className="err-msg">{errors.email}</div>}
        </div>
      </div>

      <div className="field-pair">
        <div className="field">
          <label htmlFor="f-tg">
            Telegram <span className="opt">– необязательно</span>
          </label>
          <input
            id="f-tg"
            className="inp"
            value={form.telegram}
            onChange={(e) => setField('telegram', e.target.value)}
            placeholder="@username"
          />
        </div>
        <div className="field">
          <span className="lab">Размер аудитории</span>
          <div className="select-wrap">
            <button
              type="button"
              className={`select-trigger${audienceOpen ? ' open' : ''}${errors.audience ? ' err' : ''}`}
              onClick={() => setAudienceOpen((v) => !v)}
              aria-haspopup="listbox"
              aria-expanded={audienceOpen}
            >
              <span className={`val${form.audience ? '' : ' placeholder'}`}>
                {form.audience || 'Выберите…'}
              </span>
              <svg className="chev" width="13" height="8" viewBox="0 0 13 8" fill="none">
                <path
                  d="M1.5 1.75 6.5 6.25 11.5 1.75"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {audienceOpen && (
              <>
                <div className="select-scrim" onClick={() => setAudienceOpen(false)} />
                <div className="select-panel" role="listbox">
                  {audienceOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      role="option"
                      aria-selected={form.audience === opt}
                      className={`select-opt${form.audience === opt ? ' sel' : ''}`}
                      onClick={() => {
                        setField('audience', opt)
                        setAudienceOpen(false)
                      }}
                    >
                      <span>{opt}</span>
                      {form.audience === opt && (
                        <Image src="/check-purple.png" alt="" width={14} height={14} />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
          {errors.audience && <div className="err-msg">{errors.audience}</div>}
        </div>
      </div>

      <div className="field">
        <label htmlFor="f-niche">Ниша и экспертиза</label>
        <input
          id="f-niche"
          className={`inp${errors.niche ? ' err' : ''}`}
          value={form.niche}
          onChange={(e) => setField('niche', e.target.value)}
          placeholder="Например: B2B-продажи, корпоративное обучение, дизайн"
        />
        {errors.niche && <div className="err-msg">{errors.niche}</div>}
      </div>

      <div className="field">
        <span className="lab">Какой тариф интересен</span>
        <div className="tariff-pick">
          {tariffs.map((t) => (
            <button
              type="button"
              key={t.id}
              className={`tariff-opt${form.tariff === t.id ? ' sel' : ''}`}
              onClick={() => setField('tariff', t.id)}
            >
              <div className="t-name">{t.name}</div>
              <div className="t-price">{t.price}</div>
            </button>
          ))}
        </div>
        {errors.tariff && <div className="err-msg" style={{ marginTop: 8 }}>{errors.tariff}</div>}
      </div>

      <div className="field">
        <label htmlFor="f-goal">
          Что хотите запустить <span className="opt">– необязательно</span>
        </label>
        <textarea
          id="f-goal"
          className="inp"
          rows={3}
          value={form.goal}
          onChange={(e) => setField('goal', e.target.value)}
          placeholder="Пара предложений о продукте и цели запуска"
        />
      </div>

      <label className="consent">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setField('consent', e.target.checked)}
        />
        <span>Согласен на обработку персональных данных и получение ответа по заявке.</span>
      </label>
      {errors.consent && <div className="err-msg" style={{ marginTop: -10 }}>{errors.consent}</div>}

      <div>
        <button type="submit" className="submit-btn">
          Отправить заявку <Arrow />
        </button>
        <p className="submit-note">Ответим в течение одного рабочего дня</p>
      </div>
    </form>
  )
}
