import React from 'react';
import "./Cards.css";

function Cards({ title, imageUrl }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-body">
        <h2>{title}</h2>
        <p>postagem</p>
      </div>
    </div>
  );
}

export { Cards };