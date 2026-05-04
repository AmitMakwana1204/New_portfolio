import "../styles/about.css"

function About() {
  return (
    <section className="about section" id="about">

      <h2>About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <h3>
            Passionate Full Stack Developer building real-world solutions 🚀
          </h3>

          <p>
            I am a BCA student (2026) with hands-on experience in building modern,
            scalable web applications using React, Django, and MySQL.
          </p>

          <p>
            I have completed a full stack development internship and worked on
            projects like an e-commerce platform, portfolio website, and an
            online code editor.
          </p>

          <p className="highlight">
            I focus on clean UI, performance, and solving real-world problems.
          </p>

          {/* BUTTON */}
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <button className="resume-btn">Download Resume</button>
          </a>
        </div>

        {/* RIGHT SIDE (STATS / HIGHLIGHTS) */}
        <div className="about-right">

          <div className="about-box">
            <h3>1+</h3>
            <p>Internship Experience</p>
          </div>

          <div className="about-box">
            <h3>3+</h3>
            <p>Projects Built</p>
          </div>

          <div className="about-box">
            <h3>6+</h3>
            <p>Technologies</p>
          </div>

          <div className="about-box">
            <h3>2026</h3>
            <p>Graduation Year</p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default About