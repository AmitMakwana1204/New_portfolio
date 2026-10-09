import "../styles/projects.css";

function Projects() {
  const projects = [
    {
      title: "🍕 PizzaHub – Pizza Delivery Application",
      desc: "Full-stack MERN pizza delivery application featuring user authentication, pizza browsing, cart and wishlist, checkout with manual/COD payment, order management, and a comprehensive admin dashboard.",
      live: "https://oibsip-seven-rho.vercel.app/",
      github: "https://github.com/AmitMakwana1204/OIBSIP",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Tailwind CSS",
      ],
      img: "/projects/pizzahub.jpg",
    },
    {
      title: "Employee Task Management System",
      desc: "Full-stack employee task management application with authentication, role-based dashboards, task assignment, and task tracking features.",
      live: "https://employee-task-management-vert.vercel.app",
      github:
        "https://github.com/AmitMakwana1204/employee-task-management",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      img: "/projects/login.png",
    },
    {
      title: "Portfolio Website",
      desc: "Responsive developer portfolio showcasing projects, technical skills, and contact integration with a modern UI.",
      live: "https://my-portfolio-4mkm.vercel.app/",
      github: "https://github.com/AmitMakwana1204/my-portfolio",
      tech: ["React", "CSS"],
      img: "/projects/portfolio.png",
    },
    {
      title: "E-commerce Platform",
      desc: "Full-stack e-commerce application with product listings, shopping cart functionality, and backend integration.",
      live: "https://men-fashion-hub-h5p9.vercel.app/",
      github:
        "https://github.com/AmitMakwana1204/e-commerce-platform",
      tech: ["React", "Django", "MySQL"],
      img: "/projects/ecommerce.png",
    },
    {
      title: "Online Code Editor",
      desc: "Browser-based code editor supporting HTML, CSS, and JavaScript with live preview functionality.",
      live: "https://amitmakwana1204.github.io/online-code-editor/",
      github:
        "https://github.com/AmitMakwana1204/online-code-editor",
      tech: ["HTML", "CSS", "JavaScript"],
      img: "/projects/editor.png",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">My Projects</h2>


      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-img">
              <img
                src={project.img}
                alt={`${project.title} screenshot`}
                loading={index === 0 ? "eager" : "lazy"}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.desc}</p>

              <div className="project-tags">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                >
                  🔗 Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${project.title}`}
                >
                  💻 GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;