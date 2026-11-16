import React from 'react';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Our Projects</h2>
        <div className="project-list">
        <div className="project">
          <img src="chephebozu.jpg" alt="Chephebozu CHC Project" />
          <p><span className="projectHighlight">Chephebozu CHC:</span> 15KW Hybrid System (World Bank-funded)</p>
        </div>
        <div className="project">
          <img src="adaniswitch.jpg" alt="Adani Switchyard Project" />
          <p><span className="projectHighlight">Adani Switchyard:</span> 5MW I&C Uttar Pradesh</p>
        </div>
        <div className="project">
          <img src="kimipfuphe.jpg" alt="Kimipfuphe PHC Project" />
          <p><span className="projectHighlight">Kimipfuphe PHC:</span> 6KW Hybrid Project (World Bank-funded)</p>
        </div>
        <div className="project">
          <img src="matrix_solar.jpg" alt="Matrix Solar Project" />
          <p><span className="projectHighlight">Matrix Solar:</span> 19MW O&M</p>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projects;
