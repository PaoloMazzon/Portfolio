import React from "react";

const projects = [
  {
    title: "Vulkan2D",
    image: "vk2d.gif",
    description: "Advanced 2D renderer written with C and Vulkan",
    link: "https://github.com/PaoloMazzon/Vulkan2D",
  },
  {
    title: "Disorderly Conduct",
    image: "dc.gif",
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
    image: "platformer.png",
    description: "Small demo of an extremely detailed implementation of platformer logic and physics",
    link: "https://github.com/PaoloMazzon/Platformer-Demo"
  },
  {
    title: "Sea of Clouds",
    image: "soc.gif",
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
    image: "bedlam.png",
    description: "Tiny metroidvania made in 30 days where you explore through the Nexus to find the commander",
    link: "https://devplo.itch.io/bedlam"
  },
  {
    title: "Spacelink",
    image: "sl.gif",
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
            src="banner.png"
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
          &copy; {new Date().getFullYear()} Paolo Mazzon. All rights reserved.
        </p>
      </footer>
    </div>
    </div>
    </body>
  );
}