"use client"
import { loginSchema } from "@/schemas/authSchema";
import { useRouter } from "next/navigation";
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useEffect, useState } from "react"
import { getSession, signIn, useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import LoginLottie from "@/components/Animations/LoginLottie";
import { UserLoginSucessToast } from "@/components/Toast/UserLoginSucessToast";
import { QrCodeDialog } from "@/components/Dialogs/QrCodeDialog";
import socket from "@/services/api/websocket";

//REFERENCIAS https://tailwindflex.com/tag/login

export default function Login() {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginRequest>({
        resolver: yupResolver(loginSchema)
    });

    const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
        const res = await signIn('credentials', {
            login: data.login,
            senha: data.senha,
            rememberMe: data.rememberMe,
            redirect: false,
        })

        if (res?.error) {
            alert(res.error)
        } else {
            await getSession();
            router.replace('/')
            UserLoginSucessToast()
        }
    };

    const onGoogleSubmit = async () => {
        const res = await signIn('google', {
            redirect: false,
        })

        if (res?.error) {
            alert(res.error)
        } else {
            await getSession();
        }
    };

    const onGithubSubmit = async () => {
        const res = await signIn('github', {
            redirect: false,
        })

        if (res?.error) {
            alert(res.error)
        } else {
            await getSession();
        }
    };

    return (
        <div className="min-h-screentext-gray-900 flex justify-center">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white dark:bg-slate-800 shadow sm:rounded-lg flex justify-center flex-1">
                <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-8">
                    <div className="mt-6 flex flex-col items-center">
                        <h1 className="text-2xl xl:text-3xl font-extrabold">
                            Bem Vindo!
                        </h1>
                        <div className="w-full flex-1 mt-8">
                            <div className="flex flex-col items-center">
                                
                                <button
                                    onClick={() => { onGoogleSubmit() }}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-secondary text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                                    <div className="bg-white p-2 rounded-full">
                                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                                            <path
                                                d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                                                fill="#4285f4" />
                                            <path
                                                d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                                                fill="#34a853" />
                                            <path
                                                d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                                                fill="#fbbc04" />
                                            <path
                                                d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                                                fill="#ea4335" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Entrar com o Google
                                    </span>
                                </button>

                                <button
                                    onClick={() => { onGithubSubmit() }}
                                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-secondary text-white flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
                                    <div className="bg-white p-1 rounded-full">
                                        <svg className="w-6" viewBox="0 0 32 32">
                                            <path fillRule="evenodd"
                                                d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z" />
                                        </svg>
                                    </div>
                                    <span className="ml-4">
                                        Entrar com o GitHub
                                    </span>
                                </button>

                                <QrCodeDialog />

                            </div>
                            <div className="my-12 border-b text-center">
                                <div
                                    className="leading-none px-2 inline-block text-sm tracking-wide font-medium bg-white dark:bg-slate-800 transform translate-y-1/2">
                                    Ou faça o login com um email
                                </div>
                            </div>

                            <div className="mx-auto max-w-xs">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    action="">

                                    <input
                                        type="text"
                                        {...register('login')}
                                        name="login"
                                        id="login"
                                        placeholder="Email"
                                        className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white"
                                    />
                                    {errors.login && (
                                        <p className="text-red-500 text-sm mb-1">
                                            {errors.login.message}
                                        </p>
                                    )}
                                    <div className="flex items-center relative">
                                        <input
                                            type={isPasswordVisible ? "text" : "password"}
                                            {...register('senha')}
                                            name="senha"
                                            id="senha"
                                            placeholder="••••••••"
                                            className="w-full px-6 py-3 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                        />
                                        <div className='absolute inset-y-0 right-0 pr-3 mt-5 flex items-center'>
                                            <button type="button" className='cursor-pointer' onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                                                {isPasswordVisible ? <IoMdEye size={28} color='#181818' /> : <IoMdEyeOff size={28} color='#181818' />}
                                            </button>
                                        </div>
                                    </div>
                                    {errors.senha && (
                                        <p className="text-red-500 text-sm mb-1">
                                            {errors.senha.message}
                                        </p>
                                    )}

                                    <div className="flex items-center justify-between mt-5">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="rememberMe"
                                                    {...register('rememberMe')}
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Lembrar Login</label>
                                            </div>
                                        </div>
                                        <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Esqueceu a senha?</a>
                                    </div>
                                    <button
                                        type="submit"
                                        className="mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:bg-secondary transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <svg className="w-6 h-6 -ml-2" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                            <circle cx="8.5" cy="7" r="4" />
                                            <path d="M20 8v6M23 11h-6" />
                                        </svg>
                                        <span className="ml-3">
                                            Entrar
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="flex items-center mt-5 justify-center">
                            <p>Não tem uma conta?</p>
                            <a href="/register" className="ml-2 text-sm font-semibold text-primary text-primary-600 hover:underline dark:text-primary-500">Registre-se!</a>
                        </div>
                        <div className="flex items-center mt-8 justify-center">
                            <ThemeToggle></ThemeToggle>
                        </div>
                    </div>
                </div>
                <div className="flex-1 bg-cyan-50 dark:bg-slate-600 text-center hidden lg:flex">
                    <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                        <LoginLottie></LoginLottie>
                    </div>
                </div>
            </div>
        </div>
    )

}