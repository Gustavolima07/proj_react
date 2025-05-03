import { useState } from "react";
import { useAppContext } from "../../hooks";

import { Botao, CampoTexto, Loading } from "../../components";


const CriarPost = () => {
    
    const { adicionarPost, loadingCriar } = useAppContext();
    const [nomePost, setNomePost] = useState('');
    const [descricaoPost, setDescricaoPost] = useState('');

    const onChangeNomePost = (event) => {
        setNomePost(event.currentTarget.value);
    };

    const onChangeDescricaoPost = (event) => {
        setDescricaoPost(event.currentTarget.value);
    };

    const submetForm = (event) => {
        event.preventDefault();

        if (!nomePost, !descricaoPost) {
            alert('Preencha todos os campos!');
            return;
        }

        adicionarPost(nomePost, descricaoPost);
        setNomePost('');
        setDescricaoPost('');
    }





    return (
        <div className="d-inline-flex align-items-center justify-content-center gap-3 
          rounded px-3 py-2 w-auto mb-3 shadow-sm bg-dark" >
            <i className="bi bi-person-circle text-light fs-4"></i>
             <form onSubmit={(submetForm)} className="d-inline-flex align-items-center gap-3">
                <CampoTexto value={nomePost} onChange={(onChangeNomePost)}
                placeholder='O que você está querendo conversar hoje?' />
                <CampoTexto value={descricaoPost} onChange={(onChangeDescricaoPost)}
                placeholder='O que você está querendo hoje?' />
                <Botao texto={loadingCriar ? <Loading /> : 'Criar Post'} tipo="sucesso"/>
            </form>
        </div>
    );
}

export { CriarPost }