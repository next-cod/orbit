'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const NBSP = ' '

function formatCount(value: number, dec: number) {
  let s = value.toFixed(dec)
  if (dec > 0) s = s.replace('.', ',')
  const parts = s.split(',')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, NBSP)
  return parts.join(',')
}

/**
 * Client-side scroll effects that mirror the design export runtime:
 * reveal-on-scroll, animated count-up numbers and light parallax.
 * Mounted once in the root layout; re-scans on route change.
 *
 * Element lists are queried once per page and all scroll-driven work is
 * batched into a single requestAnimationFrame so fast/trackpad scrolling
 * on slower devices doesn't re-run DOM work on every raw scroll event.
 */
export function ScrollFX() {
  const pathname = usePathname()

  useEffect(() => {
    const reduce =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const animateCount = (el: HTMLElement) => {
      if (el.dataset.counted === 'done') return
      el.dataset.counted = 'done'
      const target = parseFloat(el.getAttribute('data-count') || '0') || 0
      const dec = parseInt(el.getAttribute('data-dec') || '0', 10)
      if (reduce) {
        el.textContent = formatCount(target, dec)
        return
      }
      const dur = 1300
      const t0 = performance.now()
      const tick = (now: number) => {
        let p = Math.min(1, (now - t0) / dur)
        p = 1 - Math.pow(1 - p, 3)
        el.textContent = formatCount(target * p, dec)
        if (p < 1) requestAnimationFrame(tick)
        else el.textContent = formatCount(target, dec)
      }
      requestAnimationFrame(tick)
    }

    let revealEls: HTMLElement[] = []
    let countEls: HTMLElement[] = []
    let parallaxEls: HTMLElement[] = []
    const refreshTargets = () => {
      revealEls = Array.from(document.querySelectorAll<HTMLElement>('.reveal'))
      countEls = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'))
      parallaxEls = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'))
    }

    const scan = () => {
      const trig = (window.innerHeight || 800) * 0.93
      for (const el of revealEls) {
        if (el.dataset.shown === '1') continue
        const r = el.getBoundingClientRect()
        if (r.top < trig && r.bottom > -40) {
          const d = el.getAttribute('data-delay')
          if (d) el.style.transitionDelay = `${d}ms`
          el.dataset.shown = '1'
        }
      }
      for (const el of countEls) {
        if (el.dataset.counted) continue
        const r = el.getBoundingClientRect()
        if (r.top < trig && r.bottom > -40) animateCount(el)
      }
    }

    const applyParallax = () => {
      const y = window.scrollY || 0
      for (const el of parallaxEls) {
        const s = parseFloat(el.getAttribute('data-parallax') || '0') || 0
        el.style.transform = `translate3d(0, ${(y * s).toFixed(1)}px, 0)`
      }
    }

    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        scan()
        applyParallax()
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    refreshTargets()
    scan()
    const t1 = window.setTimeout(() => {
      refreshTargets()
      scan()
    }, 90)
    const t2 = window.setTimeout(scan, 400)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [pathname])

  return null
}
