import React, { useState, useEffect } from "react";
import { loginUser } from "../js/actions/user";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import "./Login.css";
const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navig = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  const userAuth = useSelector((state) => state.userReducer.isAuth);

  useEffect(() => {
    if (userAuth === true) {
      navigate("/acceil");
    } else {
      navigate("/");
    }
  }, [userAuth]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
    
      <Button onClick={handleShow} style={{marginLeft:"5px"}}>connecter</Button>
      <Modal show={show} onHide={handleClose}>
        <div className='wrapper'>
          <div className='logo'>
            <img
              src="http://127.0.0.1:6500/public/logo.png"
              alt='logo'
            />
          </div>
          <div className='text-center mt-4 name'>Alpha Management</div>
          <form className='p-3 mt-3' onSubmit={navig}>
            <div className='form-field d-flex align-items-center'>
              <span className='far fa-user' />
              <input
                type='text'
                name='email'
                id='email'
                value={email}
                placeholder='email'
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='form-field d-flex align-items-center'>
              <span className='fas fa-key' />
              <input
                type='password'
                name='password'
                value={password}
                id='pwd'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className='btn mt-3'>Login</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
