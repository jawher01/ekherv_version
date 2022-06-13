import React from 'react'
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import { useState } from "react";
const ListProf = (profs) => {
    const profss=profs.profs
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
              <Modal.Title>list professeur</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {profss.map((pro) => (
              <div style={{display:"flex"}}>
                <div style={{marginRight:"3%"}}>{pro.nom}</div>
                <div>{pro.prenom}</div>
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

export default ListProf