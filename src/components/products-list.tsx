import React from "react";
import ProductCard from "./product-card";
import useFetchProducts from "@/hooks/fetchProducts";
export default function ProductsList() {
  const { products, loading, error } = useFetchProducts();
  console.log(products);

  if (error) {
    return <p>Error loading data</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="p-5 w-full flex-wrap justify-center flex gap-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
