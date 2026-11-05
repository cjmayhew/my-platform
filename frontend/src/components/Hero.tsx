import { ArrowUpRight, GraduationCap, Trophy } from 'lucide-react'
import profilePhoto from '../assets/profile.jpg'
import { education, profile } from '../data/resume'
import Blob from './Blob'

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <Blob color="sand" shape={1} size="38rem" top="-10rem" right="-8rem" />
      <Blob color="moss" shape={2} size="22rem" bottom="-6rem" left="-8rem" />

      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow">
            <GraduationCap size={18} aria-hidden="true" />
            {profile.headline}
          </p>
          <h1 id="hero-title">
            Hi, I'm {profile.firstName}.
            <span className="hero__subtitle">
              I grow software from the ground up.
            </span>
          </h1>
          <p className="hero__tagline">{profile.tagline}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#experience">
              See my work
            </a>
            <a className="button button--outline" href="#contact">
              Get in touch <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-backdrop" aria-hidden="true" />
          <img
            className="hero__photo"
            src={profilePhoto}
            alt={`Portrait of ${profile.name}`}
            width={600}
            height={600}
          />
          <div className="hero__badge hero__badge--top card">
            <span className="hero__badge-icon">
              <GraduationCap size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>{education.gpa} GPA</strong>
              <small>Class of 2027</small>
            </span>
          </div>
          <div className="hero__badge hero__badge--bottom card">
            <span className="hero__badge-icon hero__badge-icon--clay">
              <Trophy size={20} aria-hidden="true" />
            </span>
            <span>
              <strong>PAC Champion</strong>
              <small>1650 yd freestyle</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
