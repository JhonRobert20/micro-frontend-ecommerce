import React, { useState, useEffect } from "react";
import { cart } from "cart/cart";
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

  function getItemQuantity(id) {
    return items.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id) {
    //we don't have an item
    setItems((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    //we have just 1 quantity so remove it
    setItems((currItem) => {
      if (currItem.find((item) => item.id === id)?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeQuantity(id) {
    setItems((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }

  const cartQuantity = items.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const cartTotalPrice = formatCurrency(
    items.reduce((a, v) => a + v.quantity * v.price, 0)
  );

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
