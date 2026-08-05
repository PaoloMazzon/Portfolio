import React from "react";

const projects = [
  {
    title: "Vulkan2D",
    image: "https://private-user-images.githubusercontent.com/17896827/541445510-499ce5ce-5783-4bfe-a16c-e694df15944c.gif?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODU3ODE1ODksIm5iZiI6MTc4NTc4MTI4OSwicGF0aCI6Ii8xNzg5NjgyNy81NDE0NDU1MTAtNDk5Y2U1Y2UtNTc4My00YmZlLWExNmMtZTY5NGRmMTU5NDRjLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA4MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwODAzVDE4MjEyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTg4MDA5MjRkMDc1MzFhYmVlZGYwMDY2NjVlMTdkYjRhYTFhNDk2YTQzYWVhYWRhM2YzZDdiMDZmM2RiMzc4NzAmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRmdpZiJ9.jHlfF0IOOezguOH6_Vx0w-aI6qRTzWdRRygPP3DiCmI",
    description: "Advanced 2D renderer written with C and Vulkan",
    link: "https://github.com/PaoloMazzon/Vulkan2D",
  },
  {
    title: "Disorderly Conduct",
    image: "https://img.itch.zone/aW1nLzIyMTk0NTk1LmdpZg==/original/S0hJ2D.gif",
    description: "Fast-paced sidescrolling shoot-em-up made in a week",
    link: "https://devplo.itch.io/disorderly-conduct",
  },
  {
    title: "Octarine",
    image: "https://github.com/PaoloMazzon/Octarine/raw/main/docs/demo.gif",
    description: "Game framework written in C providing effortless fixed-timestep logic and interpolation",
    link: "https://github.com/PaoloMazzon/octarine",
  },
  {
    title: "Bleeding in the Blur",
    image: "bitb.gif",
    description: "Small in-development roguelike game written in C with a unique skill system",
    link: "https://github.com/PaoloMazzon/BleedingInTheBlur"
  },
  {
    title: "Platformer Demo",
    image: "https://github.com/PaoloMazzon/Platformer-Demo/raw/main/assets/screenshot.png",
    description: "Small demo of an extremely detailed implementation of platformer logic and physics",
    link: "https://github.com/PaoloMazzon/Platformer-Demo"
  },
  {
    title: "Sea of Clouds",
    image: "https://img.itch.zone/aW1nLzE2ODA4MzExLmdpZg==/original/h9Or8Q.gif",
    description: "Small roguelike game made in 30 days where you ascend through the clouds",
    link: "https://devplo.itch.io/sea-of-clouds"
  },
  {
    title: "Astro Engine",
    image: "astro.gif",
    description: "(Archived) Game engine written in C utilizing Wren as a scripting language to write jam games quickly",
    link: "https://github.com/PaoloMazzon/Astro"
  },
  {
    title: "Bedlam",
    image: "https://img.itch.zone/aW1hZ2UvMTk3MDQ1My8xMTU4NjMxMy5wbmc=/original/q5BFi1.png",
    description: "Tiny metroidvania made in 30 days where you explore through the Nexus to find the commander",
    link: "https://devplo.itch.io/bedlam"
  },
  {
    title: "Spacelink",
    image: "https://img.itch.zone/aW1hZ2UvNzgyMDAzLzQzNzQ5MTcuZ2lm/original/EcrfaO.gif",
    description: "Ludum Dare game where you try to send as many satellites into orbit as possible without collisions",
    link: "https://devplo.itch.io/spacelink"
  },  
];

// <img src="https://icongr.am/devicon/github-original-wordmark.svg?size=128&color=currentColor"></img>
// <img src="https://icongr.am/devicon/linkedin-original.svg?size=128&color=currentColor"></img>

export default function App() {
  return (
    <body id="top">
    <div class="container">
    <div class="hero is-full-screen">
      {/* Nav */}
      <nav className="nav">
      <div className="nav-left">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="nav-center">
        <a className="brand">
          <img src="name.svg" alt=""></img>
        </a>
      </div>
      <div className="nav-right">
        <a href="https://github.com/PaoloMazzon">GitHub</a>
        <a href="https://www.linkedin.com/in/paolo-mazzon/">LinkedIn</a>
      </div>
      
    </nav>
      <div className="container text-center">
      <figure>
          <img
            src="https://private-user-images.githubusercontent.com/17896827/467397585-5f99ac2d-f6d9-412e-b21b-cb8453fff8dd.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3ODU3ODA3OTgsIm5iZiI6MTc4NTc4MDQ5OCwicGF0aCI6Ii8xNzg5NjgyNy80NjczOTc1ODUtNWY5OWFjMmQtZjZkOS00MTJlLWIyMWItY2I4NDUzZmZmOGRkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjA4MDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwODAzVDE4MDgxOFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWMyZTNlZDNhMGIyYWMwZTgxYTgwMDg0YTI3MzZjMWRlZDUyOGY4OWYxMzA3MjhmMWIzOWNkOTQ5OWNhMzgyNmQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JnJlc3BvbnNlLWNvbnRlbnQtdHlwZT1pbWFnZSUyRnBuZyJ9.UNeWgpshR8rGZYFwbUYWz6EgKaUqYaClFa6p455jdSs"
            alt=""
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </figure>
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
                  <img src={project.image}></img>
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
                Interested in working together or just want to say hi? Reach me directly by email or on LinkedIn.
              </p>
              <p>
                <strong>Email:</strong> <a href="mailto:pdmazzon@gmail.com">pdmazzon@gmail.com</a>
              </p>
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
    </div>
    </body>
  );
}