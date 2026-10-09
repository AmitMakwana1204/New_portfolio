import "../styles/experience.css";

const experiences = [
  {
    id: 1,
    type: "INTERNSHIP",
    role: "Full Stack Development & Mobile App Development Intern",
    company: "Information Technology Centre (ITC)",
    duration: "November 2025",
    status: "Completed",
    description:
      "Completed a 120-hour internship covering full-stack development, frontend and backend workflows. Worked with React.js, Node.js, and MongoDB and earned Grade B (Very Good) for overall performance.",
    skills: ["React.js", "Node.js", "MongoDB", "Web Development"],
  },
  {
    id: 2,
    type: "INTERNSHIP",
    role: "Web Development & Designing Intern",
    company: "Oasis Infobyte (OIBSIP)",
    duration: "September 2026 – October 2026",
    status: "Completed",
    description:
      "Worked on practical web development and design tasks, building responsive page layouts and frontend UI components using HTML, CSS, and JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    id: 3,
    type: "INTERNSHIP + TRAINING",
    role: "Full Stack Development Intern",
    company: "GRRAS IT Solutions",
    duration: "October 2026 – Present",
    status: "Currently Active",
    description:
      "Selected for a six-month Full Stack Development internship focused on technical learning, practical skill development, and guided hands-on experience.",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },
];

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="experience-heading">
        <span className="experience-eyebrow">
          MY PROFESSIONAL JOURNEY
        </span>

        <h2 className="section-title">
          Experience <span>&</span> Internships
        </h2>

        <p className="experience-intro">
          My journey through internships, practical projects,
          and continuous full-stack development learning.
        </p>
      </div>

      <div className="experience-timeline">
        {experiences.map((item) => (
          <article className="experience-item" key={item.id}>
            <div className="experience-marker">
              <span />
            </div>

            <div className="experience-card">
              <div className="experience-top">
                <span className="experience-type">
                  {item.type}
                </span>

                <span
                  className={`experience-status ${
                    item.status === "Currently Active"
                      ? "current"
                      : "completed"
                  }`}
                >
                  {item.status === "Currently Active" && (
                    <span className="status-dot" />
                  )}
                  {item.status}
                </span>
              </div>

              <h3>{item.role}</h3>
              <h4>{item.company}</h4>

              <p className="experience-duration">
                {item.duration}
              </p>

              <p className="experience-description">
                {item.description}
              </p>

              <div className="experience-tags">
                {item.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;