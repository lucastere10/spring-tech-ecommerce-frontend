'use client'
import { useRouter } from "next/navigation";
import React, { FC, useEffect } from "react"
import { signOut, useSession } from "next-auth/react"
import { useTheme } from "next-themes";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdLogOut } from "react-icons/io";
import { VscAccount, VscThreeBars } from "react-icons/vsc";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ThemeToggle } from "../ThemeToggle";
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from "@/redux/store"; // assuming RootState is exported from './store'
import { fetchUserInfo } from "@/redux/features/user-slice";

interface HeaderProps {
    titulo?: string;
}

export const PageHeader: FC<HeaderProps> = () => {
    const router = useRouter()
    const { theme } = useTheme();
    const { data: session } = useSession()
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.value);

    useEffect(() => {
        dispatch(fetchUserInfo());
    }, [dispatch]);



    const handleLogout = () => {
        signOut()
    }

    return (
        <header>
            <nav className="px-4 py-2.5 m-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <div className="flex items-center gap-4">
                        <div className="bg-primary w-[40px] h-[40px] rounded-lg" />
                        <p className="text-3xl font-bold ">SPRINGTECH</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Input></Input>
                        <Button>Pesquisar</Button>
                        <Button onClick={() => { console.log(session) }}>DEBUG</Button>
                    </div>
                    <div className="flex items-center gap-4">
                        <ThemeToggle></ThemeToggle>
                        <FaShoppingBag size={30} className="text-primary cursor-pointer" />
                        {session ? (
                            <>
                                <img
                                    className="rounded-full border dark:border-white p-0.5  w-12"
                                    src={`https://robohash.org/${user.nome}?set=set4`}
                                    alt=""
                                    width={28}
                                    height={28}
                                />
                                <p className="text-xl font-semibold">{user.nome}</p>
                                <p className="text-xl font-semibold">{user.email}</p>
                                <p className="text-xl font-semibold">{user.usuarioStatus}</p>
                                <p className="text-xl font-semibold">{user.usuarioTipo}</p>
                                <IoMdHeartEmpty size={30} className="text-primary cursor-pointer" />
                                <VscAccount size={30} className="text-primary cursor-pointer" />
                                <button
                                    onClick={() => { handleLogout() }}
                                    className="bg-transparent"
                                >
                                    <IoMdLogOut color={`${theme === 'light' ? 'red' : 'white'}`} size={24} />
                                </button>
                            </>
                        ) : (
                            <div className="px-1 flex gap-1">
                                <a className="text-lx cursor-pointer" onClick={() => { router.push("/login") }} >Login</a>
                                <p>|</p>
                                <a className="ml-1 text-lx cursor-pointer" onClick={() => { router.push("/register") }} >Registrar</a>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
            <div className="flex items-center gap-10 w-full h-12 bg-primary">
                <div className="flex ml-24 w-fit items-center gap-4 p-4 h-full bg-secondary cursor-pointer">
                    <VscThreeBars size={28} color="white" />
                    <h1 className="text-xl text-white font-semibold">Categorias</h1>
                </div>
                <p className="text-lg text-white font-semibold text-secondary">Home</p>
                <p className="text-lg text-white font-semibold text-secondary">Produtos</p>
                <p className="text-lg text-white font-semibold text-secondary">Sobre nós</p>
                <p className="text-lg text-white font-semibold text-secondary">Contato</p>
            </div>
        </header>
    )

}