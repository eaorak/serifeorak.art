import { useState, createContext, useContext, useEffect } from "react";
import products from "../products.json";
import { initiateCheckout } from "../lib/payments";

const defaultCart = {
  products: {},
  itemCount: 0,
  totalPrice: 0,
};

export const CartContext = createContext();

export function useCartState() {
  const [cart, updateCart] = useState(defaultCart);

  useEffect(() => {
    const cartFromStorage = window.localStorage.getItem("hemdemart_cart");
    const data = JSON.parse(cartFromStorage);
    if (data) {
      updateCart(data);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(cart);
    window.localStorage.setItem("hemdemart_cart", data);
  }, [cart]);

  const deleteCart = () => {
    updateCart(() => {
      return { ...defaultCart, products: {} };
    });
  };

  const addToCart = ({ id } = {}) => {
    updateCart((prevState) => {
      const newState = { ...prevState };
      newState.products[id] = { id, quantity: 1 };
      newState.itemCount = Object.keys(newState.products).length;
      newState.totalPrice = Object.values(newState.products).reduce((res, p) => res + Number(products.find((pro) => pro.id === p.id).price), 0);
      return newState;
    });
  };

  const removeFromCart = ({ id } = {}) => {
    updateCart((prevState) => {
      const newState = { ...prevState };
      delete newState.products[id];
      newState.itemCount = Object.keys(newState.products).length;
      newState.totalPrice = Object.values(newState.products).reduce((res, p) => res + Number(products.find((pro) => pro.id === p.id).price), 0);
      return newState;
    });
  };

  const checkout = () => {
    initiateCheckout({ lineItems: Object.values(cart.products).map((p) => ({ price: p.id, quantity: p.quantity })) });
  };

  const cartItems = Object.keys(cart.products).map((key) => {
    const product = products.find(({ id }) => `${id}` === `${key}`);
    return {
      ...cart.products[key],
      pricePerUnit: product.price,
      title: product.title,
    };
  });

  return {
    cart,
    cartItems,
    addToCart,
    removeFromCart,
    deleteCart,
    checkout,
  };
}

export function useCart() {
  return useContext(CartContext);
}
