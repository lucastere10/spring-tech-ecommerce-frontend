'use client';
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/services/api/api";


export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [error, setError] = useState<ErrorType | null>(null);

  const handleProductSearchSubmit = async () => {
    const { data, error } = await fetchProducts();
    setProdutos(data.content);
    setError(error);
  };

  useEffect(() => {
    handleProductSearchSubmit();
  }, []);

  return (
    <main className="">
      <Button onClick={() => {}}>DEBUG</Button>
      <div className="flex px-8 py-4 flex-wrap justify-center">
        {Array.isArray(Object.values(produtos)) &&
          Object.values(produtos).map((produto: ProdutoType) => (
            <ProductCard
              key={produto.produtoId}
              produto={produto}
            />
          ))}
      </div>

    </main>
  );
}
