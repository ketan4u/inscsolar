import React from 'react';

function Address() {
  return (
    <section id="address" className="address">
      <div className="container">
        <h2>Our Headquarters</h2>
        <p>Visit us or reach out at:</p>
        <div className="address-details">
          <p><strong>Address:</strong> 83-B, N.E.B., Subhash Nagar, Alwar, Rajasthan</p>
          <p><strong>Phone:</strong> +91 8005948139</p>
          <p><strong>Email:</strong> inscsolarenergy@gmail.com</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.867690922427!2d76.62539667490483!3d27.56661643168541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397299002cc4abff%3A0xa8cdeb21da6e2d7f!2sInsc%20Solar%20Enterprises%20LLP!5e0!3m2!1sen!2sin!4v1733303316576!5m2!1sen!2sin"
          width="50%" 
          height="350"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          title="Google Map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Address;
