"use client"
import React, { FC } from "react"
import { Button } from "./ui/button"
import { FaHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoStar, IoStarHalf } from "react-icons/io5";

export const ProductCard: FC<ProdutoCardProps> = ({produto}) => {

    return (
        <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                <img className="object-cover" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"/>
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
            </a>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{produto.nome}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">${produto.preco}</span>
                        <span className="text-sm text-slate-900 line-through">$699</span>
                    </p>
                    <div className="flex gap-1 items-center ml-3">
                        <IoStar className="text-orange-500" />
                        <IoStar className="text-orange-500" />
                        <IoStar className="text-orange-500" />
                        <IoStar className="text-orange-500" />
                        <IoStarHalf className="text-orange-500" />
                        <span className="mr-2 ml-0.5 rounded px-2.5 py-0.5 text-sm font-semibold">4.7</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button onClick={() => {console.log(produto)}} className="flex items-center justify-center rounded-md px-5 py-2.5 gap-2 text-center text-sm font-medium">
                        <MdOutlineShoppingCart size={20} />
                        Adicionar ao carrinho
                    </Button>
                    <Button className="flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-md px-3 py-1.5 text-center text-sm font-medium">
                        <FaHeart size={20} />
                    </Button>
                </div>
            </div>
        </div>

    )
}