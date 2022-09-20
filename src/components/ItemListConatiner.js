import { useState } from "react"


 
const ItemListConatiner = ({inicial, stock , onAdd}) => {//botones de sumar y restar productos  
    const [resultado, setResultado] = useState (inicial);
    
    const restar = () => {
        setResultado(resultado - 1);
    }
    const sumar = () => {
      setResultado(resultado + 1);
  }
  return ( 
  <div className="m-auto">
      <div className=' px-2 py-2 d-flex justify-content-center"'>
         <button type="button" disabled={resultado <= 1} onClick={restar} class="btn btn-primary me-1">-</button>
            <p className="m-1 p-1">{resultado} </p>
         <button type="button" disabled={resultado >= stock} onClick={sumar} class="btn btn-primary me-1">+</button>
      </div>
      <div>
          <button className="btn btn-outline-primary" disabled={stock <= 0} onClick={()=> onAdd (resultado) }> Agregar al carrito </button>
      </div>
    </div>
  );
}

export default ItemListConatiner