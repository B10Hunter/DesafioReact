import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemListConatiner from './ItemListConatiner'
{/*Resultado de detalle + stock del producto y llevar el producto al carrito*/ }
const DetalleDePro = ({data}) => {
    const [goToCart, setGoToCart] = useState (false) 

      const onAdd = (quantity) => {
        setGoToCart (true)
      }

  return (
    <div className='container'> 
        
    <div className=' row ' key={data.id}   >
        <div className='  row m-auto mb-1 col-5  justify-content-center' >
            <div className='   card shadow mb-2 rounded' >
                <div className="card-body ">
                    <p className="card-text text-center"> {data.nombre} </p>
                </div>
                <div >
                    <img className='imgTam' src={`${process.env.PUBLIC_URL}/img/${data.img}`} ></img>
                </div>
                <div className='p-2 d-flex justify-content-center"'>
                  {
                    goToCart
                    ? <Link className='me-3 btn btn-outline-primary' to='/cart'>Terminar compra </Link>
                    : <ItemListConatiner inicial={3} stock={5} onAdd={onAdd} />
                  }
                    
                    <button className='me-3 btn btn-outline-primary'>comprar</button>
                </div> 
            </div> 
        </div>
        
    </div>
  </div>
  )
}


export default DetalleDePro