type PageHeaderProps = {
  eyebrow: string
  title: string
  text: string
}

export function PageHeader({ eyebrow, title, text }: PageHeaderProps) {
  return (
    <section className="page-header">
      <span className="eyebrow">{eyebrow}</span>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  )
}
