import { useState, useEffect, createContext, PropsWithChildren } from "react";

type AppContextProps = {
  products: any;
  setProducts: (data: any) => void;
};

export const AppContext = createContext<AppContextProps>({
  products: null,
  setProducts: () => {},
});

export default function AppContextProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState([]);

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
      console.log("result", result);
    } catch (error) {
      console.log("something went wrong while fetching post data", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
