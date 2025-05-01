import React, { useState } from 'react';
import './Form.css';

function Form({ onArquivoEnviado }) {
  const [arquivo, setArquivo] = useState(null);

  const handleArquivoChange = (event) => {
    setArquivo(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!arquivo) {
      alert('Selecione um arquivo.');
      return;
    }

    const formData = new FormData();
    formData.append('arquivo', arquivo);

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
      <button type="submit">Enviar Arquivo</button>
    </form>
  );
}

export { Form };