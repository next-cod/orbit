import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  text: string
  children?: ReactNode
}

export function PageHeader({ title, text, children }: PageHeaderProps) {
  return (
    <section className="page-head">
      <div className="wrap">
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
    </section>
  )
}
