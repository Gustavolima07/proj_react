import React, { useState } from 'react';
import './Form.css';

function Form({ onArquivoEnviado }) {
  const [arquivo, setArquivo] = useState(null);
  const [mensagem, setMensagem] = useState('');

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
        const data = await response.text();
        alert(data);
        if (onArquivoEnviado) {
          onArquivoEnviado(data);
        }
        setArquivo(null);
        setMensagem('');
      } else {
        const error = await response.text();
        alert(`Erro no envio: ${error}`);
      }
    } catch (error) {
      console.error('Erro ao enviar o arquivo:', error);
      alert('Ocorreu um erro ao enviar o arquivo.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-arquivo">
      <label htmlFor="arquivo">Selecione um arquivo:</label>
      <input
        type="file"
        id="arquivo"
        name="arquivo"
        onChange={handleArquivoChange}
        required
      />

      <label htmlFor="mensagem">Mensagem opcional:</label>
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
  );
}

export { Form };