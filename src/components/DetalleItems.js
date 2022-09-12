
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DetalleItems({id,contenido,titulo,precio}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button className='m-1' variant="primary" onClick={handleShow}>
          detalle
        </Button>
  
        <Modal show={show} id={id} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='h5'>{titulo}</Modal.Title>
            <Modal.Title className='mx-4 h4'>  ${precio}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <img className='imgTam' src={contenido}></img>
          </Modal.Body>
          <Modal.Footer>
            <Button className='' variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button className='' variant="primary" onClick={handleClose}>
              comprar
            </Button>
          </Modal.Footer>
        </Modal>
      </>
  )
}


export default DetalleItems