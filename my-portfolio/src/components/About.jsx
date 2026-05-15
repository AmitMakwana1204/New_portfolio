import "../styles/about.css"

function About() {

  return (

    <section className="about section" id="about">

      <h2>About Me</h2>

      <div className="about-container">

        {/* ================= LEFT SIDE ================= */}
        <div className="about-left">

          <h3>
            Passionate Full Stack Developer building modern web applications 🚀
          </h3>

          <p>
            I am currently pursuing Bachelor of Computer Application (BCA)
            at Sardar Patel University with an expected graduation in 2026.
          </p>

          <p>
            I have hands-on experience in building responsive and scalable
            web applications using React.js, Node.js, Express.js,
            MongoDB, and MySQL.
          </p>

          <p>
            I successfully completed a Full Stack Development internship
            at Information Technology Centre, where I gained practical
            experience working on real-world development projects.
          </p>

          <p className="highlight">
            I focus on clean UI design, responsive layouts,
            performance optimization, and continuous learning.
          </p>

          {/* ================= BUTTON ================= */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <button className="resume-btn">
              Download Resume
            </button>
          </a>

        </div>

        {/* ================= RIGHT SIDE ================= */}
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
            <h3>8+</h3>
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