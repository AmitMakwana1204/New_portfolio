import "../styles/education.css"

function Education() {

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Sardar Patel University",
    duration: "2023 – 2026",
    details: [
      "💻 Specializing in Full Stack Development (React, Node.js)",
      "🚀 Built real-world projects including portfolio & web applications",
      "⚡ Strong skills in JavaScript, HTML, CSS & modern frameworks"
    ]
  },
  {
    degree: "Higher Secondary Education (12th)",
    institute: "GSEB Board",
    duration: "2021 – 2023",
    details: [
      "📊 Strong academic performance",
      "🧠 Developed analytical & problem-solving skills",
      "🎯 Active in academic and learning activities"
    ]
  },
  {
    degree: "Secondary School (10th)",
    institute: "GSEB Board",
    duration: "2019 – 2021",
    details: [
      "📘 Strong foundation in Mathematics & Science",
      "🏆 Consistent academic performance",
      "📈 Built discipline and learning habits"
    ]
  }
]
  return (
    <section className="education section" id="education">

      <h2>Education</h2>

      <div className="education-timeline">

        {educationData.map((item, index) => (
          <div className="education-card" key={index}>

            <div className="edu-content">

              <h3>{item.degree}</h3>

              <div className="edu-meta">
                <span className="edu-institute">{item.institute}</span>
                <span className="edu-duration">{item.duration}</span>
              </div>

              <ul className="edu-points">
                {item.details.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Education