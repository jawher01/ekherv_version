
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { participe, unParticipe } from "../../../js/actions/evenement";

const NomParticipant = ({tab,evet, userId }) => {
  
  const evenements = useSelector((state) => state.evenementReducer.evenement);

  const currentEve = evenements.find((p) => p._id == evet);
  const [participess, setParticipes] = useState(currentEve.participant);
 
  const exist = participess.find( user => user._id === userId );
  const [participed, setParticiped] = useState(exist);
  console.log({participed,participess,userId,participed,exist})
 
  const dispatch = useDispatch();
  const sync = () => {
    const byId = id => id === userId;
      const exist = participess.find( byId );
    const newParticipes = !exist  ? [...participess,userId] : participess.filter(id=>id!=userId)
    setParticipes(newParticipes)
    }
  const participes = () => {
    dispatch(participe(evet, userId));
    setParticiped(true);
  };
 
  const unParticipes = () => {
    dispatch(unParticipe(evet, userId));
    setParticiped(false);
  };
  
 
  var tabss=[]
  for (let i = 0; i < tab.length; i++) {
     tabss.push(tab[i]);
  }
  
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
    <div className='like-container'>

    {!participed ?
      <Button variant='contained' onClick={participes} color='error'>
        participer
      </Button>
      :
      <Button variant='contained' onClick={unParticipes} color='primary'>
        ignore
      </Button>
    }
  </div>
      <Button variant='outlined' color='error' onClick={handleShow}>
        {tab.length}
      </Button>
     
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>list participant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {tabss.map((tabs) => (
          <div style={{display:"flex"}}>
            <div style={{marginRight:"3%"}}>{tabs.nom}</div>
            <div>{tabs.prenom}</div>
            </div>
          ))}
          {   participed &&      <div style={{display:"flex"}}>
          <div style={{marginRight:"3%"}}>you</div>
          </div>   }
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



export default NomParticipant



