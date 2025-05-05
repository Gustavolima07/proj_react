import React from 'react';
import { Cards } from '../../components/Cards';
import { Profile } from '../../components/Profile'; 

const Perfil = () => {

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-11 col-md-6 offset-md-3 text-center mt-5 mb-4">
          <br />
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="col-12 col-md-8">
          <Profile />
        </div>
      </div>
      <div className="row">
        <div className="row align-items-start">
          <Cards title="Projeto_Calculadora" descricao="Projeto de uma Calculadora Simples desenvolvida no Visual Studio" />
        </div>
        <div className="row align-items-start">
          <Cards title="Projeto_Jogo_da_velha" descricao="Projeto de Jogo da Velha"/>
        </div>
        <div className="row align-items-start">
          <Cards title="Projeto_GamesWorld" descricao="Projeto de um Jogo chamado GamesWorld"/>
        </div>
        <div className="row align-items-start">
          <Cards title="Projeto_Aulas" descricao="Aulas"/>
        </div>
      </div>
    </div>
  );
};

export { Perfil };
