import { useState, useEffect } from "react"


 
const ItemListConatiner = () => {//botones de sumar y restar productos + 
    const [resultado, setResultado] = useState (0);
    
     useEffect (() =>{ 
      const t = setTimeout (()=>{
              console.log ('montado')
      },[1000]);
      
      return () =>{
          clearTimeout(t);
        console.log('desmontado')
      }
     },[resultado]);
  return ( 
  <div className="m-auto">
      <div className=' px-2 py-2 d-flex justify-content-center"'>
         <button type="button" onClick={()=> setResultado (resultado - 1)} class="btn btn-primary me-1">-</button>
            <p className="m-1 p-1">{resultado} </p>
         <button type="button" onClick={()=> setResultado (resultado + 1)} class="btn btn-primary me-1">+</button>
      </div>
    </div>
  )
}

export default ItemListConatiner