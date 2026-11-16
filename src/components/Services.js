import React from 'react';

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Our Services</h2>
        
        <div className="service">
          <div className="service-info">
            <h3>Rooftop Systems</h3>
            <p>We offer 1KW to 500KW installations for industries, commercial buildings, and residential applications.</p>
            <div className="service-image">
            <img src="rooftop-service.jpg" alt="Rooftop Systems" />
          </div>
          </div>
        </div>

        <div className="service">
          <div className="service-info">
            <h3>Ground-Mounted Systems</h3>
            <p>We provide large-scale installations ranging from 1MW to 100MW for optimal energy generation.</p>
            <div className="service-image">
            <img src="ground-mounted-service.jpg" alt="Ground Mounted Systems" />
          </div>
          </div>
        </div>

        <div className="service">
          <div className="service-info">
            <h3>Solar Parks</h3>
            <p>We specialize in solar parks under the PM Kusum Yojna, helping farmers and organizations create sustainable energy solutions.</p>
            <div className="service-image">
            <img src="solar-parks-service.jpg" alt="Solar Parks" />
          </div>
          </div>
        </div>

        <div className="service">
          <div className="service-info">
            <h3>Solar Pumps</h3>
            <p>Submersible, open well, and monoblock solar pumps designed to provide reliable and efficient irrigation solutions.</p>
            <div className="service-image">
            <img src="solar-pumps-service.jpg" alt="Solar Pumps" />
          </div>
          </div>
        </div>

        <div className="service">         
          <div className="service-info">
            <h3>Solar Street Lights</h3>
            <p>Cost-effective and durable solar street lighting solutions for streets, communities, and industrial areas.</p>
            <div className="service-image">
            <img src="solar-street-lights-service.jpg" alt="Solar Street Lights" />
          </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
