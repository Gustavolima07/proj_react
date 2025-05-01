import React from 'react';
import { Cards } from '../../components/Cards';
import { Profile } from '../../components/Profile';

const Perfil = () => {
  console.log('Componente Perfil carregado');

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-11 col-md-6 offset-md-3 text-center mt-5 mb-4">
          <h1>Bem-vindo ao Perfil!</h1>
          <p>Esta é a página inicial do nosso site.</p>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8">
          <Profile />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 mb-4">
          <Cards title="Card 1" imageUrl="https://via.placeholder.com/300/FF0000" />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Cards title="Card 2" imageUrl="https://via.placeholder.com/300/00FF00" />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Cards title="Card 3" imageUrl="https://via.placeholder.com/300/0000FF" />
        </div>
        <div className="col-12 col-md-6 mb-4">
          <Cards title="Card 4" imageUrl="https://via.placeholder.com/300/FFFF00" />
        </div>
      </div>
    </div>
  );
};

export { Perfil };
