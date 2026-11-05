import { ArrowUpRight, Mail, Sprout } from 'lucide-react'
import { profile } from '../data/resume'
import Blob from './Blob'

function Contact() {
  return (
    <footer className="contact" aria-labelledby="contact">
      <div className="container container--narrow">
        <div className="contact__card">
          <Blob color="sand" shape={1} size="22rem" top="-8rem" right="-6rem" />
          <Blob color="clay" shape={3} size="16rem" bottom="-6rem" left="-4rem" />

          <div className="contact__content">
            <p className="eyebrow">Contact</p>
            <h2 id="contact">Let's grow something together.</h2>
            <p>
              I'm looking for software engineering opportunities. If you're
              building something interesting, I'd love to hear about it.
            </p>
            <div className="contact__actions">
              <a className="button button--light" href={`mailto:${profile.email}`}>
                <Mail size={18} aria-hidden="true" /> {profile.email}
              </a>
              <a
                className="button button--ghost-light"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <p className="contact__footer">
          <Sprout size={16} aria-hidden="true" />
          © {new Date().getFullYear()} {profile.name} · Built with React &amp; TypeScript
        </p>
      </div>
    </footer>
  )
}

export default Contact
