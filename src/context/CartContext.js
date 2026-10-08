'use client'; // Indica que este archivo se ejecuta en el navegador (maneja estado y localStorage)

import { createContext, useContext, useState, useEffect } from 'react';

// 1. Creación del contexto
const CartContext = createContext();

// 2. Proveedor del Estado Global
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Cargar el carrito guardado en el navegador al iniciar la app
  useEffect(() => {
    const savedCart = localStorage.getItem('cart_items');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error al cargar carrito:", e);
      }
    }
  }, []);

  // Guardar en localStorage cada vez que el carrito cambia
  useEffect(() => {
    localStorage.setItem('cart_items', JSON.stringify(cart));
  }, [cart]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para consumir el carrito en cualquier componente
export const useCart = () => useContext(CartContext);