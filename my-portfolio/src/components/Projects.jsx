import "../styles/projects.css"

function Projects() {

  const projects = [
    {
      title: "Employee Task Management System",
      desc: "Full-stack employee task management application with authentication, role-based dashboards, task assignment, and task tracking features.",
      live: "https://employee-task-management-vert.vercel.app",
      github: "https://github.com/AmitMakwana1204/employee-task-management",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      img: "/projects/login.png"
    },
    {
      title: "Portfolio Website",
      desc: "Responsive developer portfolio showcasing projects, skills, and contact integration with modern UI.",
      live: "https://my-portfolio-4mkm.vercel.app/",
      github: "https://github.com/AmitMakwana1204/my-portfolio",
      tech: ["React", "CSS"],
      img: "/projects/portfolio.png"
    },
    {
      title: "E-commerce Platform",
      desc: "Full-stack e-commerce app with product listing, cart system, and backend integration.",
      live: "https://men-fashion-hub-h5p9.vercel.app/",
      github: "https://github.com/AmitMakwana1204/e-commerce-platform",
      tech: ["React", "Django", "MySQL"],
      img: "/projects/ecommerce.png"
    },
    {
      title: "Online Code Editor",
      desc: "Browser-based code editor supporting HTML, CSS & JS with live preview functionality.",
      live: "https://amitmakwana1204.github.io/online-code-editor/",
      github: "https://github.com/AmitMakwana1204/online-code-editor",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "/projects/editor.png"
    }
  ]

  return (
    <section className="projects section" id="projects">

      <h2 className="section-title">Projects</h2>

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

              {/* TECH */}
              <div className="project-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="project-links">
                <a href={project.live} target="_blank" rel="noreferrer">
                  🔗 Live
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  💻 Code
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects