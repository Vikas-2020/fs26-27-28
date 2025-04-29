import { createContext, useContext, useState } from "react";
const cartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    //check whether product exists
    // if does, update quantity
    // if not, add it to cart

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  function handleRemoveFromCart(productId) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.id !== productId);
    });
  }

  return (
    <cartContext.Provider
      value={{ cart, setCart, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </cartContext.Provider>
  );
}

export function useCart() {
  return useContext(cartContext);
}

export default CartProvider;
