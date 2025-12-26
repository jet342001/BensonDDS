import React from 'react';

function Section({ id, title, children }) {
  return (
    <section id={id} style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container">
        {title && <h2>{title}</h2>}
        {children}
      </div>
    </section>
  );
}

export default Section;
