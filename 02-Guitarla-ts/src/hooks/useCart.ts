import { useState, useEffect, useMemo } from 'react';
import { db } from '../data/db';
import type { Guitar, CartItem } from '../types';

export default function useCart() {
  
  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart 
      ? JSON.parse(localStorageCart)
      : [];
  }

  // Estados para el carrito de compras
  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  // Simulando la carga de datos desde una API o base de datos
  // useEffect(() => {
  //   setData(db);
  // }, []);

  useEffect( () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  function addToCart(item : Guitar) {
    const itemExists = cart.findIndex(element => element.id === item.id);
    if(itemExists >= 0) {
      if(cart[itemExists].quantity >= 5) return; 

      const updatedCart = [...cart];
      updatedCart[itemExists].quantity ++;
      setCart(updatedCart);
      return;
    }

    const newItem : CartItem = { ...item, quantity: 1};
    setCart(prevState => [...prevState, newItem]);
  }

  function removeFromCart(id : Guitar['id']) {
    setCart( prevState => prevState.filter( item => item.id !== id))
  }

  function decreaseQuantity(id : Guitar['id']) {
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })

    setCart(updatedCart);
  }

  function increaseQuantity(id : Guitar['id']) {
    const updatedCart = cart.map( item => {
      if(item.id === id && item.quantity < 5) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item;
    })

    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

      // State Derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart] );
    const cartTotal = useMemo( () => cart.reduce( (total, item) => total + (item.quantity * item.price), 0), [cart] );


    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}