import { GraduationCap, MapPin } from 'lucide-react'
import { education, profile, stats } from '../data/resume'
import ChipList from './ChipList'
import SectionHeading from './SectionHeading'

function About() {
  return (
    <section className="section section--stone" aria-labelledby="about">
      <div className="container">
        <ul className="stats" aria-label="Quick facts">
          {stats.map((stat) => (
            <li key={stat.label} className="stat">
              <span className="stat__value">{stat.value}</span>
              <span className="stat__label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <div className="about">
          <div>
            <SectionHeading id="about" eyebrow="About me" title="Rooted in curiosity" />
            <p className="about__body">{profile.about}</p>
          </div>

          <article className="card education">
            <div className="education__header">
              <span className="icon-badge">
                <GraduationCap size={28} aria-hidden="true" />
              </span>
              <div>
                <h3>{education.school}</h3>
                <p className="muted">
                  <MapPin size={14} aria-hidden="true" /> {education.location}
                </p>
              </div>
            </div>

            <p className="education__degree">
              {education.degree}
              <span className="muted"> · {education.note}</span>
            </p>
            <p className="muted">{education.graduation}</p>

            <h4 className="education__label">Minors</h4>
            <ChipList items={education.minors} />
          </article>
        </div>
      </div>
    </section>
  )
}

export default About
