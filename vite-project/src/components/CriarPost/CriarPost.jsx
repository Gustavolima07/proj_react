import { useState } from "react";
import { useAppContext } from "../../hooks";

import { Botao, CampoTexto, Loading } from "../../components";


const CriarPost = () => {
    
    const { adicionarPost, loadingCriar } = useAppContext();
    const [nomePost, setNomePost] = useState('');

    const onChangeNomePost = (event) => {
        setNomePost(event.currentTarget.value);
    };

    const submetForm = (event) => {
        event.preventDefault();

        if (!nomePost) {
            return;
        }

        adicionarPost(nomePost);
        setNomePost('');
    }




    return (
        <div className="d-inline-flex align-items-center justify-content-center gap-3 
          rounded px-3 py-2 w-auto mb-3 shadow-sm bg-dark">
            <i className="bi bi-person-circle text-light fs-4"></i>
             <form onSubmit={(submetForm)} className="d-inline-flex align-items-center gap-3">
                <CampoTexto value={nomePost} onChange={(onChangeNomePost)}
                placeholder='O que você está querendo conversar hoje?' />
                <Botao texto={loadingCriar ? <Loading /> : 'Criar Post'} tipo="sucesso"/>
            </form>
        </div>
    );
}

export { CriarPost }