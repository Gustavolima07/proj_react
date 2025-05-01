import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({
    name: 'João da Silva',
    email: 'joao@email.com',
    bio: 'Desenvolvedor apaixonado por tecnologia e café.',
    avatar: '...',
    isProfessional: false, // Adicionando o estado para conta profissional
  });

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSave = () => {
    setUser(form);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <img src={user.avatar} alt="Avatar" className="profile-avatar" />
      {isEditing ? (
        <>
          <input name="name" value={form.name} onChange={handleChange} />
          <input name="email" value={form.email} onChange={handleChange} />
          <textarea name="bio" value={form.bio} onChange={handleChange} />
          <label>
            <input
              type="checkbox"
              name="isProfessional"
              checked={form.isProfessional}
              onChange={handleCheckboxChange}
            />
            Conta profissional
          </label>
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          {user.isProfessional && <span className="professional-badge">Conta Profissional</span>}
          <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
        </>
      )}
    </div>
  );
}

export { Profile };