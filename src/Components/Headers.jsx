import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Action from "../store/actions"

export default function Headers() {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const handleLogout = (e) => {
    e.preventDefault()

    dispatch(Action.Auth.setLogout())
  }

  return (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">NeuKyc</Navbar.Brand>
    <Nav className="mr-auto" onClick={() => history.push("/")}>
      <Nav.Link href="">Home</Nav.Link>
    </Nav>
    <Form inline>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </Form>
  </Navbar>
  )
}
