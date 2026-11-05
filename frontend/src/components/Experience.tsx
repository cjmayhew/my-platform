import { Calendar, MapPin } from 'lucide-react'
import { experience } from '../data/resume'
import Blob from './Blob'
import SectionHeading from './SectionHeading'

function Experience() {
  return (
    <section className="section" aria-labelledby="experience">
      <Blob color="clay" shape={3} size="26rem" top="20%" right="-14rem" />

      <div className="container container--narrow">
        <SectionHeading id="experience" eyebrow="Experience" title="Where I've put down roots">
          From production Rails code to donor databases to the pool deck.
        </SectionHeading>

        <div className="timeline">
          {/* A hand-drawn-looking wavy line that runs behind the cards */}
          <svg
            className="timeline__path"
            viewBox="0 0 40 400"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M20 0 C 36 50, 4 100, 20 150 S 36 250, 20 300 S 4 380, 20 400"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <ol className="timeline__list">
            {experience.map((job, index) => {
              const Icon = job.icon
              return (
                <li key={job.org} className="timeline__item">
                  <span className="timeline__dot icon-badge" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <article className={`card card--lift job job--shape-${index % 4}`}>
                    <header className="job__header">
                      <div>
                        <h3>{job.role}</h3>
                        <p className="job__org">{job.org}</p>
                      </div>
                      <div className="job__meta">
                        <span>
                          <Calendar size={14} aria-hidden="true" /> {job.dates}
                        </span>
                        <span>
                          <MapPin size={14} aria-hidden="true" /> {job.location}
                        </span>
                      </div>
                    </header>
                    <ul className="job__highlights">
                      {job.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Experience
