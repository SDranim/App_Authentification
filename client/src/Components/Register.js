import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../JS/Actions/userAction";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(register({name,email,password},navigate))
  }
  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter email" value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" placeholder="Password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit" >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
