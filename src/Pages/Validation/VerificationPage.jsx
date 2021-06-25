import React, { useEffect } from 'react'
import Headers from "../../Components/Headers"
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Action from "../../store/actions"
import { useHistory, useParams } from 'react-router-dom'
import Swal from "sweetalert2"

export default function UserHomePage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.Admin.user)
  const idCardImages = useSelector(state => state.Admin.userIdCardImages)
  const photos = useSelector(state => state.Admin.userPhotosImages)
  const history = useHistory()
  const { userId } = useParams()

  useEffect( async _ => {
    await dispatch(Action.Admin.getUserData({
      access_token: localStorage.access_token,
      userId: userId
    }))
  }, [dispatch])


  useEffect( async _ => {
    if(user.UserDetail) {

    await dispatch(Action.Admin.getUserIdCardImages({
       access_token: localStorage.access_token,
       imageName: user.UserDetail.id_image_url
     }))

     await dispatch(Action.Admin.getUserPhotosImages({
      access_token: localStorage.access_token,
      imageName: user.UserDetail.photo_image_url
    }))
    }
  }, [user])

  const handleVerify = async (e) => {
    e.preventDefault()

    const res = await dispatch(Action.Admin.verifyUser({
      access_token: localStorage.access_token,
      userId: userId
    }))

    if(res) {
      history.push("/dashboard")
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Succes verification',
      })
    } else {
      Swal.fire({
        icon: 'errorr',
        title: 'Err...',
        text: 'Something error',
      })
    }
  } 

  console.log(user);

  return (
    <div>
      <Headers/>
      <Container>
        <Card className="mt-3 p-4">
          <h4 className="m-2">Verify this account</h4>
        <Row className="m-2">
          <Col className="d-flex mb-2" xs={12}>
            <div className="mx-auto">
              {
                <>
                <img src={idCardImages} alt="ID Card Image"  className="mr-6" style={{width: "350px"}} />
                <img src={photos} alt="User Photos"  className="mr-6" style={{width: "350px"}} />
                </>
              }
            </div>
          </Col>
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
          <Col xs={12} className="d-flex">
            <Button variant="success" className="mt-4 mx-auto" onClick={handleVerify}>
              Verify
            </Button>
          </Col>
        </Row>
        </Card>
      </Container>
    </div>
  )
}
