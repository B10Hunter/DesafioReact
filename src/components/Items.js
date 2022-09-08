import React from 'react'
import productos from "../data/api.json"
import ItemListConatiner from './ItemListConatiner'




const promesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve(productos);
    },3000)
  })
  promesa
  .then(producto=>console.log(producto));
  

 
const Items = () => {
  return (
    <div className='container'> 
        {
        productos.map((producto,i) =>

        <div className=' row ' key={i} >
            <div className='  row m-auto mb-1 col-4  justify-content-center'>
                <div className='   card shadow mb-2 rounded' >
                    <div class="card-body ">
                        <p class="card-text text-center"> {producto.nombre}</p>
                    </div>
                    <div >
                    <img className='' src={producto.img} ></img>
                    </div>
                    <div className='p-2 d-flex justify-content-center"'>
                    <ItemListConatiner/>
                    <button className='me-3 btn btn-outline-primary'>comprar</button>
                    <button className='btn btn-outline-primary'>agregar al carrito</button>
                    </div> 
                </div> 
            </div>
        </div> )
        }
    </div>
  )
}
export default Items
