'use client'
import { useState } from 'react'
import { faq } from '@/data/content'

export function Faq() {
  const [open, setOpen] = useState(-1)
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
              onClick={() => setOpen((c) => (c === i ? -1 : i))}
            >
              <span>{item.q}</span>
              <span className="ico" aria-hidden>
                +
              </span>
            </button>
            <div className="faq-body">
              <p>{item.a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
