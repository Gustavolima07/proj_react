import { Botao, CampoTexto, Loading } from "../../../components";
import { isLogado } from "../../../context/Usuario";
import { useState } from "react";
import { useAppContext } from "../../../hooks/";

const ListaPostsItems = (props) => {
    const { id, nome, descricao } = props;
    const [estaEditando, setEstaEditando] = useState(false);
    const [nomeEditado, setNomeEditado] = useState(nome);
    const [descricaoEditada, setDescricaoEditada] = useState(descricao);

    const { loadingEditar, loadingDeletar, editarPost, removerPost } = useAppContext();

    const loadingEstaEditando = loadingEditar === id;
    const loadingEstaDeletando = loadingDeletar === id;

    let blurTimeout;

    const handleBlur = () => {
        blurTimeout = setTimeout(() => {
            editarPost(id, nomeEditado, descricaoEditada);
            setEstaEditando(false);
        }, 100); 
    };

    const cancelBlur = () => {
        clearTimeout(blurTimeout);
    };

    return (
        <div className="border rounded bg-dark text-white p-3">
            {estaEditando && !loadingEstaEditando ? (
            <div onBlur={handleBlur} onFocus={cancelBlur}>
                <CampoTexto
                value={nomeEditado}
                onChange={(e) => setNomeEditado(e.target.value)}
                autoFocus
                />
                <CampoTexto
                value={descricaoEditada}
                onChange={(e) => setDescricaoEditada(e.target.value)}
                />
            </div>
            ) : (
            <div onDoubleClick={() => setEstaEditando(true)}>
                <h3>{nome}</h3>
                <p>{descricao}</p>
            </div>
            )}

            {loadingEstaEditando && <Loading />}
            <Botao
                texto={loadingEstaDeletando ? <Loading /> : 'X'}
                tipo="atencao"
                onClick={() => {
                    if (!isLogado()) {
                        window.location.href = "/Login";
                    } else {
                        removerPost(id);
                    }
                }}
            />
        </div>
    );
};
export { ListaPostsItems };
