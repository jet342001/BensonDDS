import React from 'react';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';
import { siteData } from '../../data';

function Home() {
  return (
    <>
      <Hero image={siteData.heroImage} title="Friendly Neighborhood Dentist in Brigham City" subtitle="Conservative, Comprehensive Care for Your Family" />
      <Section title="Featured Services">
        <div className="grid">
          {siteData.services.slice(0, 4).map((service, idx) => <Card key={idx} {...service} />)}  {/* Reusable */}
        </div>
      </Section>
    </>
  );
}

export default Home;
