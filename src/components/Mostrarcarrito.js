import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';

import Formulario from './Formulario';

const Mostrarcarrito = () => {//contenedor de carrito 
  const {cart,toltalPrice} = useCartContext();


  if (cart.length === 0){//si no hay productos en el carrito manda este "return"
    return(
      <>
        <p className='bordesProd text-center'> carrito</p>
        <div className=' text-center '>
          <p className='total'>No hay productos en el carrito</p>
          <Link className=' text-decoration-none ' to='/DesafioReact'><p className='btnBuscarProd'>Buscar productos</p></Link>
        </div>
      </>
    );
  }
  
  

  return (
    <>
    <p className='bordesProd text-center'> carrito</p>
      {//El ItemCart de los productos
        cart.map(product => <ItemCart key={product.id} prod={product} /> )
      }
    <p  className='text-center total h3'>
        Total a pagar: <span className='text-dark'>${toltalPrice()}</span>
    </p>
    <div className='d-grid gap-2 col-6 mx-auto'>
        <Formulario precioTotal={toltalPrice ()}   />
    </div>
    </>
  )
}

export default Mostrarcarrito