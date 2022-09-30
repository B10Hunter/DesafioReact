import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const Mostrarcarrito = () => {//contenedor de carrito 
  const {cart,toltalPrice} = useCartContext();

  const orden = {
    buyer: {
      nombre: 'Carlos',
      email: 'Carlos@gmail.com',
      addres: 'odsnfkasnflk'
    },
    productos: cart.map(product => ({id: product.id , nombre: product.nombre , precio: product.precio, cantidad: product.quantity})),
    total: toltalPrice(),
  }

  if (cart.length === 0){//si no hay productos en el carrito manda este "return"
    return(
      <div className=' text-center pt-3'>
        <p>No producto en el carrito</p>
        <Link className='btn btn-outline-primary' to='/DesafioReact'>Buscar productos</Link>
      </div>
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
      {//El ItemCart de los productos
        cart.map(product => <ItemCart key={product.id} prod={product} /> )
      }
      <p  className='text-center'>
        total: {toltalPrice()}
      </p>
      <button onClick={comprar()}>Comprar productos</button>
    </>
  )
}

export default Mostrarcarrito