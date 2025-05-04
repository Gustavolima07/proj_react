import React, { useState } from 'react';
import './Form.css';

function Form({ onArquivoEnviado }) {
  const [arquivo, setArquivo] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [arquivoEnviadoData, setArquivoEnviadoData] = useState(null);
  const [erroEnvio, setErroEnvio] = useState('');

  const handleArquivoChange = (event) => {
    setArquivo(event.target.files[0]);
  };

  const handleMensagemChange = (event) => {
    setMensagem(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!arquivo) {
      alert('Selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    formData.append('arquivo', arquivo);
    formData.append('mensagem', mensagem);

    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setArquivoEnviadoData(data);
        setErroEnvio('');
        if (onArquivoEnviado) {
          onArquivoEnviado(data);
        }
        setArquivo(null);
        setMensagem('');
      } else {
        const errorText = await response.text();
        setErroEnvio(`Erro no envio: ${errorText}`);
        setArquivoEnviadoData(null);
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      setErroEnvio('Ocorreu um erro ao enviar o arquivo.');
      setArquivoEnviadoData(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formulario-arquivo">
        <input
          type="file"
          id="arquivo"
          name="arquivo"
          onChange={handleArquivoChange}
          required
        />

        <textarea
          id="mensagem"
          name="mensagem"
          value={mensagem}
          onChange={handleMensagemChange}
          rows="4"
          placeholder="Digite uma mensagem opcional..."
        />

        <button type="submit">Enviar Arquivo</button>
      </form>

      {erroEnvio && <p className="erro-mensagem">{erroEnvio}</p>}

      {arquivoEnviadoData && (
        <div className="card-arquivo">
          <h3>Arquivo Enviado!</h3>
          <p>Nome: {arquivoEnviadoData.nome}</p>
          <button onClick={() => window.open(arquivoEnviadoData.url, '_blank')}>
            Abrir Arquivo
          </button>
        </div>
      )}
    </div>
  );
}

export { Form };