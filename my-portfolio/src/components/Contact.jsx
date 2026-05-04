import { useEffect, useRef } from "react"
import "../styles/contact.css"

function Contact() {

  const nameRef = useRef(null)

  // 🔥 auto focus when section visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          nameRef.current?.focus()
        }
      },
      { threshold: 0.5 }
    )

    const section = document.getElementById("contact")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message sent successfully 🚀")
  }

  return (
    <section className="contact section" id="contact">

      <h2>Contact Me</h2>

      <p className="contact-sub">
        Have a project or opportunity? Let’s connect.
      </p>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">

          <div className="info-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:amitmakwana17102005@gmail.com">
                amitmakwana17102005@gmail.com
              </a>
            </p>
          </div>

          <div className="info-box">
            <h4>Location</h4>
            <p>Gujarat, India</p>
          </div>

          <div className="info-box">
            <h4>Availability</h4>
            <p>Open to Work 🚀</p>
          </div>

        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact