

class Usuario{
    constructor(nome=null,senha=null,email=null,id=null,estaLogado=null){
        this.nome = nome
        this.senha = senha
        this.email = email
        this.id = id
        this.estaLogado = estaLogado

    }
}

export { Usuario } 

function isLogado()  {
    if(localStorage.getItem("usuario") === null){
        return false
    }
    else{
        return true 
    }
}


export { isLogado }

function getUsarioLogado(){
    if(isLogado()){
        const data =JSON.parse((localStorage.getItem("usuario")));
        return  data.nome 
    }
}

export { getUsarioLogado };