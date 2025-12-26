import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Testimonials from './pages/Testimonials.jsx';
import Payments from './pages/Payments.jsx';
import Contacts from './pages/Contacts.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/payments', label: 'Payments' },
  { to: '/contact', label: 'Contact' },
];

function App() {
  return (
    <Layout navItems={navItems}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
    </Layout>
  );
}

export default App;
