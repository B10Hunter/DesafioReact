import { useEffect, useState } from "react"


 
const ItemListConatiner = ({inicial, stock , onAdd}) => {//botones de sumar y restar productos  
    const [resultado, setResultado] = useState (parseInt(inicial));
    
    const restar = () => {
        setResultado(resultado - 1);
    }
    const sumar = () => {
      setResultado(resultado + 1);
  }
    useEffect(()=>{
      setResultado(parseInt(inicial))
    },[inicial])
  return ( 
  <div className="m-auto ">
      <p className="textCat">Cantidad</p>
      <div className='d-flex justify-content-center"'>
        <button type="button" disabled={resultado <= 1} onClick={restar} class="btnCantidad ">-</button>
            <p className="txtCantidad">{resultado} </p>
        <button type="button" disabled={resultado >= stock} onClick={sumar} class=" btnCantidad ">+</button>
        <button className="btnCompra" disabled={stock <= 0} onClick={()=> onAdd (resultado) }> Comprar</button>
      </div>
  </div>
  );
}

export default ItemListConatiner