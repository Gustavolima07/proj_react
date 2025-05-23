import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Profile.css';
import { Usuario } from '../../context/Usuario';
import { Botao } from '../Botao';


function Profile() {
   const data =JSON.parse((localStorage.getItem("usuario")));
  const usuario = new Usuario(data.nome, data.email);
    
    const [user, setUser] = useState({
    name: usuario.nome ,
    email: usuario.email ,
    bio: 'Desenvolvedor apaixonado por tecnologia e café.',
    avatar: 'https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-botao-de-perfil-do-instagram.png',
    isProfessional: false,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(user);
  const [newAvatar, setNewAvatar] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.checked });
  };

  const handleSave = () => {
    setUser({ ...form, avatar: newAvatar || form.avatar });
    setIsEditing(false);
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = () => {
    const nullUser = new Usuario(null, null, null, null, null, null, null, null, null, null, null, null);
    localStorage.setItem("usuario", JSON.stringify(nullUser));
   window.location.href = "/Login";
    setUser({
      name: null,
      email: null,
      bio: null,
      avatar: null,
      isProfessional: false,
    });
  };

  return (
    <div className="profile-container">
      <img src={newAvatar || user.avatar} alt="Avatar" className="profile-avatar" />
      {isEditing ? (
        <>
          <input type="file" accept="image/*" onChange={handleAvatarChange} />
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
            Conta para Empresas
          </label>
          <button style={{ borderRadius: '10px' }} onClick={handleSave}>
            Salvar
          </button>
        </>
      ) : (
        <>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.bio}</p>
          <div className="header-actions">
            {user.isProfessional && (
              <span className={`professional-badge ${user.isProfessional ? 'fundo-azul' : ''}`}>
                Empresa
              </span>
            )}
            <button className="edit-button" onClick={() => setIsEditing(true)}>
              Editar Perfil
              </button>
            <NavLink to="/Login" className="text-decoration-none text-light fs-2">  
                <Botao texto="Sair" tipo="atencao" onClick={handleLogout}></Botao>
      
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export { Profile };