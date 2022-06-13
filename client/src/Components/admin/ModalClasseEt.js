import React from 'react'
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import {addCours} from "../../js/actions/classe"
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
const ModalClasseEt = (id) => {
  const [cours, setCours] = useState([]);
  
    const user = useSelector((state) => state.userReducer.user);
    
 const idCl=id.id
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fileChanged = (e) => {
    e.preventDefault();
    setCours({ ...cours, [e.target.name]:(e.target.files[0])});
  };

  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleShow}>
        ajouter cours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal cours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form><TextField
          required
          id='outlined-required'
          name="cours"
          type="file"
          onChange={fileChanged}
        /></Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            fermer
          </Button>

          <Button
            variant='primary'
            
            onClick={() => {
              
              addCours({
                user: user._id,
                classe:idCl,
                content:cours.cours,
              });
             
            }}
          >
            confirmer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalClasseEt