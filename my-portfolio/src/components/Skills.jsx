import { useEffect } from "react"
import "../styles/skill.css"

import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaGithub
} from "react-icons/fa"

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman
} from "react-icons/si"

function Skill() {

  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> }
      ]
    },
    {
      category: "Database",
      items: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> }
      ]
    }
  ]

  // 🔥 Scroll animation
  useEffect(() => {

    const cards = document.querySelectorAll(".skill-box")

    const observer = new IntersectionObserver((entries) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("show")
        }

      })

    }, { threshold: 0.2 })

    cards.forEach(card => {
      card.classList.add("hidden")
      observer.observe(card)
    })

    return () => observer.disconnect()

  }, [])

  return (

    <section className="skills section" id="skills">

      <h2>Skills</h2>

      {skills.map((group, i) => (

        <div key={i} className="skills-group">

          <h3 className="category">
            {group.category}
          </h3>

          <div className="skills-grid">

            {group.items.map((skill, index) => (

              <div className="skill-box" key={index}>

                <div className="icon">
                  {skill.icon}
                </div>

                <p>{skill.name}</p>

              </div>

            ))}

          </div>

        </div>

      ))}

    </section>

  )
}

export default Skill