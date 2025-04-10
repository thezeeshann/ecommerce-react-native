import { useState, useEffect, createContext, PropsWithChildren } from "react";
import { ProductType, CategoryType } from "../lib/types";

type AppContextProps = {
  products: ProductType[];
  setProducts: (data: any) => void;
  categories: CategoryType[];
  setCategories: (data: any) => void;
};

export const AppContext = createContext<AppContextProps>({
  products: [],
  setProducts: () => {},
  categories: [],
  setCategories: () => {},
});

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      const limitedProducts = result.slice(0, 20);
      setProducts(limitedProducts);
    } catch (error) {
      console.log("something went wrong while fetching products data", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/categories",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
      setCategories(result);
    } catch (error) {
      console.log("something went wrong while fetching category data", error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
