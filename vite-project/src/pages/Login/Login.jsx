import React, { useState } from 'react';
import { Botao, CampoTexto } from '../../components';
import { MagicMotion } from "react-magic-motion";
import axios from 'axios';
import { Usuario } from '../../context/Usuario';

const Login = () => {
  localStorage.clear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const [isCadastro, setIsCadastro] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isCadastro) {
      try {
        await axios.post("https://hackteen-techsphere-proj.onrender.com/Login", {
          nome: nome,
          email: email,
          senha: password
        });
        alert("Conta criada com sucesso!");
        setIsCadastro(false);
        setNome("");
        setEmail("");
        setPassword("");
      } catch (error) {
        alert("Erro ao cadastrar. Tente novamente.");
        console.error(error);
      }
    } else {
      try {
        const response = await axios.get(`http://localhost:3333/contas/contas/contas`, {
          params: {
            email: email,
            senha: password
          }
  
        });

        if (response.data.length > 0) {
          alert("Login realizado com sucesso!");
          localStorage.setItem("usuario", JSON.stringify(response.data[0]));
          window.location.href = "/Forum";
        } else {
          alert("Email ou senha inválidos!");
        }
      } catch (error) {
        alert("Erro ao fazer login. Verifique o servidor.");
        console.error(error);
      }
      
    }
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-11 col-md-6 offset-md-3 text-center mt-5 mb-5">
          <h1>Entre para a conversa!</h1>
          <form onSubmit={handleSubmit} className="bg-dark p-4 rounded-3 shadow-lg">
          <MagicMotion>
            <h3 className="text-light">{isCadastro ? 'Cadastro' : 'Login'}</h3>

            {isCadastro && (
              <div className="mb-3">
                <label htmlFor="nome" className="form-label text-light">Nome</label>
                <div className="d-flex justify-content-center gap-3">
                  <CampoTexto
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="form-control"
                    id="nome"
                    placeholder="Digite o seu nome"
                    required
                  />
                  <i className="d-flex align-items-center bi bi-person-fill text-light"></i>
                </div>
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-light">Email</label>
              <div className="d-flex justify-content-center gap-3">
                <CampoTexto
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="email"
                  placeholder="Digite seu e-mail"
                />
                <i className="d-flex align-items-center bi bi-person-fill text-light"></i>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="senha" className="form-label text-light">Senha</label>
              <div className="d-flex justify-content-center gap-3">
                <CampoTexto
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="senha"
                  placeholder="Digite sua senha"
                />
                <i className="d-flex align-items-center bi bi-key-fill text-light"></i>
              </div>
            </div>

            <div className="mb-3 form-check d-inline-flex text-light">
              <input type="checkbox" className="form-check-input me-1" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Lembre de mim</label>
            </div>
            <br />
            <a href="#" className="text-decoration-none">Esqueci minha senha</a>
            <hr className="text-light" />
            <p className="text-light">
              {isCadastro ? "Já tem conta?" : "Não tem conta?"}{" "}
              <a href="#" onClick={() => setIsCadastro(!isCadastro)}>
                {isCadastro ? "Entrar" : "Cadastrar-se"}
              </a>
            </p>

            </MagicMotion>
            
              <Botao texto={isCadastro ? "Criar conta" : "Entrar"} tipo="login" />

            </form>
        </div>
      </div>
    </div>
  );
};

export { Login };
