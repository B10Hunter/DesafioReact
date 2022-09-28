import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetalleDePro from '../components/DetalleDePro';
import {getFirestore, getDoc, doc} from 'firebase/firestore'
{/*container de detalle*/}



const ItemsDetallePro = () => {

    const [data , setData] = useState ([]);

    const {detalleID} = useParams();
    
      useEffect (() => {
        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', detalleID);
        getDoc(queryDoc)
            .then(res => setData ({id: res.id, ...res.data()}))
          },[detalleID])
    
  

  return (
    <div className='container'>

    
    <DetalleDePro data={data}/>
   
  </div>
  )
}

export default ItemsDetallePro