import React from 'react';
import Section from '../components/Section';
import { siteData } from '../../data';

function About() {
  return (
    <Section title="Meet Dr. Brady Benson">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        <p>{siteData.bio}</p>
        <img src={siteData.doctorPhoto} alt="Dr. Benson" style={{ borderRadius: '20px', maxHeight: '50%' }} />
      </div>
      <img src={siteData.officePhoto} alt="Office" style={{ marginTop: '40px', width: '100%' }} />
    </Section>
  );
}

export default About;
