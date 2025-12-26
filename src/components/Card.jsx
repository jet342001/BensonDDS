import React from 'react';

function Card({ title, description, icon }) {
  return (
    <div className="card">
      {icon && <img src={icon} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
