import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import * as IoIcons from 'react-icons/io';
import Modal from "react-bootstrap/Modal";
import { getAllUsers } from "../../js/actions/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import TextField from "@mui/material/TextField";
import ModelAjoutProf from "./ModelAjoutProf"
import IconButton from "@mui/material/IconButton";
const AjoutPr = (cll) => {
  const [proffeseur, setProffeseur] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setProffeseur({ ...proffeseur, [e.target.name]: e.target.value });
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [getAllUsers]);
  const users = useSelector((state) => state.userReducer.compte);
  let profs = [];
  for (let i = 0; i < users.length; i++) {
    if (users[i].role === "proffeseur") {
      profs.push(users[i]);
    }
  }

  return (
    <div>
      <Button variant='outlined' color='error' onClick={handleShow}>
      <IoIcons.IoMdPeople /> <div style={{marginLeft:"5%"}}> proffeseur</div>
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ajout proffeseur</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <TextField
        id='outlined-select-currency-native'
        select
        label='proffeseur'
        name='proffeseur'
        defaultValue=""
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        variant='outlined'
      >
        <option disabled>-- selectioner un proffeseur --</option>
        {profs.map((prof) => (
          <option key={prof._id} value={prof._id}>
            {prof.email}
          </option>
          
        ))}
      </TextField>
      <IconButton aria-label='add to favorites'>
      <div style={{ marginRight: "50%" }}>
        <ModelAjoutProf cll={cll} userId={proffeseur} />
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

export default AjoutPr;
