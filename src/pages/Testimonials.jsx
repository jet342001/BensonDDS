import React from 'react';
import Section from '../components/Section';
import TestimonialItem from '../components/TestimonialItem';
import { siteData } from '../../data';

function Testimonials() {
  return (
    <Section title="What Our Patients Say">
      <div className="grid">
        {siteData.testimonials.map((testimonial, idx) => <TestimonialItem key={idx} {...testimonial} />)}
      </div>
    </Section>
  );
}

export default Testimonials;
