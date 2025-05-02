import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';

export const AppContext = createContext({});

export const AppContextProvider = (props) => {
    const { children } = props;

    const [posts, setPosts] = useState([]);

    const [loadingCarregar, setLoandingCarregar] = useState(false);
    const [loadingCriar, setLoandingCriar] = useState(false);
    const [loadingEditar, setLoandingEditar] = useState(null);
    const [loadingDeletar, setLoandingDeletar] = useState(null);
    
    const carregarPosts = async () => {
        setLoandingCarregar(true)

        const { data = [ ]} = await api.get('/posts');

        setPosts([
            ...data,
        ])
        setLoandingCarregar(false)
    };  

    const adicionarPost = async (nomePost) => {
        setLoandingCriar(true);
        const { data: post } = await api.post('/posts', {
            nome: nomePost, 
        });
        
        setPosts(estadoAtual => {
            return [...estadoAtual, post];
        });
        setLoandingCriar(false);
    };

    const removerPost = async (idPost) => {
        try {
            setLoandingDeletar(idPost);
            await api.delete(`/posts/${idPost}`);
            setPosts(estadoAtual => estadoAtual.filter(post => post.id != idPost));
        } catch (erro) {
            console.error("Erro ao deletar post:", erro);
        } finally {
            setLoandingDeletar(null);
        }
    };
    
    const editarPost = async (idPost, nomePost) => {
        setLoandingEditar(idPost);

        const { data: postAtualizado } = await api.put(`posts/${idPost}`, {
            nome: nomePost,
        });

        setPosts(estadoAtual => {
            const postsAtualizados = estadoAtual.map(post => 
                post.id === idPost ? { ...post, nome: postAtualizado.nome } : post
            );
            return [...postsAtualizados];
        });
        setLoandingEditar(null);
    };
        
    useEffect(() => { 
        carregarPosts();
    }, []);
    
    return (
        <AppContext.Provider value={{
            posts,
            adicionarPost,
            removerPost,
            editarPost,
            loadingCarregar,
            loadingCriar,
            loadingEditar,
            loadingDeletar,
        }}>
            {children}
        </AppContext.Provider>
    )
}
