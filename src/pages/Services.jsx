import React from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { siteData } from '../data';

function Services() {
  return (
    <Section title="Our Services">
      <div className="grid">
        {siteData.services.map((service, idx) => <Card key={idx} {...service} />)}
      </div>
    </Section>
  );
}

export default Services;
