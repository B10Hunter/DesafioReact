import React, { useEffect, useState } from 'react'
import {getFirestore , collection, getDocs, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import DataDePro from './DataDePro'

const Items = () => {
 


  const [data , setData] = useState ([]);
  
  const {categoriaID} = useParams();
  
    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos');
        
        if(categoriaID){//filtro por categoria del producto
          const queryFilter = query(queryCollection, where('categoria' , '==', categoriaID))
          getDocs(queryFilter)
          .then(res => setData(res.docs.map( product => ({id: product.id, ...product.data()}))))

        //  getData.then(res => setData(res.filter (prod => prod.categoria === categoriaID)))
        } else {
        getDocs(queryCollection)
        .then(res => setData(res.docs.map( product => ({id: product.id, ...product.data()}))))
        }
        
    
      
        
        },[categoriaID])
  

  return (
    <div className='container'>

    
      <DataDePro data={data}/>
     
    </div>
  )
}
export default Items
