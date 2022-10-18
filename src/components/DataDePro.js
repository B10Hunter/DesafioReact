import React from 'react'
import Prod from './Prod'

const Prueba = ({data=[]}) => {
  return (
    <>
    {data.map(prod => 
    <Prod key={prod.id} info={prod}/>)}
    </>  
  );
}

export default Prueba