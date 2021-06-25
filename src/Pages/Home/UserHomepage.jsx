import React, { useEffect, useState } from 'react'
import Headers from "../../Components/Headers"
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Action from "../../store/actions"
import { useHistory } from 'react-router-dom'

export default function UserHomePage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.User.user)
  const history = useHistory()


  useEffect(_ => {
    dispatch(Action.User.getUserData({ access_token : localStorage.access_token }))
  }, [dispatch])
  
  return (
    <div>
      <Headers/>
      <Container>
        <Card className="mt-6 p-4">
          <h4 className="m-2">Account Detail</h4>
        <Row className="m-2">
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                First Name : {user.first_name}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Last Name : {user.last_name}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Father's/Mother's First Name : {user.UserDetail ? user.UserDetail.parent_firstName : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Father's/Mother's Last Name : {user.UserDetail ? user.UserDetail.parent_lastName : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Gender: {user.UserDetail ? user.UserDetail.gender : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Marital Status: {user.UserDetail ? user.UserDetail.marital_status : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Date of Birth: {user.UserDetail ? user.UserDetail.date_birth : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Nationality: {user.UserDetail ? user.UserDetail.nationality : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Address: {user.UserDetail ? user.UserDetail.address : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                City: {user.UserDetail ? user.UserDetail.city : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Province: {user.UserDetail ? user.UserDetail.province : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Zip Code: {user.UserDetail ? user.UserDetail.zip_code : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Phone Number: {user.UserDetail ? user.UserDetail.phone_number : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Email: {user.email}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                ID Type : { user.UserDetail ? user.UserDetail.id_type : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6}>
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                ID Number :  { user.UserDetail ? user.UserDetail.id_number : "-"}
              </Form.Label>
            </div>
          </Col>
          <Col xs={6} className="mx-auto">
            <div style={{ backgroundColor: "#eceff2", borderRadius: "30px" }} className="mt-2 d-flex">
              <Form.Label style={{fontSize: 16}} className="mx-auto my-1">
                Verified : { user.UserDetail ? user.UserDetail.isVerified ? "Verified" : "Waiting for verification" : "Not Verified" }
              </Form.Label>
            </div>
          </Col>
          {
            !user.UserDetail &&  
            <Col xs={12} className="d-flex">
              <Button variant="success" className="mt-4 mx-auto" onClick={() => history.push("/verify")}>
                Verify
              </Button>
            </Col>
          }
         
        </Row>
        </Card>
      </Container>

    </div>
  )
}
