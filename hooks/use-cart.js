import { useState, createContext } from "react";
import products from "../products.json";
import { initiateCheckout } from "../lib/payments";

const defaultCart = {
  products: {},
  itemCount: 0,
  total: 0,
};

export const CartContext = createContext();

export default function useCart() {
  const [cart, updateCart] = useState(defaultCart);

  const addToCart = ({ id } = {}) => {
    updateCart((prevState) => {
      const newState = { ...prevState };
      newState.products[id] = { id, quantity: 1 };
      newState.itemCount = Object.keys(newState.products).length;
      newState.total = Object.values(newState.products).reduce((res, p) => res + Number(products.find((pro) => pro.id === p.id).price), 0);
      return newState;
    });
  };

  const checkout = () => {
    initiateCheckout({ lineItems: Object.values(cart.products).map((p) => ({ price: p.id, quantity: p.quantity })) });
  };

  return {
    cart,
    addToCart,
    checkout,
  };
}
