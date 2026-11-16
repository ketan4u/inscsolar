import React from 'react';

function EnquiryForm() {
  return (
    <section id="enquiry" className="enquiry">
      <div className="container">
        <h2>Enquire Now</h2>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScEWexoA90PwxUWlslusyrmHnLNbQMR6A1TlrgONAY231LBug/viewform?embedded=true" 
          width="100%" 
          height="600px" 
          frameBorder="0"
          title="Enquiry Form">
          Loading…
        </iframe>
      </div>
    </section>
  );
}

export default EnquiryForm;
