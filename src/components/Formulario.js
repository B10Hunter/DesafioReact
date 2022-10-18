import React, { useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useCartContext } from '../context/CartContext'
import { collection, getFirestore, addDoc } from 'firebase/firestore';

import Swal from 'sweetalert2';


function Formulario( {precioTotal } ) { //Formulario de compra de o los productos
    const [comprador, setComprador] = useState({
        nombre:"",
        email:"",
        apellido:""
    })
    const {nombre, apellido, email} = comprador
    const eventoChangeInput = (e) => {
        const {name, value} = e.target
        setComprador({...comprador, [name] : value})
    }
    
    
    
    const fecha = new Date();
    const {cart,toltalPrice, clearCart} = useCartContext();
    const orden = {//la orden de compra que el usario , se manda a  Firebase y en consola se muentra el addres del la orde.
        buyer: {
            nombre: `${nombre}`,
            apellido: `${apellido}`,
            email: `${email}`,
            addres: 'odsnfkasnflk'
        },
        productos: cart.map(product => ({id: product.id ,fecha:fecha.toISOString().split('T')[0] , nombre: product.nombre , precio: product.precio, cantidad: product.quantity})),
        total: toltalPrice(),
    }
    const comprar = () =>{
        const db = getFirestore();
        const ordersCollection = collection (db, 'orden');
        addDoc(ordersCollection, orden)
        .then(({id}) => console.log(id))
        
    }
    
    
    function handleSubmit(e) {
        e.preventDefault();
        if(!orden.buyer.nombre || !orden.buyer.apellido|| !orden.buyer.email ){
            alert('por favor lleno los datos');
        }else{
            console.log(orden);
            handleClose();
            clearCart();
            Swal.fire(
                `
                    <h2> ¡COMPRASTE EXITOSAMENTE! </h2>  
                    <h3> Hola, ${nombre} </h3>
                    <h5> Te enviaremos los detalles a tu email: ${email} </h5> 
                    <h4>¡Muchas Gracias por su compra!</h4>
                `);
            comprar();
            };
      };

    
    
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);


  return (
    <>
        <button className='btnEliminar'  onClick={handleShow}>
        Comprar productos
        </button>

        <Modal show={show} className='justify-content-center my-5' closeButton onHide={handleClose}>
        <div className='bordesModal'>
        <Modal.Body> 
            <p className=' textcolor text-center' closeButton>Formulario de compra</p>
        <div className='text-primary h6 m-3'>
            <p>Por favor llener el formulario para hacer la compra. <br/>
            Sino no se mandara los detalles a su email.<br/> Gracias.</p>
        </div>
        <form onSubmit={handleSubmit}>
            <ul className='form p-2'>
                <li className=' p-1'>Nombre:<input 
                    type='Text'
                    name="nombre"
                    value={nombre}
                    placeholder='Nombre'
                    onChange={eventoChangeInput}
                />
                </li>
                <li className='p-1'>Apeliido:<input
                    type='Text'
                    name="apellido"
                    value={apellido}
                    placeholder='Apellido'
                    onChange={eventoChangeInput}
                />
                </li>
                <li className=''>Email:<input
                    type="email"
                    name="email"
                    placeholder='Email'
                    value={email}
                    onChange={eventoChangeInput}
                />
                </li>
            </ul>
            <p className='text-center total h3'>Total a pagar:<span className='p-1 text-dark'>${precioTotal}</span> </p>
            <div className='d-flex justify-content-center'>
                <button type="submit"  disabled={!orden.buyer.nombre || !orden.buyer.apellido|| !orden.buyer.email } className='btnEliminar  p-1 me-4'  >
                    Comprar producto
                </button>
            </div>
        </form> 
        </Modal.Body>
        </div>
        </Modal>
    </>
  );
}

export default Formulario