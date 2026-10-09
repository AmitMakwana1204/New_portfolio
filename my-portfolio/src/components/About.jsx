import "../styles/about.css";

function About() {
  const highlights = [
    {
      number: "3+",
      label: "Featured Projects",
    },
    {
      number: "MERN",
      label: "Primary Tech Stack",
    },
    {
      number: "120 Hrs",
      label: "ITC Internship",
    },
    {
      number: "2026",
      label: "BCA Graduate",
    },
  ];

  return (
    <section className="about section" id="about">
      <h2 className="section-title">About Me</h2>

      <div className="about-container">
        {/* LEFT SIDE */}
        <div className="about-left">
          <p className="about-subtitle">
            👨‍💻 Get to Know Me
          </p>

          <h3>
            Full Stack Developer creating modern web experiences 🚀
          </h3>

          <p>
            Hi, I'm Amit Makwana, a BCA graduate from Sardar Patel
            University and an aspiring Full Stack Developer passionate
            about creating responsive and user-friendly web applications.
          </p>

          <p>
            My primary technology stack is MERN — React.js, Node.js,
            Express.js, and MongoDB. I also work with JavaScript,
            Tailwind CSS, REST APIs, JWT authentication, MySQL,
            and Git.
          </p>

          <p>
            I have completed a 120-hour Full Stack Development
            internship at Information Technology Centre (ITC) and
            gained additional web development experience through
            the Oasis Infobyte internship program.
          </p>

          <p>
            My key project, PizzaHub, is a full-stack pizza delivery
            and inventory management application featuring authentication,
            cart and wishlist management, manual/COD payments,
            order tracking, and an admin dashboard.
          </p>

          <p className="highlight">
            I enjoy solving problems, writing maintainable code,
            improving user experiences, and continuously developing
            my skills through practical projects and professional training.
          </p>

          {/* ACTION BUTTONS */}
          <div className="about-actions">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              Download Resume ↗
            </a>

            <a
              href="https://github.com/AmitMakwana1204"
              target="_blank"
              rel="noopener noreferrer"
              className="about-github-btn"
            >
              View GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/amit-makwana-aa255b407"
              target="_blank"
              rel="noopener noreferrer"
              className="about-github-btn"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          {highlights.map((item) => (
            <div className="about-box" key={item.label}>
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;