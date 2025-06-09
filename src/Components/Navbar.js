import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import My_image from "./images/My Image.jpg";

function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }

      // Collapse the navbar on mobile after clicking
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    };

    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));
    return () => links.forEach((link) => link.removeEventListener("click", handleSmoothScroll));
  }, []);


  const sentences = [
    "Hello,  I'm <strong class='name'> Dipti</strong>, a <strong class='profession'>Software Developer.</strong>",
    "This is my official portfolio to showcase my work and experience in web development.",
  ];

  const [displayedText, setDisplayedText] = useState([]);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const chars = sentences[sentenceIndex].split("");

    const interval = setInterval(() => {
      if (charIndex < chars.length) {
        setDisplayedText((prev) => {
          const updated = [...prev];
          updated[sentenceIndex] = (updated[sentenceIndex] || "") + chars[charIndex];
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      } else {
        clearInterval(interval);
        if (sentenceIndex < sentences.length - 1) {
          setTimeout(() => {
            setSentenceIndex((prev) => prev + 1);
            setCharIndex(0); // reset after delay
          }, 1000);
        } else {
          setTimeout(() => {
            setDisplayedText([]);
            setSentenceIndex(0);
            setCharIndex(0);
          }, 2000);
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, sentenceIndex]);

  return (
    <div id='header'>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ height: "100px", padding: "10px 20px" }}>
        <div className="container-fluid d-flex align-items-center">
          <div style={{ fontFamily: 'Poppins, sans-serif' }}>
          <div>
  <a
    className="navbar-brand fw-bold"
    href="#home"
    style={{
      fontSize: "30px",
      margin: 0,
      fontFamily: "'Oleo Script', cursive", // Applied the font family
      color: "#ff004f", // Applied the color
    }}
  >
    Dipti Shinde
  </a>
  <p
    style={{
      margin: 0,
      fontSize: "18px",
      color: "white",
      fontFamily: "'Indie Flower', cursive", // Applied the font family
    }}
  >
    Software Developer
  </p>
</div>

          </div>
          <button 
            className="navbar-toggler ms-auto" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Portfolio</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

 <section
  id="home"
  className="home-section"
  style={{
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "2rem",
    position: "relative",
  }}
>
  {/* Text Section */}
  <div
    className="text-content"
    style={{
      width: "60%",
      zIndex: 1,
    }}
  >
    <div className="animated-text text-xl font-medium space-y-2">
      {displayedText.map((line, index) => (
        <p
          key={index}
          dangerouslySetInnerHTML={{
            __html: line + '<span class="blinking-cursor"></span>',
          }}
        ></p>
      ))}
    </div>
    <a href="/DiptiShinde(1).pdf" download>
      <button className="download-button">Download Portfolio</button>
    </a>
  </div>

  {/* Fixed Image Section */}
  <div
    style={{
      position: "absolute",
      right: "2rem",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    <img
      src={My_image}
      alt="My_image"
      style={{
        width: "300px",
        height: "320px",
        borderRadius: "80%",
        border: "3px solid rgba(255, 0, 106, 0.84)",
        objectFit: "cover",
         boxShadow: "0 4px 20px rgba(252, 28, 121, 0.83)", // <-- Shadow added
      }}
    />
  </div>
</section>

    </div>
  );
}

export default Navbar;
