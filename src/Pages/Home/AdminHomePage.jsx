import React, { useEffect } from 'react'
import Headers from "../../Components/Headers"
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import Action from "../../store/actions"
import { useHistory } from 'react-router-dom'

export default function UserHomePage() {
  const dispatch = useDispatch()
  const users = useSelector(state => state.Admin.users)
  const history = useHistory()

  useEffect(_=> {
    dispatch(Action.Admin.getUsers({
      access_token: localStorage.access_token
    }))
  }, [dispatch])


  return (
    <div>
      <Headers/>
      <Container>
        <Row>
          {
            users.length !== 0 && 
            users.map(el => 
              <Col lg={4}>
                <Card className="mt-6 ">
                  <Row className="m-2">
                    <Col xs={12}>
                      <Col xs={12}>
                        <Form.Label style={{fontSize: 12}} className="mx-auto my-auto">
                          Name: {el.first_name + ' ' + el.last_name}
                        </Form.Label>
                      </Col>
                      <Col>
                        <Form.Label style={{fontSize: 12}} className="mx-auto my-auto">
                          Email: {el.email}
                        </Form.Label>
                      </Col>
                      <Col>
                        <Form.Label style={{fontSize: 12}} className="mx-auto my-auto">
                          Status: { el.UserDetail ? el.UserDetail.isVerified ? "Verified" : "Waiting for verification" : "Not Verifying" }
                        </Form.Label>
                      </Col>
                    </Col>
                    {
                      el.UserDetail ?  el.UserDetail.isVerified ?  "" : 
                        <Col xs={12} className="d-flex">
                          <Button variant="success" className="mt-4 mx-auto" onClick={() => history.push(`/verification/${el.id}`)}>
                            Verify
                          </Button>
                        </Col> : <Col xs={12} className="d-flex">
                          <Button variant="danger disabled" className="mt-4 mx-auto">
                            Verify
                          </Button>
                        </Col>
                    }
                  </Row>
                </Card>
              </Col>
            )
          }
        </Row>
      </Container>
    </div>
  )
}
