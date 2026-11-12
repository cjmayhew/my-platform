import './App.css'
import profilePhoto from './assets/profile.jpg'

const name = 'Caleb Mayhew'
const focus = 'Computer Science @ Grove City College'

function App() {

  type ReportKind = 'bug' | 'feature';

  type Report = {
    id: string
    text: string
    kind: ReportKind
  }
  const initialReports: Report[] = [

    { id: '1', text: 'Navigation link is broken', kind: 'bug' },

    { id: '2', text: 'Add dark mode', kind: 'feature' },

    ]

  return (
    <main className="intro">

      <img className="avatar" src={profilePhoto} alt={`Photo of ${name}`} />

      <h1>{name}</h1>
      <h2>{focus}</h2>

      <p>
        I'm a computer science student minoring in Data Science, Cyber Security,
        and Artificial Intelligence, with internship experience building
        production Ruby on Rails features. Outside of code, I swim distance
        freestyle for Grove City and coach a summer swim team.
      </p>

      <section className="report-board">

        <h2>Bugs & Feature Requests</h2>

        <ul>

          {initialReports.map((report) => (

          <li key={report.id}>

          {report.text} ({report.kind})

          </li>

          ))}

        </ul>

      </section>
    </main>
  )
}

export default App
