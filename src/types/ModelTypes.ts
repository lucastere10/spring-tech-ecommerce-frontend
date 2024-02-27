interface ProdutoType {
    produtoId: number;
    nome: string;
    descricao: string;
    preco: number;
}

interface ErrorType{
    title:string;
    userMessage: string;
    status: number;
}