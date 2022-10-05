import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const Mostrarcarrito = () => {//contenedor de carrito 
  const {cart,toltalPrice} = useCartContext();
  const fecha = new Date();


  const orden = {//la orden de compra que el usario , se manda a  Firebase y en consola se muentra el addres del la orde.
    buyer: {
      nombre: 'Carlos',
      email: 'Carlos@gmail.com',
      addres: 'odsnfkasnflk'
    },
    productos: cart.map(product => ({id: product.id ,fecha:fecha.toISOString().split('T')[0] , nombre: product.nombre , precio: product.precio, cantidad: product.quantity})),
    total: toltalPrice(),
  }

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
  
  const comprar = () =>{
      const db = getFirestore();
      const ordersCollection = collection (db, 'orden');
      addDoc(ordersCollection, orden)
      .then(({id}) => console.log(id))
      
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
      <button className='btnEliminar' onClick={comprar()}>Comprar productos</button>
      </div>
    </>
  )
}

export default Mostrarcarrito