import React, { useState } from "react";
import "./forum.css";

const Forum = () => {
  const [topics, setTopics] = useState([
    {
      id: 1,
      title: "Projeto - Jogos",
      description: "Código base para um jogo simples de celular.",
      author: "Maria Alice Silva",
      comments: [],
      canDownload: true,
      codeExample: `function startGame() {
        console.log("Iniciando jogo...");
      }`
    },
    {
      id: 2,
      title: "Comandos CSS",
      description: "CSS para uma página de perfil para site.",
      author: "Pedro Lucas",
      comments: [],
      canDownload: false,
      codeExample: `body {
        background-color: #f0f0f0;
        font-family: Arial, sans-serif;
      }`
    },
    {
      id: 3,
      title: "Página de login",
      description: "Uma página de login pronta.",
      author: "Vinícius Lara",
      comments: [],
      canDownload: true,
      codeExample: `const loginUser = (username, password) => {
        return username === "admin" && password === "123";
      }`
    }
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [comment, setComment] = useState("");

  const addComment = (id) => {
    setTopics(prevTopics =>
      prevTopics.map((topic) =>
        topic.id === id ? { ...topic, comments: [...topic.comments, comment] } : topic
      )
    );
    setComment("");
  };

  return (
    <div className="forum-container">
      <div className="projects-section">
        {topics.map((topic) => (
          <div className="topic-card" onClick={() => setSelectedTopic(topic)} key={topic.id}>
            <h3>{topic.title}</h3>
            <p className="author-name"><strong>Autor:</strong> {topic.author}</p>
            <button onClick={() => setSelectedTopic(topic)}>Ver Detalhes</button>
          </div>
        ))}
      </div>

      <div className="details-section">
        {selectedTopic && selectedTopic.canDownload && (
          <button className="download-button">Baixar Arquivo</button>
        )}

        {selectedTopic ? (
          <>
            <div className="details-header">
              <h2>{selectedTopic.title}</h2>
              <p className="description">{selectedTopic.description}</p>
              <p className="author"><strong>Autor:</strong> {selectedTopic.author}</p>
            </div>

            {selectedTopic.codeExample && (
              <div className="code-container">
                <pre>
                  <code>{selectedTopic.codeExample}</code>
                </pre>
              </div>
            )}

            <div className="comment-section">
              <input
                type="text"
                placeholder="Adicione um comentário"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={() => addComment(selectedTopic.id)} disabled={!comment.trim()}>
                Comentar
              </button>
            </div>

            <div className="comments-container">
              <h3>Comentários:</h3>
              {selectedTopic.comments.length ? (
                selectedTopic.comments.map((c, index) => <p key={index}>{c}</p>)
              ) : (
                <p>Nenhum comentário ainda.</p>
              )}
            </div>
          </>
        ) : (
          <p>Selecione um projeto para ver detalhes.</p>
        )}
      </div>
    </div>
  );
};

export { Forum };