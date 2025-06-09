import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HomePage.css";
import emailjs from "emailjs-com";

import htmlIcon from "./images/htmlIcon.jpeg";
import cssIcon from "./images/cssIcon.jpeg";
import jsIcon from "./images/jsIcon.jpeg";
import nodeIcon from "./images/node.png";
import reactIcon from "./images/reactIcon.jpeg";
import javaIcon from "./images/javaIcon.png";
import mysqlIcon from "./images/mysql.png";
import springIcon from "./images/SpringIcon.png";
import javaServlet from "./images/javaServeletIcon.png";
import javaJDBC from "./images/javajdbc.png";
import IMS from "./images/websitePicture.png";
import FOS from "./images/HomePage.png";
import My_photo from "./images/My_photo.jpg";
import {
  Code,
  Database,
  FileText,
  LayoutDashboard,
  Settings,
  Monitor,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faTelegram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function HomePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        "service_evix25w",
        "template_fawyax3",
        e.target,
        "zuJV2ugjEg2xPeJ1z"
      )
      .then(
        (result) => {
          alert("Feedback sent successfully!");
          setName("");
          setEmail("");
          setMob("");
          setFeedback("");
          setIsSending(false);
        },
        (error) => {
          alert("Error sending feedback: " + error.text);
          setIsSending(false);
        }
      );
  };

  const services = [
    {
      title: "Full Stack Web Development",
      icon: <Code size={32} />,
      description:
        "Building dynamic, scalable web apps using Java, Servlets, JDBC, React.js, and MySQL.",
    },
    {
      title: "Custom Dashboards",
      icon: <LayoutDashboard size={32} />,
      description:
        "Developing real-time dashboards for tracking admissions, payments, and analytics.",
    },
    {
      title: "Database Design & Integration",
      icon: <Database size={32} />,
      description:
        "Designing efficient databases and integrating them into backend services using JDBC or Hibernate.",
    },
    {
      title: "PDF & Report Generation",
      icon: <FileText size={32} />,
      description:
        "Generating professional receipts and reports using html2pdf.js and dynamic data binding.",
    },
    {
      title: "Admin Panel Development",
      icon: <Settings size={32} />,
      description:
        "Creating secure, role-based admin panels for managing content, users, and orders.",
    },
    {
      title: "Frontend Development with React",
      icon: <Monitor size={32} />,
      description:
        "Designing responsive and user-friendly interfaces using React.js, HTML, CSS, and JavaScript.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const skills = [
    { icon: htmlIcon, label: "HTML" },
    { icon: cssIcon, label: "CSS" },
    { icon: jsIcon, label: "Javascript" },
    { icon: nodeIcon, label: "NodeJs" },
    { icon: reactIcon, label: "ReactJs" },
    { icon: javaIcon, label: "Java" },
    { icon: mysqlIcon, label: "MySQL" },
    { icon: springIcon, label: "SpringBoot" },
    { icon: javaServlet, label: "JavaServlet" },
    { icon: javaJDBC, label: "JDBC" },
  ];

  return (
    <main>
     {/* About Section */}
<section
  id="about"
  className="about-section"
  style={{
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "2rem",
  }}
>
  <h2
    style={{
      fontSize: "40px",
      marginBottom: "1rem",
      fontFamily: "'Oleo Script', cursive",
      color: "#ff004f",
    }}
  >
    About Me
  </h2>

  {/* Flex container for text and image */}
  <div data-aos="fade-left"
    style={{
      display: "flex",
      flexDirection: "row",  // ensures side-by-side layout
      gap: "2rem",           // space between text and image
      alignItems: "center",  // align vertically centered
      flexWrap: "wrap",      // wraps on smaller screens
    }}
  >
    <div>
      <p
        style={{
          maxWidth: "800px",
          textAlign: "left",
          fontSize: "20px",
          lineHeight: "1.8",
          color: "#fff",
        }}
      >
        Hi, I'm <strong>Dipti Shinde</strong> – a Java Full Stack Developer with a passion for building clean, responsive, and user-friendly web applications. I specialize in both front-end and back-end development using technologies like Java, Servlets, JDBC, React.js, and MySQL.
        <br />
        <br />
        With a Bachelor's degree in Computer Engineering and hands-on experience in real-world projects, I've developed systems that manage everything from student admissions to employee records. My work focuses on writing clean code, solving complex problems, and delivering reliable, high-quality solutions.
        <br />
        <br />
        I'm always eager to learn new technologies and bring creative ideas to life. Whether it’s designing intuitive user interfaces or connecting APIs with robust backends, I enjoy every step of the development journey.
        <br />
        <br />
        Let’s build something amazing together!
      </p>
    </div>

    <div>
      <img
        src={My_photo}
        alt="My Photo"
        
      />
    </div>
  </div>
</section>


      {/* Skills Section */}
      <section
        id="skills"
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#ff004f",
            fontFamily: "'Oleo Script', cursive",
          }}
        >
          Skills
        </h2>
        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto 3rem",
            fontSize: "18px",
            lineHeight: "1.6",
            color: "#fff",
          }}
        >
          Here are some of the technologies I work with:
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
          }}
        >
          {skills.map(({ icon, label }, index) => (
            <div
              key={label}
              data-aos="fade-up"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                backgroundColor: "#fff",
                padding: "0.75rem 1.25rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                minWidth: "150px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(255, 0, 79, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 2px 8px rgba(0, 0, 0, 0.2)";
              }}
            >
              <img
                src={icon}
                alt={label}
                style={{
                  width: "32px",
                  height: "32px",
                  objectFit: "contain",
                  backgroundColor: "#fff",
                }}
              />
              <span
                style={{
                  fontSize: "1rem",
                  backgroundColor: "white",
                  color: "black",
                  fontFamily: "'Oleo Script', cursive",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="projects-section container py-5" id="services">
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="fw-bold text-start section-title">Services</h2>
            <p className="text-start section-subtitle">
              What I offer as a Software Developer
            </p>
          </div>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-right" key={service.title}>
              <div className="card h-100 card-custom">
                <div className="card-body card-body-custom">
                  <div className="card-icon mb-3">{service.icon}</div>
                  <h5 className="card-title fw-semibold">{service.title}</h5>
                  <p className="card-text mt-2">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="projects-section"
        style={{ padding: "2%" }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "#ff004f",
            fontFamily: "'Oleo Script', cursive",
          }}
        >
          Projects
        </h2>
        <p>
          Here are some of my notable projects. Check the GitHub links for code
          and demos.
        </p>

        <div className="worklist" data-aos="fade-left">
          <div className="work">
            <img src={IMS} alt="Institute Management System" />
            <div className="layer">
              <h3>Institute Management System</h3>
              <p>
                A complete system for managing inquiries, admissions, fees, and
                more.
              </p>
              <a
                href="https://github.com/dipti/ims-repo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Institute Management System project on GitHub"
              >
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{
                    backgroundColor: "#ff004f",
                    padding: "5px",
                    borderRadius: "30px",
                  }}
                />
              </a>
            </div>
          </div>

          <div className="work">
            <img src={FOS} alt="Food Ordering System" />
            <div className="layer">
              <h3>Food Ordering System</h3>
              <p>
                A dynamic food ordering system with cart, payment, and admin
                panel.
              </p>
              <a
                href="https://github.com/dipti/food-ordering-system"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Food Ordering System project on GitHub"
              >
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  style={{
                    backgroundColor: "#ff004f",
                    padding: "5px",
                    borderRadius: "30px",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <button className="btn">Show More</button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-5">
        <h2
          className="text-center mb-4"
          style={{
            fontSize: "2.5rem",
            color: "#ff004f",
            fontFamily: "'Oleo Script', cursive",
          }}
        >
          Contact
        </h2>

        <div className="row border" data-aos="fade-up">
          {/* Feedback Form */}
          <div className="col-md-6 mb-2">
            <div className="shadow rounded">
              <div className="container my-2">
                <div className="row justify-content-center">
                  <h3
                    className="mb-4 text-center"
                    style={{
                      color: "#fff",
                      fontFamily: "'Oleo Script', cursive",
                    }}
                  >
                    Contact Us
                  </h3>
                  <div className="col-md-8 col-lg-8">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Please Enter Your Full Name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Please Enter Your Email Address"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="mob"
                          value={mob}
                          onChange={(e) => setMob(e.target.value)}
                          placeholder="Please Enter Your Phone Number"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Write to us</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          name="feedback"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          placeholder="Please write feedback about my portfolio"
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSending}
                        >
                          {isSending ? "Sending..." : "Submit"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* My Contact Details */}
          <div className="col-md-6 mb-2 mt-5">
            <div className="p-4 shadow rounded">
              <div className="container my-2">
                <div
                  className="row justify-content-center"
                  style={{
                    color: "#fff",
                    fontFamily: "'Oleo Script', cursive",
                  }}
                >
                  <h3
                    className="mb-4 text-center"
                    style={{
                      color: "#ff004f",
                      fontFamily: "'Oleo Script', cursive",
                    }}
                  >
                    My Contact Details
                  </h3>
                  <div className="col-md-8 col-lg-8">
                    <p>
                      <strong>Name:</strong> Dipti Shinde
                    </p>
                    <p>
                      <strong>Email:</strong> diptishinde241@gmail.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +91-9834531391
                    </p>
                    <p>
                      <strong>Location:</strong> Pune, Maharashtra
                    </p>
                    <div className="iconlist">
                      <a
                        href="https://t.me/DiptiShinde241"
                        target="_blank"
                        className="icon"
                        rel="noopener noreferrer"
                        aria-label="Telegram"
                      >
                        <FontAwesomeIcon
                          icon={faTelegram}
                          style={{
                            backgroundColor: "#ff004f",
                            borderRadius: "30px",
                            fontSize: "30px",
                          }}
                        />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/dipti-shinde-1aab95294"
                        target="_blank"
                        className="icon"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <FontAwesomeIcon
                          icon={faLinkedin}
                          style={{
                            backgroundColor: "#ff004f",
                            borderRadius: "5px",
                            fontSize: "30px",
                          }}
                        />
                      </a>

                      <a
                        href="https://github.com/diptissh123/"
                        target="_blank"
                        className="icon"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <FontAwesomeIcon
                          icon={faGithub}
                          style={{
                            backgroundColor: "#ff004f",
                            borderRadius: "30px",
                            fontSize: "30px",
                          }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;