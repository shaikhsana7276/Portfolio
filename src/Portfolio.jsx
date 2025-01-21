import React from "react";
import "./Portfolio.css";
import profilePhoto from "./portfolioImg.jpg";
import resume from "./assets/resume.pdf";


const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Hi, I'm Shaikh Sana 👋</h1>
        <p className="portfolio-tagline">
          Frontend Developer | React | JavaScript | Web Enthusiast
        </p>
        <div className="profile-container">
          <img src={profilePhoto} alt="Shaikh Sana" className="profile-photo" />
          <p>
            I am a passionate Frontend Developer with expertise in creating
            visually appealing and functional web experiences. I specialize in
            React, JavaScript, and responsive design.
          </p>
        </div>
        {/* Download Resume Button */}
        <a href={resume} className="portfolio-btn download-btn" download>
          Download Resume
        </a>
      </header>

      <main className="portfolio-main">
        <section className="portfolio-section">
          <h2>About Me</h2>
          <p>
            Enthusiastic Frontend Developer with expertise in building
            responsive and user-friendly web interfaces using HTML5, CSS3,
            JavaScript, and React. Skilled in debugging, API integration, and
            optimizing performance. Dedicated to delivering exceptional user
            experiences through innovative design and code quality.
          </p>
        </section>

        <section className="portfolio-section">
          <h2>Projects</h2>
          <ul>
            <li>
              <strong>Asmak Muscat Int'l:</strong> A marine product showcase
              website for Asmak Muscat International, built with React and
              styled with Tailwind CSS.
            </li>
            <li>
              <strong>Portfolio Website:</strong> A personal portfolio built
              using React.js, showcasing my skills, projects, and work
              experience.
            </li>
          </ul>
        </section>

        <section className="portfolio-section">
          <h2>Skills</h2>
          <ul>
            <li>
              <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+).
            </li>
            <li>
              <strong>Frameworks/Libraries:</strong> React.js, Material-UI,
              Tailwind CSS, Bootstrap.
            </li>
            <li>
              <strong>Tools:</strong> Git, GitHub, VS Code, npm, Babel.
            </li>
            <li>
              <strong>APIs:</strong> REST APIs, Fetch API, Axios.
            </li>
            <li>
              <strong>Responsive Design:</strong> Media Queries, Flexbox, CSS
              Grid.
            </li>
            <li>
              <strong>Other Skills:</strong> JSON, Browser Developer Tools,
              Debugging.
            </li>
          </ul>
        </section>

        <section className="portfolio-section">
          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:shaikhsana7276@gmail.com">
              shaikhsana7276@gmail.com
            </a>
          </p>
          <p>
            Phone: <a href="tel:+7276889820">7276889820</a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQHjhHj2L9YTWAAAAZR4IFswsmrATowftgfRW-YAjl_D_9g52ZX6ZXB4zSxKMxsRz7NrJgnm0VpQHgGaVYe7Nv7NB1_LbNCfgvsdAt9tDZ8d68t10G5FpdgNdHQkRut2AY3MfxQ=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fsana-shaikh-98a336316%3Futm_source%3Dshare%26utm_campaign%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dandroid_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/shaikhsana7276"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
          {/* Hire Me Button */}
          <a href="#contact-form" className="portfolio-btn hire-btn">
            Hire Me
          </a>
        </section>
      </main>

      <footer className="portfolio-footer">
        <p>&copy; 2025 Shaikh Sana. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
