import React from 'react'
import { useCartContext } from '../context/CartContext'
const ItemCart = ({prod}) => {//Detalle de cada producto en el carrito

    const{removeProd} = useCartContext();

  return (
    <div className='itemCart'> 
        <img src={`${process.env.PUBLIC_URL}/img/${prod.img}`} ></img>
        <div>
            <p>Nombre: {prod.nombre} </p>
            <p>Cantidad: {prod.quantity} </p>
            <p>Precio: {prod.precio} </p>
            <p>Subtotal: {prod.quantity * prod.precio} </p>
            <button onClick={() => removeProd(prod.id) }> Eliminar</button>
        </div>
  </div>
  )
}

export default ItemCart