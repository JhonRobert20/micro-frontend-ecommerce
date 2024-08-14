import React, { useState, useEffect } from "react";
import { cart } from "cart/cart";

export function useShoppingCart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    cart.subscribe((value) => {
      const simplifiedItems =
        value?.cartItems.map((item) => ({
          id: item.id,
          quantity: item.quantity,
        })) ?? [];

      setItems(simplifiedItems);
    });
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

  return {
    items,
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeQuantity,
  };
}
