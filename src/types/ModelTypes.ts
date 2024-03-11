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

interface UsuarioLogadoType{
    usuarioId: number,
    nome: string,
    email: string,
    usuarioTipo: string,
    usuarioStatus: string 
}

interface CarrinhoType{
    carrinhoId: number
    valor: number
    usuario: UsuarioLogadoType,
    produtoCarrinho: ProdutoType
}