import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import ItemListConatiner from './ItemListConatiner'
{/*Resultado de detalle + stock del producto y llevar el producto al carrito*/ }
const DetalleDePro = ({data}) => {
    const [goToCart, setGoToCart] = useState (false);
    const {addProduct} = useCartContext();


      const onAdd = (quantity) => {
        setGoToCart (true);
        addProduct(data, quantity);
      }

  return (
    <div className='container'> 
        
    <div className=' row ' key={data.id}   >
        <div className='  row m-auto my-4 mb-1 col-5  justify-content-center' >
            <div className='   card shadow mb-2 rounded' >
                <div className="card-body  d-flex text-center">
                    <p className="card-text textName text-center"> {data.nombre}</p>              
                    <span className='textMoney' >${data.precio}</span>
                </div>
                <div >
                    <img className='imgTam' src={`${process.env.PUBLIC_URL}/img/${data.img}`} ></img>
                </div>
                <div className='p-2 d-flex justify-content-center"'>
                  {
                    
                    goToCart
                    ? <div className='d-flex'><Link className='text-decoration-none' to='/cart'><p className='btnIrCart'>ir al carrito</p></Link> <p className='textCompra'>Gracias por su compra, su producto se agrego al carrito.</p></div>
                    : <ItemListConatiner  inicial={1} stock={5} onAdd={onAdd} />
                    
                  }
                  
                </div> 
            </div> 
        </div>
        
    </div>
  </div>
  )
}


export default DetalleDePro