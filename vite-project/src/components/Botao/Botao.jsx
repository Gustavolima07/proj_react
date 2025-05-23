import style from "./Botao.module.css";
import { TIPO_BOTAO } from "./constant";

const Botao = (props) => {
    const { texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps } = props;
    return (
        <button className={`${style.Botao} btn`} tipo={tipo} {...outrasProps}>
            {texto}
        </button>
    );
}

export { Botao };