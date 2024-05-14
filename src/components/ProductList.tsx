import { useEffect, useState } from "react";

export const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products....", category);
    setProducts(["Clothings", "Household"]);
  }, [category]);

  return <div>ProductList</div>;
};
