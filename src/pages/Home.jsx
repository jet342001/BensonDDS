import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { siteData } from '../data';

function Home() {
  return (
    <>
      <Hero 
        title="Friendly Neighborhood Dentist in Brigham City" 
        subtitle="Conservative, Comprehensive Care for Your Whole Family" 
      />
      <Section title="Our Services" className="section">
        <div className="grid">
          {siteData.services.map((service, i) => (
            <Card key={i} {...service} />
          ))}
        </div>
      </Section>
    </>
  );
}

export default Home;