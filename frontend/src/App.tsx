import './App.css'
import profilePhoto from './assets/profile.jpg'

const name = 'Caleb Mayhew'
const focus = 'Computer Science @ Grove City College'

function App() {
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
    </main>
  )
}

export default App
