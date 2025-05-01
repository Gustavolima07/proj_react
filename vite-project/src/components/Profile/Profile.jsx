import React, { useState } from 'react';
import './Profile.css';

function Profile() {
  const [user, setUser] = useState({
    name: 'João da Silva',
    email: 'joao@email.com',
    bio: 'Desenvolvedor apaixonado por tecnologia e café.',
    avatar: '...',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
          <button onClick={handleSave}>Salvar</button>
        </>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <button onClick={() => setIsEditing(true)}>Editar Perfil</button>
        </>
      )}
    </div>
  );
}

export { Profile };
