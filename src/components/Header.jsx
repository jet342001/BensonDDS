import React from 'react';
import { Link } from 'react-router-dom';

function Header({ navItems = [] }) {
  return (
    <header style={{ background: '#fff', boxShadow: '0 2px 10px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }} className="container">
        <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>Brady E. Benson DDS</Link>
        <div style={{ display: 'flex', gap: '30px' }}>
          {navItems.map(({ to, label }) => <Link key={to} to={to}>{label}</Link>)}
          <Link to="/contact" style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>Book Appointment</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
