import React from "react";
// Make sure chota is installed: npm install chota
// and imported once in your entry point, e.g. in index.js:
// import "chota";

const projects = [
  {
    title: "Vulkan2D",
    description: "Advanced 2D renderer written with C and Vulkan",
    link: "https://github.com/PaoloMazzon/Vulkan2D",
  },
  {
    title: "Disorderly Conduct",
    description: "Fast-paced sidescrolling shoot-em-up made in a week",
    link: "https://devplo.itch.io/disorderly-conduct",
  },
  {
    title: "Octarine",
    description: "Game framework written in C providing effortless fixed-timestep logic and interpolation",
    link: "https://devplo.itch.io/octarine",
  },
];

export default function App() {
  return (
    <div>
      {/* Nav */}
      <nav class="nav">
      <div class="nav-left">
        <a class="active">Projects</a>
        <a>Contact</a>
      </div>
      <div class="nav-center">
        <a class="brand">
          <img src="dist/name.svg" alt=""></img>
        </a>
      </div>
      
    </nav>

      <div className="hero bg-dark" id="home">
        <div className="container is-center text-center" style={{ padding: "4rem 0" }}>
          <h1>Hi, I'm Your Name</h1>
          <p className="is-marginless">Frontend Developer &middot; Designer &middot; Creator</p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="#projects" className="button primary">
              View My Work
            </a>
            <a href="#contact" className="button outline" style={{ marginLeft: "0.5rem" }}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="container">
        {/* About */}
        <section id="about" style={{ padding: "3rem 0" }}>
          <h2>About Me</h2>
          <div className="row">
            <div className="col">
              <p>
                I work full-time as a robotics software developer but in my free time I
                love working in anything low-level. I have mostly done indie game development
                in the past, but also made some 2D/3D renderers with Vulkan, some small
                electronic toys on ESP32 boards, some servers I host on a small kubernetes
                cluster in my home server, and much more just random things.
              </p>
            </div>
          </div>

        </section>

        <hr />

        {/* Projects */}
        <section id="projects" style={{ padding: "3rem 0" }}>
          <h2>Projects</h2>
          <div className="row">
            {projects.map((project) => (
              <div key={project.title} className="col-4">
                <div className="card">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} className="button outline small">
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr />

        {/* Contact */}
        <section id="contact" style={{ padding: "3rem 0" }}>
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="col-6">
              <p>
                Interested in working together or just want to say hi? Fill
                out the form or reach me directly by email.
              </p>
              <p>
                <strong>Email:</strong> you@example.com
              </p>
            </div>
            <div className="col-6">
              <div className="card">
                <div className="field">
                  <label>Name</label>
                  <input type="text" placeholder="Your name" />
                </div>
                <div className="field">
                  <label>Email</label>
                  <input type="email" placeholder="you@example.com" />
                </div>
                <div className="field">
                  <label>Message</label>
                  <textarea rows="4" placeholder="Your message"></textarea>
                </div>
                <button className="button primary full">Send Message</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-center" style={{ padding: "1.5rem 0" }}>
        <p className="is-marginless">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </footer>
    </div>
  );
}