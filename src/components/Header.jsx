import React from 'react';
import { Link } from 'react-router-dom';

function Header({ navItems = [] }) {
  return (
    <header style={{ background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }} className="container">
        <Link to="/">         
          <img src="https://bradyebensondds.com/wp-content/uploads/2020/03/cropped-Website-Header-Enlarged-new-slogan-342x73.png" alt="Benson DDS" />
        </Link>
        <div style={{ display: 'flex', gap: '30px' }}>
          {navItems.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
          <Link to="/contact" style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>Book Appointment</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
