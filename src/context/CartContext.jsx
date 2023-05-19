import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cart: [],
  totalQuantity: 0,
  total: 0,
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {}
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
      calculateTotal();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } 
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((item) => item.id === itemId);
  };

  const calculateTotal = () => {
    let quantity = 0;
    let totalPrice = 0;

    cart.forEach((item) => {
      quantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    setTotalQuantity(quantity);
    setTotal(totalPrice);
  };

  return (
    <CartContext.Provider
      value={{ cart, totalQuantity, total, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
