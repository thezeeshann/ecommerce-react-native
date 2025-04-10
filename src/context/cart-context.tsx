import { useState, useEffect, createContext, PropsWithChildren } from "react";
import { storeDataInStore, getDataFromStore } from "../lib/store";
import { ProductType } from "../lib/types";

type CartItem = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  [key: string]: any;
};

type CartContextProps = {
  cartItems: CartItem[];
  totalPrice: number;
  saveProducts: ProductType[];
  getData: () => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
};

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  totalPrice: 0,
  saveProducts: [],
  getData: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});

export default function CartProvider({ children }: PropsWithChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [saveProducts, setSaveProducts] = useState<ProductType[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const loadCart = async () => {
      try {
        const storedCart = await getDataFromStore("cart");
        if (storedCart) {
          const parsedCart = JSON.parse(storedCart);
          setCartItems(parsedCart);
        }
      } catch (err) {
        console.log("Error loading cart from storage:", err);
      }
    };

    loadCart();
  }, []);

  useEffect(() => {
    const saveCart = async () => {
      try {
        await storeDataInStore("cart", JSON.stringify(cartItems));
      } catch (err) {
        console.log("Error saving cart to storage:", err);
      }
    };

    const calcTotal = () => {
      const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      setTotalPrice(total);
    };

    saveCart();
    calcTotal();
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (!existingItem) return;

    if (existingItem.quantity === 1) {
      setCartItems((prev) =>
        prev.filter((cartItem) => cartItem.id !== item.id)
      );
    } else {
      setCartItems((prev) =>
        prev.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getData = async () => {
    const data = await getDataFromStore("cart");
    if (data) {
      setSaveProducts(JSON.parse(data));
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        clearCart,
        saveProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
