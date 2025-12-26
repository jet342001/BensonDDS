import React from 'react';

function Hero({ title, subtitle }) {
  return (
    <section className="hero">
      <div className="container hero-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <a href="/contact" className="btn-primary">Schedule Now</a>
      </div>
    </section>
  );
}

export default Hero;
