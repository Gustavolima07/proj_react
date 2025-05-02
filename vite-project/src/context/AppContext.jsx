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

        const { data = [ ]} = await api.get('/Posts');

        setPosts([
            ...data,
        ])
        setLoandingCarregar(false)
    };  

    const adicionarPost = async (nomePost) => {
        setLoandingCriar(true);
        const { data: Post } = await api.post('/Posts', {
            nome: nomePost, 
        });
        
        setPosts(estadoAtual => {
            return [...estadoAtual, Post];
        });
        setLoandingCriar(false);
    };

    const removerPost = async (idPost) => {
        setLoandingDeletar(idPost);

        await api.delete(`Posts/${idPost}`);

        setPosts(estadoAtual => {
            const PostsAtualizadas = estadoAtual.filter(Post => Post.id != idPost);

            return [
                ...PostsAtualizadas
            ];
        });
        setLoandingDeletar(null);
    };

    const editarPost = async (idPost, nomePost) => {
        setLoandingEditar(idPost);

        const { data: PostsAtualizada } = await api.put(`Posts/${idPost}`, {
            nome: nomePost,
        });

        setPosts(estadoAtual => {
            const PostsAtualizadas = estadoAtual.map(Post => 
                Post.id === idPost ? { ...Post, nome: PostsAtualizada.nome } : Post
            );
            return [...PostsAtualizadas];
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

