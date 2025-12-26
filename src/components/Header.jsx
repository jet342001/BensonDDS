import React from 'react';
import { Link } from 'react-router-dom';

function Header({ navItems }) {
  return (
    <header className="header">
      <nav className="nav container">
        <Link to="/">         
          <img src="https://bradyebensondds.com/wp-content/uploads/2020/03/cropped-Website-Header-Enlarged-new-slogan-342x73.png" alt="Benson DDS" />
        </Link>
        <div className="nav-links">
          {navItems.map(({ to, label }) => (
            <Link key={to} to={to}>{label}</Link>
          ))}
          <Link to="/contact" className="btn-primary">Book Appointment</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;