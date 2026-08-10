import React from "react";

const projects = [
  {
    title: "Vulkan2D",
    image: "vk2d.gif",
    description: "Fairly advanced 2D renderer written with C and Vulkan over many years.",
    link: "https://github.com/PaoloMazzon/Vulkan2D",
  },
  {
    title: "Disorderly Conduct",
    image: "dc.gif",
    description: "Fast-paced sidescrolling shoot-em-up made in a week with really goofy physics, utilizes Octarine to allow uncapped framerates with predictable physics.",
    link: "https://devplo.itch.io/disorderly-conduct",
  },
  {
    title: "Octarine",
    image: "https://github.com/PaoloMazzon/Octarine/raw/main/docs/demo.gif",
    description: "Game framework written in C providing effortless fixed-timestep logic and interpolation with a fairly deep and intuitive asset-loading pipeline.",
    link: "https://github.com/PaoloMazzon/octarine",
  },
  {
    title: "Bleeding in the Blur",
    image: "bitb.gif",
    description: "Small in-development roguelike game written in C with a unique skill system.",
    link: "https://github.com/PaoloMazzon/BleedingInTheBlur"
  },
  {
    title: "Platformer Demo",
    image: "platformer.png",
    description: "Small demo of an extremely detailed implementation of platformer logic and physics.",
    link: "https://github.com/PaoloMazzon/Platformer-Demo"
  },
  {
    title: "Sea of Clouds",
    image: "soc.gif",
    description: "Small roguelike game made in 30 days where you ascend through the clouds and fight many different kinds of monsters, each with unique AI.",
    link: "https://devplo.itch.io/sea-of-clouds"
  },
  {
    title: "Astro Engine",
    image: "astro.gif",
    description: "(Archived) Game engine written in C utilizing Wren as a scripting language to write jam games quickly.",
    link: "https://github.com/PaoloMazzon/Astro"
  },
  {
    title: "Bedlam",
    image: "bedlam.png",
    description: "Tiny metroidvania made in 30 days where you explore through the Nexus to find the commander, finding many power-ups, weapons, and spells along the way. Written using Astro Engine and scripted with Wren.",
    link: "https://devplo.itch.io/bedlam"
  },
  {
    title: "Spacelink",
    image: "sl.gif",
    description: "Ludum Dare game where you try to send as many satellites into orbit as possible without collisions.",
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
        <a href="https://github.com/PaoloMazzon">GitHub<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 1 24 24"><path fill="currentColor" d="M8.2 20q-1.742 0-2.971-1.229T4 15.8q0-.846.308-1.611q.308-.766.911-1.37l3.023-2.998l.708.708l-3.023 3.004q-.463.463-.705 1.049T4.981 15.8q0 1.34.94 2.27Q6.86 19 8.2 19q.633 0 1.221-.241q.589-.242 1.052-.705l3.018-3.004l.713.714l-3.023 2.998q-.604.604-1.37.92Q9.047 20 8.2 20m1.84-5.346l-.694-.714l4.614-4.613l.713.713zm5.718-.47l-.708-.693l3.023-3.018q.444-.444.683-1.017t.238-1.206q0-1.346-.936-2.298Q17.12 5 15.775 5q-.633 0-1.218.241q-.586.242-1.03.686L10.51 8.95l-.694-.708l3.003-3.004q.604-.604 1.37-.92Q14.954 4 15.8 4q1.742 0 2.968 1.239t1.226 2.986q0 .84-.304 1.596q-.305.756-.91 1.36z" /></svg></a>
        <a href="https://www.linkedin.com/in/paolo-mazzon/">LinkedIn <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 1 24 24"><path fill="currentColor" d="M8.2 20q-1.742 0-2.971-1.229T4 15.8q0-.846.308-1.611q.308-.766.911-1.37l3.023-2.998l.708.708l-3.023 3.004q-.463.463-.705 1.049T4.981 15.8q0 1.34.94 2.27Q6.86 19 8.2 19q.633 0 1.221-.241q.589-.242 1.052-.705l3.018-3.004l.713.714l-3.023 2.998q-.604.604-1.37.92Q9.047 20 8.2 20m1.84-5.346l-.694-.714l4.614-4.613l.713.713zm5.718-.47l-.708-.693l3.023-3.018q.444-.444.683-1.017t.238-1.206q0-1.346-.936-2.298Q17.12 5 15.775 5q-.633 0-1.218.241q-.586.242-1.03.686L10.51 8.95l-.694-.708l3.003-3.004q.604-.604 1.37-.92Q14.954 4 15.8 4q1.742 0 2.968 1.239t1.226 2.986q0 .84-.304 1.596q-.305.756-.91 1.36z" /></svg></a>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-3 -3 24 24"><path fill="currentColor" d="M8.2 20q-1.742 0-2.971-1.229T4 15.8q0-.846.308-1.611q.308-.766.911-1.37l3.023-2.998l.708.708l-3.023 3.004q-.463.463-.705 1.049T4.981 15.8q0 1.34.94 2.27Q6.86 19 8.2 19q.633 0 1.221-.241q.589-.242 1.052-.705l3.018-3.004l.713.714l-3.023 2.998q-.604.604-1.37.92Q9.047 20 8.2 20m1.84-5.346l-.694-.714l4.614-4.613l.713.713zm5.718-.47l-.708-.693l3.023-3.018q.444-.444.683-1.017t.238-1.206q0-1.346-.936-2.298Q17.12 5 15.775 5q-.633 0-1.218.241q-.586.242-1.03.686L10.51 8.95l-.694-.708l3.003-3.004q.604-.604 1.37-.92Q14.954 4 15.8 4q1.742 0 2.968 1.239t1.226 2.986q0 .84-.304 1.596q-.305.756-.91 1.36z" /></svg>
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