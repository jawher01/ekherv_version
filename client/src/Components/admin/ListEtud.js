import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
const ListEtud = (etuds) => {
    
    const etudss=etuds.etuds
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    
      <Button variant='outlined' color='primary' onClick={handleShow}>
        List 
      </Button>
     
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>list etudiant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {etudss.map((etu) => (
          <div style={{display:"flex"}}>
            <div style={{marginRight:"3%"}}>{etu.nom}</div>
            <div>{etu.prenom}</div>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ListEtud