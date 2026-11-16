import React from 'react';
import Header from './Header'; // Import Header component
import Footer from './Footer'; // Import Footer component

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main> {/* This will render the page content */}
      <Footer />
    </div>
  );
}

export default Layout;
