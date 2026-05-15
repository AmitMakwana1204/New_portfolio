import { useEffect } from "react"
import me from "../assets/images/me.png"
import { initStars } from "../utils/stars"
import "../styles/hero.css"

// 🔥 SOCIAL ICONS
import {
  FaLinkedin,
  FaGithub,
  FaInstagram
} from "react-icons/fa"

function Hero() {

  useEffect(() => {
    initStars()
  }, [])

  // 🔥 Scroll To Contact
  const goToContact = () => {

    const section = document.getElementById("contact")

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  // 🔥 Scroll To Projects
  const goToProjects = () => {

    const section = document.getElementById("projects")

    if (section) {
      section.scrollIntoView({
        behavior: "smooth"
      })
    }
  }

  return (

    <section className="home hero" id="home">

      {/* 🌍 Glow Background */}
      <div className="planet"></div>

      {/* ================= LEFT CONTENT ================= */}
      <div className="left">

        {/* Subtitle */}
        <p className="hero-subtitle">
          🚀 MERN Stack Developer
        </p>

        {/* Main Heading */}
        <h1>
          Hi, I'm <span>Amit Makwana</span>
        </h1>

        {/* Role */}
        <h2 className="role">
          Building Modern Responsive Full Stack Web Applications
        </h2>

        {/* Intro */}
        <p className="intro">
          Passionate Full Stack Developer with hands-on experience
          in building responsive and scalable web applications
          using React.js, Node.js, Express.js, and MongoDB.
        </p>

        {/* Extra Text */}
        <p className="extra">
          Currently pursuing Bachelor of Computer Application (BCA)
          at Sardar Patel University (2026) and actively seeking
          internship opportunities to enhance my development skills
          and contribute to real-world projects.
        </p>

        {/* ================= SKILLS ================= */}
        <div className="skills-tags">

          <span>React.js</span>

         <span>Node.js</span>

         <span>Express.js</span>

         <span>MongoDB</span>

         <span>JavaScript</span>

         <span>MySQL</span>

         <span>Git</span>

         <span>GitHub</span>

         <span>HTML</span>

         <span>CSS</span>

         <span>REST API</span>

         <span>Responsive Design</span>

        </div>

        {/* ================= BUTTONS ================= */}
        <div className="buttons">

          {/* Contact Button */}
          <button
            className="hire"
            onClick={goToContact}
          >
            Let's Connect
          </button>

          {/* Projects Button */}
          <button
            className="work"
            onClick={goToProjects}
          >
            Explore Projects
          </button>

        </div>

        {/* ================= SOCIAL LINKS ================= */}
        <div className="social">

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/amit-makwana-aa255b407"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/AmitMakwana1204"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/makwana__amit__1204/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

        </div>

      </div>

      {/* ================= RIGHT IMAGE ================= */}
      <div className="right">

        <div className="image-wrapper">

          <img
            src={me}
            alt="Amit Makwana"
          />

        </div>

      </div>

    </section>
  )
}

export default Hero