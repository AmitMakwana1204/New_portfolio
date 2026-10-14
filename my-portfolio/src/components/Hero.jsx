import { useEffect } from "react";
import me from "../assets/images/me.png";
import song from "../assets/audio/introduction.mp4";
import { initStars } from "../utils/stars";
import "../styles/hero.css";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

function Hero() {
  useEffect(() => {
    initStars();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="home hero" id="home">
      <div className="planet"></div>

      <div className="left">
        <p className="hero-subtitle">
          🚀 MERN Stack Developer
        </p>

        <h1>
          Hi, I'm <span>Amit Makwana</span>
        </h1>

        <h2 className="role">
          Building Modern & Responsive Full-Stack Web Applications
        </h2>

        <p className="intro">
          BCA graduate and Full Stack Developer passionate about
          building responsive, user-friendly web applications using
          React.js, Node.js, Express.js, and MongoDB.
        </p>

        <p className="extra">
          I have practical web development experience through
          internships and hands-on projects. My projects include
          PizzaHub, a full-stack pizza delivery and inventory
          management application with user authentication, order
          management, and an admin dashboard. I enjoy solving
          problems, developing REST APIs, and continuously improving
          my technical skills.
        </p>

        <div className="skills-tags">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MongoDB</span>
          <span>Mongoose</span>
          <span>Vite</span>
          <span>Tailwind CSS</span>
          <span>REST APIs</span>
          <span>JWT Authentication</span>
          <span>Git</span>
          <span>GitHub</span>
          <span>HTML5</span>
          <span>CSS3</span>
          <span>MySQL</span>
        </div>

        <div className="buttons">
          <button
            className="hire"
            onClick={() => scrollToSection("contact")}
          >
            Let's Connect
          </button>

          <button
            className="work"
            onClick={() => scrollToSection("projects")}
          >
            Explore Projects
          </button>
        </div>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/amit-makwana-aa255b407"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/AmitMakwana1204"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/makwana__amit__1204/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Song Player */}
        <div className="song-player">
          <span>My Introduction</span>

          <audio autoPlay controls loop preload="auto">
            <source src={song} type="audio/mp4" />
            Your browser does not support audio playback.
          </audio>
        </div>        
      </div>

      <div className="right">
        <div className="image-wrapper">
          <img
            src={me}
            alt="Amit Makwana - MERN Stack Developer"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;