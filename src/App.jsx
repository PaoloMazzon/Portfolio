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

const skills = [
  {
    name: "Docker",
    image: "https://devicons.io/devicons/icons/docker-icon.svg",
    description: "Used for dev environments and more recently deploying to my K8s cluster.",
    example_projects: [
      {
        name: "DailyServer deployments",
        link: "https://github.com/PaoloMazzon/DailyServer/blob/main/deploy/Dockerfile"
      },
      {
        name: "Portfolio deployments",
        link: "https://github.com/PaoloMazzon/Portfolio/blob/main/Dockerfile"
      }
    ]
  },
  {
    name: "AWS",
    image: "https://devicons.io/devicons/icons/aws.svg",
    description: "Used consistently in my professional career and hackathons.",
    example_projects: []
  },
  {
    name: "Cloudflare",
    image: "https://devicons.io/devicons/icons/cloudflare-icon.svg",
    description: "How I handle authentication between my GitHub actions CI/CD setup and local Kubernetes cluster.",
    example_projects: []
  },
  {
    name: "C",
    image: "https://devicons.io/devicons/icons/c.svg",
    description: "My favorite language. Dangerous and powerful, extremly simple and beautiful.",
    example_projects: [
      {
        name: "Vulkan2D",
        link: "https://github.com/PaoloMazzon/Vulkan2D"
      },
      {
        name: "Astro",
        link: "https://github.com/PaoloMazzon/Astro"
      },
      {
        name: "Octarine",
        link: "https://github.com/PaoloMazzon/Octarine"
      },
      {
        name: "Disorderly Conduct",
        link: "https://devplo.itch.io/disorderly-conduct"
      },
      {
        name: "Bleeding in the Blur",
        link: "https://github.com/PaoloMazzon/bleedingintheblur"
      },
    ]
  },
  {
    name: "GitHub",
    image: "https://devicons.io/devicons/icons/github-icon.svg",
    description: "Used professionally and hobbyist. ",
    example_projects: []
  },
  {
    name: "Kubernetes",
    image: "https://devicons.io/devicons/icons/kubernetes.svg",
    description: "This website is hosted on my Kubernetes cluster.",
    example_projects: []
  },
  {
    name: "SQLite",
    image: "https://devicons.io/devicons/icons/sqlite-icon.svg",
    description: "",
    example_projects: [
      {
        name: "DailyServer",
        link: "https://github.com/PaoloMazzon/DailyServer"
      }
    ]
  },
  {
    name: "C++",
    image: "https://devicons.io/devicons/icons/c-plusplus.svg",
    description: "Mostly used professionally, learned academically.",
    example_projects: [
      {
        name: "Modern Renderer",
        link: "https://github.com/PaoloMazzon/modern-renderer"
      }
    ]
  },
  {
    name: "Rust",
    image: "https://devicons.io/devicons/icons/rust.svg",
    description: "Personal favorite modern language, elagnt with amazing libraries like Tokio.",
    example_projects: [
      {
        name: "Daily Server",
        link: "https://github.com/PaoloMazzon/dailyserver"
      }
    ]
  },
  {
    name: "Vulkan",
    image: "https://devicons.io/devicons/icons/vulkan.svg",
    description: "Used to make all my games and experiment with computer graphics.",
    example_projects: [
      {
        name: "Modern Renderer",
        link: "https://github.com/PaoloMazzon/modern-renderer"
      },
      {
        name: "Vulkan2D",
        link: "https://github.com/PaoloMazzon/vulkan2d"
      }
    ]
  },
  {
    name: "Ubuntu",
    image: "https://devicons.io/devicons/icons/ubuntu.svg",
    description: "Standin for all Linux, as I've used it extensively for years professionally and recreationally.",
    example_projects: []
  },
  {
    name: "Bash",
    image: "https://devicons.io/devicons/icons/bash-icon.svg",
    description: "I mostly prefer Fish these days, but Bash does all my scripting. See any of my CI/CD pipelines.",
    example_projects: [
      {
        name: "Modern Renderer CI/CD",
        link: "https://github.com/PaoloMazzon/modern-renderer/blob/main/.github/workflows/build-and-test.yaml"
      },
      {
        name: "Portfolio CI/CD",
        link: "https://github.com/PaoloMazzon/Portfolio/blob/main/.github/workflows/containerize.yaml"
      },
      {
        name: "Daily Server CI/CD",
        link: "https://github.com/PaoloMazzon/DailyServer/blob/main/.github/workflows/test.yaml"
      },
    ]
  },
]


export default function App() {
  return (
    <body id="top">
    <div class="container">
    <div class="hero is-full-screen">
      {/* Nav */}
      <nav className="nav">
      <div className="nav-left">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
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

        {/* Skills */}
        <section id="skills" style={{ padding: "3rem 0" }}>
          <h2>Skills</h2>
          <div className="row">
            {skills.map((skill) => (
              <div className="col-3">
              <div className="card">
                <h4>
                  <img src={skill.image} style={{ maxWidth: '10%', height: 'auto', verticalAlign: 'middle', marginRight: '10px' }}/>
                  &#124; {skill.name}
                </h4>
                <p>{skill.description}</p>
                { skill.example_projects.length != 0 ?
                <details className="dropdown">
                  <summary>Projects</summary>
                  <div className="card" style={{height: 'auto'}}>
                    {skill.example_projects.map((proj) => (
                      <a href={proj.link}>{proj.name}</a>
                    ))}
                  </div>
                </details>
                 : <></>}
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
      <footer className="text-center" style={{ padding: "1.5rem 0" }}>
        <p className="is-marginless">
          &copy; {new Date().getFullYear()} Paolo Mazzon. All rights reserved.
        </p>
      </footer>
    </div>
    </div>
    </body>
  );
}