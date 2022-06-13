import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import * as IoIcons from 'react-icons/io';
import Modal from "react-bootstrap/Modal";
import { getAllUsers } from "../../js/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import ModelAjoutEtud  from "./ModelAjoutEtud";
import IconButton from "@mui/material/IconButton";
const Ajouet = (cll) => {
  const [etudiant, setEtudiant] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setEtudiant({ ...etudiant, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [getAllUsers]);
  const users = useSelector((state) => state.userReducer.compte);

  let etuds = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "etudiant") {
      etuds.push(users[i]);
    }
  }

  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleShow}>
      <IoIcons.IoMdPeople /> <div style={{marginLeft:"5%"}}> etudiant</div>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ajout etudiant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <TextField
        id='outlined-select-currency-native'
        select
        label='etudiant'
        name='etudiant'
        defaultValue={etudiant}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        variant='outlined'
      >
        <option disabled>-- selectioner un etudiant --</option>
        {etuds.map((etud) => (
          <option key={etud._id} value={etud._id}>
            {etud.email}
          </option>
          
        ))}
      </TextField>
      <IconButton aria-label='add to favorites'>
      <div style={{ marginRight: "50%" }}>
        <ModelAjoutEtud cll={cll} userId={etudiant} />
      </div>
    </IconButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose} >
            fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Ajouet;
