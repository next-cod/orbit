'use client'
import { useRef, useState } from 'react'
import { faq } from '@/data/content'

export function Faq() {
  const [open, setOpen] = useState(-1)
  const [heights, setHeights] = useState<number[]>([])
  const bodyRefs = useRef<Array<HTMLDivElement | null>>([])

  const toggle = (i: number) => {
    const el = bodyRefs.current[i]
    if (el) {
      setHeights((prev) => {
        const next = [...prev]
        next[i] = el.scrollHeight
        return next
      })
    }
    setOpen((c) => (c === i ? -1 : i))
  }

  return (
    <div className="faq-list">
      {faq.map((item, i) => {
        const isOpen = open === i
        return (
          <div className={`faq-item${isOpen ? ' open' : ''}`} key={item.q}>
            <button
              type="button"
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => toggle(i)}
            >
              <span>{item.q}</span>
              <span className="ico" aria-hidden>
                +
              </span>
            </button>
            <div className="faq-body" style={{ maxHeight: isOpen ? heights[i] ?? 0 : 0 }}>
              <div ref={(el) => { bodyRefs.current[i] = el }}>
                <p>{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
