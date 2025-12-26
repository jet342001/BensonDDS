import React from 'react';
import Section from '../components/Section';
import PaymentIcon from '../components/PaymentIcon';
import { siteData } from '../../data';

function Payments() {
  return (
    <Section title="Payment Options">
      <p>We gladly accept: {siteData.payments.accepted.join(', ')} and more.</p>
      <p>Financing through: {siteData.payments.financing.join(', ')}.</p>
      <PaymentIcon src={siteData.payments.icons} alt="Payment Icons" />
    </Section>
  );
}

export default Payments;
