import { Botao, CampoTexto, Loading } from "../../../components";
import { useState } from "react";
import { useAppContext } from "../../../hooks/";

const ListaPostsItems = (props) => {
    const { id, nome } = props;

    const [estaEditando, setEstaEditando] = useState(false);

    const { loadingEditar, loadingDeletar, editarPost, removerPost } = useAppContext();

    const onBlurPost = (event) => {
        const nomePost = event.currentTarget.value;

        editarPost(id, nomePost);

        setEstaEditando(false);
    };

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar == id;

    return (
        <li className="d-flex justify-content-center align-items-center gap-3 fs-5">
            {(loadingEstaEditando || estaEditando) && (
                <CampoTexto defaultValue={nome} onBlur={onBlurPost} autoFocus />
            )}
            {!loadingEstaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {loadingEstaEditando && <Loading />}

            <Botao texto={loadingEstaDeletando ? <Loading /> : 'X'} tipo="atencao"
            onClick = {() => removerPost(id)}
            />
        </li>
    );
}

export { ListaPostsItems };