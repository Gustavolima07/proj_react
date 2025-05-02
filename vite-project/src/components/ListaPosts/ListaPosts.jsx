import { useAppContext } from "../../hooks/useAppContext";
import { ListaPostsItems } from "./ListaPostsItems";
import { Loading } from "../Loading/Loading";

const ListaPosts = () => {
    const { posts, loading } = useAppContext();
    return (
        <div>
            <ul className="ListaPosts d-flex flex-column gap-3">
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
                    <ListaPostsItems key={post.id} id={post.id}  nome={post.nome} />
                ))}
            </ul>
        </div>
    );
}

export { ListaPosts };