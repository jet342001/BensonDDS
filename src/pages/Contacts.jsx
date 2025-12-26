import React from 'react';
import Section from '../components/Section';
import { siteData } from '../data';

function Contacts() {
  return (
    <Section title="Come See Us">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <input type="text" placeholder="Name" />
          {/* Add more fields */}
          <button style={{ background: '#007bff', color: '#fff', padding: '15px' }}>Send</button>
        </form>
        <div>
          <img src={siteData.contact.mapUrl} alt="Map" style={{ width: '100%' }} />
          <p>{siteData.contact.address}</p>
          <p>{siteData.contact.hours}</p>
        </div>
      </div>
    </Section>
  );
}

export default Contacts;
