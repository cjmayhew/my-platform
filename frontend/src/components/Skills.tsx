import { Code, Layers, Wrench } from 'lucide-react'
import { skills } from '../data/resume'
import ChipList from './ChipList'
import SectionHeading from './SectionHeading'

const groupIcons = [Code, Layers, Wrench]

function Skills() {
  return (
    <section className="section section--sand" aria-labelledby="skills">
      <div className="container">
        <SectionHeading id="skills" eyebrow="Toolbox" title="What I work with">
          Java is home base, but I'm comfortable across the stack.
        </SectionHeading>

        <div className="skills">
          {skills.map((group, index) => {
            const Icon = groupIcons[index % groupIcons.length]
            return (
              <article key={group.title} className={`card card--lift skill-card skill-card--${index}`}>
                <span className="icon-badge">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <h3>{group.title}</h3>
                <ChipList items={group.items} />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
