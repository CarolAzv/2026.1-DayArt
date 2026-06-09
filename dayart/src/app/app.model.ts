export interface Produto {
    id: number;
    nome: string;
    estoque: number;
}

export interface Usuario {
    id: number;
    nome: string;
    email: string;
    celular: number;
    localizacao:{
        estado: string,
        cidade: string,
        rua: string,
        numero: number,
    },
}