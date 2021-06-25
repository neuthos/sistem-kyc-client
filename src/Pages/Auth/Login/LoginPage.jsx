import React, { useState, useEffect } from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import BgLogin from "../../../assets/bgLogin.svg"
import Action from "../../../store/actions"
import Swal from "sweetalert2"

const bgLogin = {
  background: "url(" + BgLogin + ") no-repeat",
  backgroundSize: "cover",
};

export default function LoginPage() {
  const dispatch = useDispatch()
  const history = useHistory()
  const error = useSelector(state => state.Auth.error)
  const [input, setInput] = useState({})

  const handleChange = (e, name) => {
    
    if(name) {
      setInput({
        ...input,
        [name] : e.target.checked
      })
      return
    } 

    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    dispatch(Action.Auth.setError(""))
    
    const res = await dispatch(Action.Auth.Login(input))
    if(res) {
      setInput({})
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Success login',
      })
    }
  }

  return (
      <div className="container-fluid">
      <Row style={{display: "flex"}}>
          <div
            className="col-lg-7 d-none d-md-block bg-cover bg-primary"
            style={bgLogin}
          ></div>
          <div className="col-lg-5">
            <div className="row align-items-center min-vh-100 bg-white">
              <div className="col-md-7 col-lg-8 mx-auto">
                <h4 className="mb-0">Hi, </h4>
                <h4 >
                  Please login to your account
                </h4>
                <div className="mt-4">
                <Form.Label className="text-danger">{error ? error.message : ""}</Form.Label>
                  <Form>
                    <Form.Label>Email :</Form.Label>
                    <Form.Control
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                    />
                    
                    <Form.Label>Password :</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      value={input.password}
                      onChange={handleChange}
                    />
                    <Form.Group className="mt-2">
                      <Form.Check type="checkbox" name="isAdmin" label="Login as admin"  onChange={(e) => handleChange(e, "isAdmin")} />
                    </Form.Group>
                  </Form>
                  <Button variant="secondary" className="mt-4" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
                  <Button variant="" className="mt-4 text-secondary" onClick={() => history.push("/register")}>
                    Register
                  </Button>
              </div>
            </div>
          </div>
      </Row>
    </div>
  )
}
