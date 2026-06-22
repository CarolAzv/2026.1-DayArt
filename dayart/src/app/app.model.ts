export interface Produto {
    id?: number;
    nome: string;
    descricao: string;
    estoque: number;
    preco: number;
}

export interface Usuario {
    id?: number;
    nome: string;
    email: string;
    celular: string;
    localizacao:{
        estado: string,
        cidade: string,
        rua: string,
        numero: number,
    },
}