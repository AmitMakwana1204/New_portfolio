import "../styles/projects.css"

function Projects() {

  const projects = [
    {
      title: "Portfolio Website",
      desc: "Modern responsive portfolio built using React and CSS with smooth UI.",
      link: "https://my-portfolio-4mkm.vercel.app/",
      tech: ["React", "CSS"],
      img: "https://source.unsplash.com/400x300/?website"
    },
    {
      title: "E-commerce Platform",
      desc: "Full stack web app using React, Django, and MySQL with product management.",
      link: "https://men-fashion-hub-h5p9.vercel.app/",
      tech: ["React", "Django", "MySQL"],
      img: "https://source.unsplash.com/400x300/?ecommerce"
    },
    {
      title: "Online Code Editor",
      desc: "Web-based code editor supporting HTML, CSS, and JavaScript execution.",
      link: "https://amitmakwana1204.github.io/online-code-editor/",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "https://source.unsplash.com/400x300/?code"
    }
  ]

  return (
    <section className="projects section" id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>

            {/* IMAGE */}
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>

            {/* CONTENT */}
            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              {/* TECH TAGS */}
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* BUTTON */}
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project →
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects