import React from 'react'

export const Cosa = (props) => {//Titulo principal
  return (
    <div className='text-center'>
      <h1 className=' bordesProd'>Productos</h1>
       <>{props.modelo} </>
    </div>
  )
}
export default Cosa
