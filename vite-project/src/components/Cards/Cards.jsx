import React, { useState } from 'react';
import "./Cards.css";

function Cards({ title: initialTitle, descricao: initialDescricao, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [descricao, setDescricao] = useState(initialDescricao);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    if (onEdit) {
      onEdit({ title, descricao });
    }
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescricaoChange = (event) => {
    setDescricao(event.target.value);
  };

  return (
    <div className="card">
      <div className="card-body">
        {isEditing ? (
          <>
            <input
              type="text"
              className="card-edit-input"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              className="card-edit-textarea"
              value={descricao}
              onChange={handleDescricaoChange}
            />
            <button className="card-edit-button" onClick={handleSave}>Salvar</button>
          </>
        ) : (
          <>
            <h2 className="card-title">{title}</h2>
            <p className="card-text">{descricao}</p>
            <button className="card-edit-button" onClick={handleEdit}>Editar</button>
          </>
        )}
      </div>
    </div>
  );
}

export { Cards };