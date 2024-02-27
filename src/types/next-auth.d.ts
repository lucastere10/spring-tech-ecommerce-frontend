import NextAuth from "next-auth";

declare module 'next-auth' {
    interface Session {
        token: string;
        usuario: {
            usuario_id: number,
            nome: string,
            email: string,
            usuario_tipo: string,
            data_cadastro: string,
        }
    }
}