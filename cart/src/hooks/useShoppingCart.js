import React, { useState, useEffect, useCallback, useMemo } from "react";
import { cart } from "cart/useLoggedIn";
import { formatCurrency } from "catalog/formatCurrency";

//usar quizás prevItems
export function useShoppingCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const subscription = cart.subscribe((value) => {
      const items = value?.cartItems ?? [];
      setItems(items);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const getItemQuantity = useCallback(
    (id) => items.find((item) => item.id === id)?.quantity || 0,
    [items]
  );

  const increaseCartQuantity = useCallback((id) => {
    setItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (!existingItem) {
        return [...currItems, { id, quantity: 1 }];
      }

      return currItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    });
  }, []);

  const decreaseCartQuantity = useCallback((id) => {
    setItems((currItems) => {
      const existingItem = currItems.find((item) => item.id === id);
      if (existingItem?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      }

      return currItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  }, []);

  const removeQuantity = useCallback((id) => {
    setItems((currItems) => currItems.filter((item) => item.id !== id));
  }, []);

  // Calcular cantidades y precios totales, memoizados
  const cartQuantity = useMemo(() => {
    return items.reduce((quantity, item) => item.quantity + quantity, 0);
  }, [items]);

  const cartTotalPrice = useMemo(() => {
    return formatCurrency(
      items.reduce((total, item) => total + item.quantity * item.price, 0)
    );
  }, [items]);

  return {
    items,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeQuantity,
    cartQuantity,
    cartTotalPrice,
  };
}
