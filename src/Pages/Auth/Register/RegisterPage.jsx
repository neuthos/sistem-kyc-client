import React, { useState } from 'react'
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

  const handleRegister = async (e) => {
    e.preventDefault()
    dispatch(Action.Auth.setError(""))

    const res = await dispatch(Action.Auth.Register(input))

    if(res) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Register success',
      })
      history.push("/login")
      setInput({})
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please double check the form',
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
                  Fill the form to register
                </h4>
                <div className="mt-4">
                  <Form>
                    <Form.Label>Email :</Form.Label>
                    <Form.Control
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                    />

                    <Form.Label>First Name :</Form.Label>
                    <Form.Control
                      name="first_name"
                      value={input.first_name}
                      onChange={handleChange}
                    />

                    <Form.Label>Last Name :</Form.Label>
                    <Form.Control
                      name="last_name"
                      value={input.last_name}
                      onChange={handleChange}
                    />

                    <Form.Label>Password :</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      value={input.password}
                      onChange={handleChange}
                    />
                  </Form>
                  <Button variant="secondary" className="mt-4" onClick={handleRegister}>
                    Register
                  </Button>
                </div>
                  <Button variant="" className="mt-4 text-secondary" onClick={() => history.push("/login")}>
                    Login
                  </Button>
              </div>
            </div>
          </div>
      </Row>
    </div>
  )
}