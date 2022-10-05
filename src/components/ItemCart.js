import React from 'react'
import { useCartContext } from '../context/CartContext'
const ItemCart = ({prod}) => {//Detalle de cada producto en el carrito

    const{removeProd} = useCartContext();

  return (
    <div className='itemCart'> 
        <img src={`${process.env.PUBLIC_URL}/img/${prod.img}`} ></img>
        <div className='my-2'>
            <p className='DetalleCompra'>Nombre: <span className='textDetalle'>{prod.nombre}</span> </p>
            <p className='DetalleCompra'>Cantidad: <span className='textDetalle h5'>{prod.quantity}</span> </p>
            <p className='DetalleCompra'>Precio: <span className='textDetalle h5'>${prod.precio}</span>  </p>
            <p className='DetalleCompra'>Subtotal: <span className='textDetalle h5'>${prod.quantity * prod.precio}</span> </p>
            <button className='btnEliminar' onClick={() => removeProd(prod.id) }> Eliminar</button>
        </div>
  </div>
  )
}

export default ItemCart