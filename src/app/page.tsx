'use client';
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/product-card";
import { useState } from "react";
import api from "@/services/api/api";


export default function Home() {
  const [produtos, setProdutos] = useState([])

  const handleProductSearchSubmit = async () => {
    try {
      const response = await api.get(`/produtos`);
      setProdutos(response.data.content);
      console.log(response.data.content)
    } catch (err: any) {
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Error fetching data:', err.response.data);
      } else if (err.request) {
        // The request was made but no response was received
        console.error('No response received:', err.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', err.message);
      }
    }
  };

  return (
    <main className="">
      <div className="w-full h-12 bg-primary">

      </div>
      <div className="flex px-8 py-4 flex-wrap justify-center">
        {Array.isArray(Object.values(produtos)) &&
          Object.values(produtos).map((produto: ProdutoType) => (
            <ProductCard
              key={produto.produtoId}
              produto={produto}
            />
          ))}
      </div>
      <Button onClick={() => { handleProductSearchSubmit() }}>

      </Button>

    </main>
  );
}
