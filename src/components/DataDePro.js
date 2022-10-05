import React from 'react'
import Titulo from './Titulo';
import Prod from './Prod'
{/*hice un componente de prueba para probar mandar datos por "prod" ya que con la api no podia*/ }
const Prueba = ({data=[]}) => {
  return (
    <>
    
    {data.map(prod => 
    <Prod key={prod.id} info={prod}/>)}
    </>  
    
  );
}

export default Prueba