import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cart-context";

export function useDebounce(value: string): string {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timerId);
  }, [value]);

  return debouncedValue;
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "useCartContext must be used within a CartContextProvider"
    );
  }
  return context;
}
