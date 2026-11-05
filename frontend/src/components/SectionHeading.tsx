import type { ReactNode } from 'react'

type SectionHeadingProps = {
  id: string
  eyebrow: string
  title: string
  children?: ReactNode
}

function SectionHeading({ id, eyebrow, title, children }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {children && <p>{children}</p>}
    </header>
  )
}

export default SectionHeading
