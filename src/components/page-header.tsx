'use client'
import { useRouter } from "next/navigation";
import React, { FC } from "react"
import { signOut, useSession } from "next-auth/react"
import { IoMdLogOut } from "react-icons/io";
import { useTheme } from "next-themes";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";

interface HeaderProps {
    titulo?: string;
}

export const PageHeader: FC<HeaderProps> = () => {
    const router = useRouter()
    const { data: session, status } = useSession()
    const { theme, setTheme } = useTheme();

    return (
        <header>
            <nav className="px-4 py-2.5 m-4">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
                    <div className="flex items-center gap-4">
                        <img className="bg-primary w-[40px] h-[40px]" src="" alt="" />
                        <p className="text-3xl font-bold ">SPRINGTECH</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Input className="max-w-2xl"></Input>
                        <Button>Pesquisar</Button>
                    </div>
                    <div className="flex items-center gap-4">
                        {session ? (
                            <>

                            </>
                        ) : (
                            <>
                                <ThemeToggle></ThemeToggle>
                                <Button className="w-24">Logar</Button>
                                <Button className="w-24">Registar</Button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )

}