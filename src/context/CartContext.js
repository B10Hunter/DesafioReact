import React, { useContext, useState } from 'react'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  console.log('carrito', cart);

  const addProduct = (item,quantity) => {
    if (isInCart(item.id)){
      setCart(cart.map(producto => {
        return producto.id === item.id ? { ...producto, quantity : producto.quantity + quantity} : producto
      }));
    } else{
      setCart ([...cart, { ...item, quantity}]);
    }
  }

  const toltalPrice = () => {
      return cart.reduce((prev,act) => prev + act.quantity * act.precio ,0);
  }

  const totalProducts = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0); 
  const clearCart = () => setCart([]);
  const isInCart = (id) => cart.find(producto => producto.id === id ) ? true : false ;
  const removeProd = (id) => setCart(cart.filter(producto => producto.id !== id));


  return (
    
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProd,
      addProduct,
      toltalPrice,
      totalProducts,
      cart
    }}>
        {children}
    </CartContext.Provider>
)} 

export default CartProvider