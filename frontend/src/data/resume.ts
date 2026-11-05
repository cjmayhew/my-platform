import {
  BriefcaseBusiness,
  Database,
  Users,
  Sandwich,
  type LucideIcon,
} from 'lucide-react'

// All resume content lives here so the components only handle layout.
// To update the site, edit this file — the page re-renders from it.

export type Experience = {
  role: string
  org: string
  location: string
  dates: string
  icon: LucideIcon
  highlights: string[]
}

export type Project = {
  name: string
  role: string
  stack: string[]
  highlights: string[]
}

export type Stat = {
  value: string
  label: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export const profile = {
  name: 'Caleb Mayhew',
  firstName: 'Caleb',
  headline: 'Computer Science @ Grove City College',
  tagline:
    'I build full-stack web applications and care about clean data, solid tests, and software that holds up in production.',
  about:
    "I'm a computer science student minoring in Data Science, Cyber Security, and Artificial Intelligence. I've spent two summers shipping features to a production Ruby on Rails codebase, and I led a four-person team building a full-stack course scheduler. When I'm not writing code, I'm in the pool — I swim distance freestyle for Grove City and coach a summer swim team back home in Maryland.",
  email: 'cj4of7@icloud.com',
  linkedin: 'https://www.linkedin.com/in/caleb-mayhew-2005md',
}

export const education = {
  school: 'Grove City College',
  location: 'Grove City, PA',
  degree: 'B.S. in Computer Science',
  note: 'ABET Accredited',
  graduation: 'Expected May 2027',
  gpa: '3.94',
  minors: ['Data Science', 'Cyber Security', 'Artificial Intelligence'],
}

export const stats: Stat[] = [
  { value: '3.94', label: 'GPA' },
  { value: '83', label: 'production commits' },
  { value: '17k+', label: 'lines shipped' },
  { value: '6×', label: "Dean's List" },
]

export const experience: Experience[] = [
  {
    role: 'Software Development Intern',
    org: 'SYSTOLIC, inc',
    location: 'Remote',
    dates: 'Summer 2025 & 2026',
    icon: BriefcaseBusiness,
    highlights: [
      'Built new features, fixed bugs, and wrote comprehensive tests for a Ruby on Rails web application.',
      'Made 83 commits across 384 files in a production codebase — adding 17,298 lines and removing 2,567.',
      'Collaborated with a team of developers using GitLab for version control and workflow management.',
    ],
  },
  {
    role: 'Data Management Intern',
    org: 'The Pittsburgh Project',
    location: 'Pittsburgh, PA',
    dates: 'Sep – Nov 2025',
    icon: Database,
    highlights: [
      'Cleaned donor data in the organization’s CRM (MonkeyPod), resolving duplicate accounts and correcting contact attributes.',
      'Audited and reclassified records to separate Donor Advised Fund contributions from foundation grants.',
      'Imported pending grant applications and delivered a report with recommendations for better data practices.',
    ],
  },
  {
    role: 'Head Coach',
    org: 'Quail Valley Swim Team',
    location: 'Gaithersburg, MD',
    dates: 'Summer 2023 & 2026',
    icon: Users,
    highlights: [
      'Directed meet lineups and practice plans tailored to swimmers of every skill level.',
      'Led and organized the coaching staff for consistent instruction and smooth daily operations.',
      'Served as the primary liaison between the team board and parents.',
    ],
  },
  {
    role: 'Team Member / Certified Trainer',
    org: 'Chick-fil-A',
    location: 'Germantown, MD',
    dates: 'Sep 2021 – Aug 2024',
    icon: Sandwich,
    highlights: [
      'Delivered consistent, high-quality service in a fast-paced, high-volume environment.',
      'Onboarded and trained new employees on operating procedures and service standards.',
    ],
  },
]

export const projects: Project[] = [
  {
    name: 'Course Scheduling App',
    role: 'Team Lead · Team of 4',
    stack: ['Java', 'Javalin', 'React', 'Supabase'],
    highlights: [
      'Architected the Javalin backend and the core course and schedule controller logic while directing the React frontend.',
      'Built persistent multi-semester schedules backed by Supabase, plus conflict detection that suggests alternative schedules.',
      'Wrote technical documentation, reviewed pull requests, and resolved 11+ tracked bugs across the stack.',
    ],
  },
]

export const skills: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'C', 'Ruby', 'JavaScript', 'HTML', 'SQL', 'R'],
  },
  {
    title: 'Frameworks',
    items: ['Ruby on Rails', 'React', 'Javalin', 'Pandas'],
  },
  {
    title: 'Tools & Platforms',
    items: [
      'Git',
      'VS Code',
      'IntelliJ',
      'Databricks',
      'MongoDB',
      'MySQL',
      'LaTeX',
      'Mathematica',
      'Excel',
    ],
  },
]

export const achievements = {
  academic: [
    "Dean's List with High Distinction — six consecutive semesters (Fall 2023 – Spring 2026)",
    'Member of the Grove City Roundtable Honorary Society',
  ],
  athletic: [
    'Presidents’ Athletic Conference Champion — 1650 yard freestyle',
    'Grove City College Men’s Swim Team',
  ],
}
