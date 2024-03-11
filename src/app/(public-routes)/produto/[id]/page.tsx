'use client';
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/Cards/ProductCard";
import { useEffect, useState } from "react";
import { fetchProductById } from "@/services/api/api";
import ErrorComponent from "@/components/ErrorComponents";

// Page.tsx
export default function Page({ params }: Readonly<{ params: { id: string } }>) {
  const [produto, setProduto] = useState<ProdutoType | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);

  const handleProductSearchSubmit = async () => {
    const { data, error } = await fetchProductById(params.id);
    setProduto(data);
    setError(error);
  };

  useEffect(() => {
    handleProductSearchSubmit();
  }, [params.id]);

  return (
    <main className="">
      <div className="flex px-8 py-4 flex-wrap justify-center">
        {produto && <ProductCard key={produto.produtoId} produto={produto} />}
        {error && <ErrorComponent error={error} />}
      </div>
    </main>
  );
}
