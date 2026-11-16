import React from 'react';
import Layout from '../components/Layout'; // Import the Layout component
import EnquiryForm from '../components/EnquiryForm'; // Import EnquiryForm component
import Address from '../components/Address'; // Import Address component
import Services from '../components/Services'; // Import Services component
import Projects from '../components/Projects'; // Import Projects component
import Hero from '../components/Hero';
import About from '../components/About';
import SocialMedia from '../components/SocialMedia';


function Home() {
  return (
    <div className="home">
      <Hero />

      {/* Include various components */}
      <About />
      <Services />
      <Projects />
      <EnquiryForm />
      <SocialMedia />
      <Address />
    </div>
  );
}

export default Home;
