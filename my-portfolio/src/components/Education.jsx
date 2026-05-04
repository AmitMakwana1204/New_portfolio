import "../styles/education.css"

function Education() {

  const educationData = [
    {
      title: "Bachelor of Computer Application (BCA)",
      place: "Sardar Patel University (SPU)",
      year: "2023 – 2026",
      desc: "Currently pursuing BCA with focus on full stack development and modern technologies.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
    },
    {
      title: "Higher Secondary (12th)",
      place: "GSEB Board",
      year: "2021 – 2023",
      desc: "Completed higher secondary education with strong academic performance.",
      img: "https://cdn-icons-png.flaticon.com/512/2995/2995620.png"
    },
    {
      title: "Secondary School (10th)",
      place: "GSEB Board",
      year: "2019 – 2021",
      desc: "Completed secondary education with strong fundamentals.",
      img: "https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
    }
  ]

  return (
    <section className="education section" id="education">

      <h2>Education</h2>

      <div className="education-timeline">

        {educationData.map((item, index) => (
          <div className="education-card" key={index}>

            {/* IMAGE */}
            <div className="edu-icon">
              <img src={item.img} alt="education icon" />
            </div>

            <div className="edu-content">
              <h3>{item.title}</h3>
              <span className="edu-place">{item.place}</span>
              <span className="edu-year">{item.year}</span>
              <p>{item.desc}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Education