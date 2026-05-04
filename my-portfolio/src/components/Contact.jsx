import { useEffect, useRef } from "react"
import emailjs from "@emailjs/browser"
import "../styles/contact.css"

function Contact() {

  const nameRef = useRef(null)
  const formRef = useRef()

  // ✅ EmailJS init + auto focus
  useEffect(() => {

    // 🔥 init emailjs
    emailjs.init("KaNKGnphfZz85Ar2P")

    // 🔥 focus logic
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

  // ✅ form submit
  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_rfuik0l",        // ✅ correct service
      "template_4emzpcz",
      formRef.current
    )
    .then(() => {
      alert("✅ Message sent successfully!")
      formRef.current.reset()
    })
    .catch((error) => {
      console.log(error)
      alert("❌ Failed to send message")
    })
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
        <form 
          ref={formRef}
          className="contact-form" 
          onSubmit={handleSubmit}
        >

          <input
            ref={nameRef}
            name="user_name"
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            name="user_email"
            type="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
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