import { useAppContext } from "../../hooks/useAppContext";
import { ListaPostsItems } from "./ListaPostsItems";
import { Loading } from "../Loading/Loading";

const ListaPosts = () => {
    const { posts, loading } = useAppContext();
    return (
            <div className="d-flex flex-column justify-content-center w-auto gap-4 p-3 shadow-sm">
                {loading && (
                    <p>
                        Carregando...
                        <Loading />
                    </p>
                )}

                {!loading && !posts.length && (
                    <p>Não há posts atualizados...</p>
                )}

                {posts.map((post) => (
                    <ListaPostsItems key={post.id} id={post.id} nome={post.nome} descricao={post.descricao} />
                ))}
            </div>
    );
}

export { ListaPosts };