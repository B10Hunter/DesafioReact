import React from 'react'
import ItemListConatiner from './ItemListConatiner'
import DetalleItems from './DetalleItems'
import { NavLink } from 'react-router-dom'
const Prod = ({info}) => {
  return (
    <div className='container'> 
        
    <div className=' row ' key={info.id}   >
        <div className='  row m-auto mb-1 col-5  justify-content-center' >
            <div className='   card shadow mb-2 rounded' >
                <div className="card-body ">
                    <p className="card-text text-center"> {info.nombre} </p>
                </div>
                <div >
                    <img className='imgTam' src={`${process.env.PUBLIC_URL}/img/${info.img}`} ></img>
                </div>
                <div className='p-2 d-flex justify-content-center"'>
                    <button className='me-3 btn btn-outline-primary'>comprar</button>
                    <button className='btn btn-outline-primary'>agregar al carrito</button>
                    <NavLink className='me-1 btn btn-light' to={`/producto/${info.id}`}>Detalle completo</NavLink>
                </div> 
            </div> 
        </div>
        
    </div>
  </div>
  )
}

export default Prod