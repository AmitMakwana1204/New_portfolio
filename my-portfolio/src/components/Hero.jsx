import { useEffect } from "react"
import me from "../assets/images/me.png"
import { initStars } from "../utils/stars"
import "../styles/hero.css"

function Hero() {

  useEffect(() => {
    initStars()
  }, [])

  // 🔥 scroll function
  const goToContact = () => {
    const section = document.getElementById("contact")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="home hero" id="home">

      {/* 🌍 Glow Planet */}
      <div className="planet"></div>

      {/* LEFT CONTENT */}
      <div className="left">

        <h1>
          Hi, I'm <span>Amit Makwana</span>
        </h1>

        <h2 className="role">
          Full Stack Developer | React • Django • MySQL
        </h2>

        <p className="intro">
          BCA student (2026) with hands-on experience in building scalable web applications.
          I have completed a full-stack internship and developed real-world projects including
          a portfolio website, e-commerce platform, and online code editor.
        </p>

        <p className="extra">
          Passionate about problem-solving, clean UI, and continuous learning.
          Currently seeking opportunities to grow as a software developer.
        </p>

        {/* SKILLS TAGS */}
        <div className="skills-tags">
          <span>React.js</span>  
          <span>Django</span>  
          <span>Python</span> 
          <span>JavaScript</span> 
          <span>MySQL</span> 
          <span>Git</span>
        </div>

        {/* 🔥 BUTTONS (UPDATED) */}
        <div className="buttons">

          {/* ✅ SCROLL TO CONTACT */}
          <button className="hire" onClick={goToContact}>
            Hire Me
          </button>

          <a href="https://my-portfolio-4mkm.vercel.app/" target="_blank" rel="noreferrer">
            <button className="work">View Portfolio</button>
          </a>
        </div>

        {/* SOCIAL */}
        <div className="social">
          <a href="https://www.linkedin.com/in/amit-makwana-aa255b407" target="_blank" rel="noreferrer">💼</a>
          <a href="https://github.com/AmitMakwana1204" target="_blank" rel="noreferrer">💻</a>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div className="right">
        <div className="image-wrapper">
          <img src={me} alt="Amit Makwana" />
        </div>
      </div>

    </section>
  )
}

export default Hero