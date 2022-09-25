import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DataDePro from './DataDePro'

const prod =[
  {
      "precio": 16899 ,
      "id": 1 ,
      "nombre": "Zapatillas runnig Adidas galaxy 5" ,
      "img" : "negras1.jpg",
      "logo": "/img/logo/addidas.png",
      "marca" : "Addidas",
      "categoria" : "zapatillas"
      
  },
  {
      "precio": 29699 ,
      "id": 2 ,
      "nombre": "Zapatillas Running Nike air zoom winflo 8" ,
      "img" : "gris1.jpg",
      "logo": "/img/logo/nike.png",
      "marca" : "Nike",
      "categoria" : "zapatillas"
      
  },
  {
      "precio": 14999 ,
      "id": 3 ,
      "nombre": "Zapatillas Adidas Breaknet" ,
      "img" : "blanca1.jpg",
      "logo": "./img/logo/addidas.png",
      "marca" : "Addidas",
      "categoria" : "zapatillas"
      
  },
  {
      "precio": 36299,
      "id": 4 ,
      "nombre": "Zapatillas Running Nike air zoom pegasus" ,
      "img" : "negras1.jpg",
      "logo": "./img/logo/nike.png",
      "marca" : "Nike",
      "categoria" : "zapatillas"
      
  },
  {
      "precio": 9099 ,
      "id": 5 ,
      "nombre": "Remera Stripes" ,
      "img" : "remera-negra.jpg",
      "logo": "./img/logo/addidas.png",
      "marca" : "Addidas",
      "categoria" : "remeras"
      
  },
  {
      "precio": 6499 ,
      "id": 6 ,
      "nombre": "Remera Fila day" ,
      "img" : "fila-day1.jpg",
      "logo": "./img/logo/fila.png",
      "marca" : "Fila",
      "categoria" : "remeras"
      
  },
  {
      "precio": 16999 ,
      "id": 7 ,
      "nombre": "Remera juventus" ,
      "img" : "camiseta-juventus-adidas1.jpg",
      "logo": "./img/logo/addidas.png",
      "marca" : "Addidas",
      "categoria" : "remeras"
      
  },
  {
      "precio": 6059 ,
      "id": 8 ,
      "nombre": "Remera Puma para mujer" ,
      "img" : "puma1.jpg",
      "logo": "./img/logo/puma.png",
      "marca" : "Puma",
      "categoria" : "remeras"
      
  }
  
  ]
 
 
const Items = () => {
 


  const [data , setData] = useState ([]);
  
  const {categoriaID} = useParams();
  
    useEffect (() => {
      const getData = new Promise ((resolve,reject) =>{
          setTimeout(() => {
            resolve(prod);
          },1000);
        });
        if(categoriaID){//filtro por categoria del producto
          getData.then(res => setData(res.filter (prod => prod.categoria === categoriaID)))
        } else {
        getData.then(res => setData(res));
        }
        
        },[categoriaID])
  

  return (
    <div className='container'>

    
      <DataDePro data={data}/>
     
    </div>
  )
}
export default Items
