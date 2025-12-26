import React from 'react';

function Hero({ image, title, subtitle, ctaText = "Schedule Now", ctaLink = "/contact" }) {
  return (
    <section style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image}) center/cover no-repeat`, height: '80vh', display: 'flex', alignItems: 'center', textAlign: 'center', color: '#fff' }}>
      <div className="container">
        <h1 style={{ fontSize: '48px' }}>{title}</h1>
        <p style={{ fontSize: '24px' }}>{subtitle}</p>
        <a href={ctaLink} style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>{ctaText}</a>
      </div>
    </section>
  );
}

export default Hero;
