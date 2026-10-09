import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skill from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import './App.css'
import './styles/global.css'

function App() {
  return (
    <>
      <canvas id="stars"></canvas>

      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skill />
      <Education />
      <Projects />
      <Contact />
    </>
  )
}

export default App