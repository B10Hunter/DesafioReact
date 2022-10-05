import React from 'react'
import { NavLink } from 'react-router-dom'


const Prod = ({info}) => {

    
  return (
    <div className='container boder-cart'> 
        <div className=' row pt-3 ' key={info.id}   > 
            <div className='  row m-auto mb-1 col-5  justify-content-center ' >
                <NavLink className=' btn btn-light' to={`/producto/${info.id}`}>
                    <div className='   card shadow mb-2 rounded' >
                        <div className="card-body d-flex text-center ">
                            <p className=" textName text-center"> {info.nombre}</p>
                            <span className='textMoney'>
                            ${info.precio}
                            </span>
                        </div>
                        <div >
                            <img className='imgTam' src={`${process.env.PUBLIC_URL}/img/${info.img}`} ></img>
                        </div>
                    </div> 
                </NavLink>
            </div>
        </div>
    </div>
  )
}

export default Prod