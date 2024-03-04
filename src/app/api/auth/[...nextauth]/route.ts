import api from "@/services/api/api"
import NextAuth, { NextAuthOptions, User } from "next-auth"
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials"

interface ExtendedUser extends User {
    rememberMe?: boolean;
}

const nextAuthOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                login: { label: 'login', type: 'text' },
                senha: { label: 'senha', type: 'password' },
                rememberMe: { label: 'rememberMe', type: 'checkbox' }
            },

            async authorize(credentials) {
                if (!credentials) {
                    throw new Error('No credentials provided');
                }

                return api
                    .post(`/auth/login`, {
                        login: credentials?.login,
                        senha: credentials?.senha,
                    })
                    .then((response) => {
                        return { ...response.data, rememberMe: credentials.rememberMe };
                    })
                    .catch((error) => {
                        console.log("Mensagem: ", error.response.data.message);
                        throw new Error(error.response.data.message);
                    });
            }

        })
    ],
    pages: {
        signIn: '/login',
        newUser: '/register',
    },
    callbacks: {
        async jwt({ token, user }: { token: JWT; user: ExtendedUser }) {
            // verificar se user existe e adicionar ele em token.user
            user && (token.user = user)
            return token;
        }
        ,
        async session({ session, token }: { session: any; token: any }) {
            session = token.user

            const rememberMe = session.rememberMe === 'true';

            session.expires = new Date(Date.now() + (rememberMe ? 15 : 1) * 24 * 60 * 60 * 1000).toISOString()

            //console.log("session: ", session)

            return session
        }


    }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }