import { Award, WavesHorizontal } from 'lucide-react'
import { achievements } from '../data/resume'
import SectionHeading from './SectionHeading'

const groups = [
  { title: 'In the classroom', icon: Award, items: achievements.academic },
  { title: 'In the pool', icon: WavesHorizontal, items: achievements.athletic },
]

function Achievements() {
  return (
    <section className="section" aria-labelledby="achievements">
      <div className="container container--narrow">
        <SectionHeading id="achievements" eyebrow="Achievements" title="Steady growth, season after season" />

        <div className="achievements">
          {groups.map((group) => {
            const Icon = group.icon
            return (
              <article key={group.title} className="card achievement-card">
                <span className="icon-badge">
                  <Icon size={28} aria-hidden="true" />
                </span>
                <h3>{group.title}</h3>
                <ul className="achievement-card__list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Achievements
