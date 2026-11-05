import { CalendarCheck, GitPullRequest, Layers, Users } from 'lucide-react'
import { projects } from '../data/resume'
import Blob from './Blob'
import ChipList from './ChipList'
import SectionHeading from './SectionHeading'

// One icon per highlight, in order, for the featured project.
const highlightIcons = [Layers, CalendarCheck, GitPullRequest]

function Projects() {
  return (
    <section className="section section--moss" aria-labelledby="projects">
      <Blob color="sand" shape={4} size="30rem" top="-12rem" left="-10rem" />
      <Blob color="clay" shape={2} size="20rem" bottom="-8rem" right="-4rem" />

      <div className="container">
        <SectionHeading id="projects" eyebrow="Featured project" title="Built with a team">
          Leading people is part of shipping software.
        </SectionHeading>

        {projects.map((project) => (
          <article key={project.name} className="project">
            <div className="project__intro">
              <p className="project__role">
                <Users size={18} aria-hidden="true" /> {project.role}
              </p>
              <h3>{project.name}</h3>
              <ChipList items={project.stack} onMoss />
            </div>

            <ul className="project__highlights">
              {project.highlights.map((highlight, index) => {
                const Icon = highlightIcons[index % highlightIcons.length]
                return (
                  <li key={highlight} className="project__highlight">
                    <span className="project__icon" aria-hidden="true">
                      <Icon size={24} />
                    </span>
                    <p>{highlight}</p>
                  </li>
                )
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
