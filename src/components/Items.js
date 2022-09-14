import React, { useEffect, useState } from 'react'
import productos from "../data/api.json"
import ItemListConatiner from './ItemListConatiner'
import { useParams } from 'react-router-dom'
import DetalleItems from './DetalleItems'



 
const Items = () => {

  const [data , setData] = useState ([]);
  
  const {categoriaID} = useParams();
  
    useEffect (() => {
      const getData = new Promise (resolve =>{
          setTimeout(() => {
            resolve(productos);
          },3000);
        });
        if (categoriaID){
          getData.then(res =>setData (res.filter(productos => productos.categoria === categoriaID)));
        } else {
          getData.then(res => setData(res));
        }
       
    },[categoriaID])
  

  return (
    <div className='container'> 
        { //hago la cards de los productos + el boton de detalle "DetalleItems"
        productos.map((producto,i) =>

        <div className=' row ' key={i}  >
            <div className='  row m-auto mb-1 col-5  justify-content-center' data-bs-toggle="modal" data-bs-target={`#id${producto.id}`} >
                <div className='   card shadow mb-2 rounded' >
                    <div className="card-body ">
                        <p className="card-text text-center"> {producto.nombre}</p>
                    </div>
                    <div >
                        <img className='imgTam' src={`${process.env.PUBLIC_URL}/img/${producto.img}`} ></img>
                    </div>
                    <div className='p-2 d-flex justify-content-center"'>
                        <ItemListConatiner/>
                        <button className='me-3 btn btn-outline-primary'>comprar</button>
                        <button className='btn btn-outline-primary'>agregar al carrito</button>
                        <DetalleItems id={producto.id} precio={producto.precio} contenido={`${process.env.PUBLIC_URL}/img/${producto.img}`} titulo={producto.nombre} />
                    </div> 
                </div> 
            </div>
            
        </div>

        )}
    </div>
  )
}
export default Items
