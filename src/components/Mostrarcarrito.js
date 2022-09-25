import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

const Mostrarcarrito = () => {//contenedor de carrito 
  const {cart,toltalPrice} = useCartContext();

  if (cart.length === 0){//si no hay productos en el carrito manda este "return"
    return(
      <div className=' text-center pt-3'>
       <p>No producto en el carrito</p>
       <Link className='btn btn-outline-primary' to='/DesafioReact'>Buscar productos</Link>
      </div>
    );
  }

  return (
    <>
      {//El ItemCart de los productos
        cart.map(product => <ItemCart key={product.id} prod={product} /> )
      }
      <p  className='text-center'>
        total:{toltalPrice()}
      </p>
    </>
  )
}

export default Mostrarcarrito