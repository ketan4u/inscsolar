import React from 'react';

function SolarSystems() {
  return (
    <section id="solar-systems" className="solar-systems">
      <div className="container">
        <h2>Types of Solar Systems</h2>
        <div className="solar-types">
          <div className="solar-type">
            <h3>On-Grid Systems</h3>
            <p>On-grid solar systems generate power and are connected to the utility power grid. Excess power is sent back to the grid, and users are compensated for it.</p>
          </div>
          <div className="solar-type">
            <h3>Off-Grid Systems</h3>
            <p>Off-grid systems operate independently of the utility grid. They include batteries to store solar power, ensuring power availability even during outages.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarSystems;
