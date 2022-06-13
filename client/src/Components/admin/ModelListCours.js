import React from 'react'
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "@mui/material/Button";

const ModalClasseEt = (form) => {
    

    var cll=form.form.cours
   console.log(cll[2].content)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleShow}>
        liste de cours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          {cll.map((cl) => (
            <div><a href={cl.content}>{cl.content}</a></div>
           ))}
 
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalClasseEt