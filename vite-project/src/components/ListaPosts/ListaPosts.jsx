import { useAppContext } from "../../hooks/useAppContext";
import { ListaPostsItems } from "./ListaPostsItems";
import { Loading } from "../Loading/Loading";

const ListaPosts = () => {
    const { posts, loading } = useAppContext();

    return (
        <div>
            <ul>
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
                    <ListaPostsItems key={post.id} id={post.id} title={post.title} body={post.body} />
                ))}
            </ul>
        </div>
    );
}

export { ListaPosts };