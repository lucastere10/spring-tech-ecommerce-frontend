'use client';
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/Cards/ProductCard";
import { useEffect, useState } from "react";
import { checkEmail, fetchProducts } from "@/services/api/api";
import { SkeletonCard } from "@/components/Skeletons/SkeletonCard";
import LoginLottie from "@/components/Animations/LoginLottie";

export default function Home() {
  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorType | null>(null);

  const handleProductSearchSubmit = async () => {
    setLoading(true);
    const { data, error } = await fetchProducts();
    setProdutos(data.content);
    setError(error);
    setLoading(false);
  };

  useEffect(() => {
    handleProductSearchSubmit();
  }, []);

  // Define the number of skeleton cards you want to display
  const skeletonCount = 10;

  return (
    <main className="">
      <div className="bg-tertiary w-full h-[600px] flex">
        <div className="flex-1 items-center justify-center font-sans text-white content-center  p-12">
        </div>
        <div className="items-center ">
          <LoginLottie></LoginLottie>
        </div>
      </div>
      <div className="flex px-8 py-4 flex-wrap justify-center">
        {loading ? (
          Array.from({ length: skeletonCount }).map((_, index) => <SkeletonCard key={index} />)
        ) : (
          Array.isArray(Object.values(produtos)) &&
          Object.values(produtos).map((produto: ProdutoType) => (
            <ProductCard
              key={produto.produtoId}
              produto={produto}
            />
          ))
        )}
      </div>
    </main>
  );
}
