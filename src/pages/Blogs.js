import React from 'react';
import WhySolar from '../components/WhySolar'; // Import WhySolar component
import SolarSystems from '../components/SolarSystems';
import SocialMedia from '../components/SocialMedia';

function Blogs() {
  return (
    <section className="blogs">
      <div className="container">
        <h2>Blogs</h2>
        <p>Welcome to our blog section! Here, you'll find the latest updates, insights, and articles about solar energy, sustainability, and more.</p>
        <div className="blog-list">
          <div className="blog-item">
            <h3>Benefits of Solar Energy</h3>
            <p>Discover how solar energy can save costs and contribute to a greener planet.</p>
            <a href="#why-solar" className="read-more">Read More</a>
          </div>
          <div className="blog-item">
            <h3>On-Grid vs Off-Grid Systems</h3>
            <p>Understand the differences between on-grid and off-grid solar systems.</p>
            <a href="#solar-systems" className="read-more">Read More</a>
          </div>
        </div>
          <WhySolar />
          <SolarSystems />
          <SocialMedia />

      </div>
    </section>
  );
}

export default Blogs;
