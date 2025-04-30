import React from 'react';
import "./Cards.css";

function Cards({ title, description, imageUrl }) {
    return (
      <div className="card">
        <img src={imageUrl} alt={title} />
        <div className="col-md-4">
        <img src="" className="img-fluid rounded-start" alt="teste" />
        </div>
        <h2>Teste</h2>
        <p>postagem</p>
      </div>
    );
  }
  
  export { Cards };    