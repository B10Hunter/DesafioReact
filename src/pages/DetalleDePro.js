import React from 'react'
import ItemListConatiner from '../components/ItemListConatiner'
const DetalleDePro = ({producto}) => {
  return (
    <div>
        <h2 className='text-center m-3'>DetalleDePro</h2>
        <div className=' row '  >
            <div className='  row m-auto mb-1 col-5  justify-content-center'>
                <div className='   card shadow mb-2 rounded' >
                    <div className="card-body ">
                        <p className="card-text text-center"> </p>
                    </div>
                    <div >
                        <img className='imgTam' ></img>
                    </div>
                    <div className='p-2 d-flex justify-content-center"'>
                        <ItemListConatiner/>
                        <button className='me-3 btn btn-outline-primary'>comprar</button>
                        <button className='btn btn-outline-primary'>agregar al carrito</button>
                    </div> 
                </div> 
            </div>
        </div>
        
    </div>
  )
}

export default DetalleDePro