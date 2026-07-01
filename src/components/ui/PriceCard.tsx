import Image from 'next/image'
import Link from 'next/link'
import type { Tariff } from '@/data/content'

export function PriceCard({ tier, delay = 0 }: { tier: Tariff; delay?: number }) {
  const check = tier.featured ? '/check-white.png' : '/check-purple.png'
  return (
    <div
      className={`reveal lift price-card${tier.featured ? ' featured' : ''}`}
      data-delay={delay}
    >
      {tier.featured && <span className="price-badge">Рекомендуем</span>}
      <div className="price-name">{tier.name}</div>
      <div className="price-amount">{tier.price}</div>
      <div className="price-for">{tier.for}</div>
      <div className="price-divider" />
      <div className="price-feats">
        {tier.features.map((f) => (
          <div className="feat" key={f}>
            <span className="chk">
              <Image src={check} alt="" width={12} height={12} />
            </span>
            <span>{f}</span>
          </div>
        ))}
      </div>
      <Link className="price-cta" href={`/apply?tier=${tier.id}`}>
        Выбрать {tier.name}
      </Link>
    </div>
  )
}
