import React from 'react';

function TestimonialItem({ name, text, rating, photo }) {
  return (
    <div className="testimonial">
      {photo && <img src={photo} alt={name} style={{ borderRadius: '50%', width: '80px', height: '80px' }} />}
      <p>"{text}"</p>
      <p>- {name} ({'★'.repeat(rating)})</p>
    </div>
  );
}

export default TestimonialItem;
