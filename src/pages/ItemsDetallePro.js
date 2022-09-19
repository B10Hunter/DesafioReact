import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DetalleDePro from '../components/DetalleDePro';
{/*container de detalle*/}

const prod =[
    {
        "precio": 16.899 ,
        "id": 1 ,
        "nombre": "Zapatillas runnig Adidas galaxy 5" ,
        "img" : "negras1.jpg",
        "logo": "/img/logo/addidas.png",
        "marca" : "Addidas",
        "categoria" : "zapatillas"
        
    },
    {
        "precio": 29.699 ,
        "id": 2 ,
        "nombre": "Zapatillas Running Nike air zoom winflo 8" ,
        "img" : "gris1.jpg",
        "logo": "/img/logo/nike.png",
        "marca" : "Nike",
        "categoria" : "zapatillas"
        
    },
    {
        "precio": 14.999 ,
        "id": 3 ,
        "nombre": "Zapatillas Adidas Breaknet" ,
        "img" : "blanca1.jpg",
        "logo": "./img/logo/addidas.png",
        "marca" : "Addidas",
        "categoria" : "zapatillas"
        
    },
    {
        "precio": 36.299,
        "id": 4 ,
        "nombre": "Zapatillas Running Nike air zoom pegasus" ,
        "img" : "negras1.jpg",
        "logo": "./img/logo/nike.png",
        "marca" : "Nike",
        "categoria" : "zapatillas"
        
    },
    {
        "precio": 9.099 ,
        "id": 5 ,
        "nombre": "Remera Stripes" ,
        "img" : "remera-negra.jpg",
        "logo": "./img/logo/addidas.png",
        "marca" : "Addidas",
        "categoria" : "remeras"
        
    },
    {
        "precio": 6.499 ,
        "id": 6 ,
        "nombre": "Remera Fila day" ,
        "img" : "fila-day1.jpg",
        "logo": "./img/logo/fila.png",
        "marca" : "Fila",
        "categoria" : "remeras"
        
    },
    {
        "precio": 16.999 ,
        "id": 7 ,
        "nombre": "Remera juventus" ,
        "img" : "camiseta-juventus-adidas1.jpg",
        "logo": "./img/logo/addidas.png",
        "marca" : "Addidas",
        "categoria" : "remeras"
        
    },
    {
        "precio": 6.059 ,
        "id": 8 ,
        "nombre": "Remera Puma para mujer" ,
        "img" : "puma1.jpg",
        "logo": "./img/logo/puma.png",
        "marca" : "Puma",
        "categoria" : "remeras"
        
    }
    
    ]

const ItemsDetallePro = () => {

    const [data , setData] = useState ([]);

    const {detalleID} = useParams();
    
      useEffect (() => {
        const getData = new Promise ((resolve,reject) =>{
            setTimeout(() => {
              resolve(prod);
            },1000);
          });
          getData.then(res=> setData(res.find(prod => prod.id === parseInt(detalleID))));
          },[detalleID])
    
  

  return (
    <div className='container'>

    
    <DetalleDePro data={data}/>
   
  </div>
  )
}

export default ItemsDetallePro