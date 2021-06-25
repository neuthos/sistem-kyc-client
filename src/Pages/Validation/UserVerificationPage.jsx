import React, { useState } from 'react'
import Headers from "../../Components/Headers"
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Action from "../../store/actions"
import { useHistory } from 'react-router-dom'
import Swal from "sweetalert2"

export default function UserHomePage() {
  const dispatch = useDispatch()
  const history = useHistory()
  
  const [input, setInput] = useState({
    gender: "Male",
    marital_status: "Single",
    nationality: "Indonesia",
    id_type: "ID-Card"
  })
  const [images, setImages] = useState({})
  const [imageUrl, setImageUrl] = useState({})


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

  const fileSelected = async (e, name) => {
    e.preventDefault()

    const file = e.target.files[0];
    setImages({
      ...images,
      [name] : file
    })

    setImageUrl({
      ...imageUrl,
      [name] : URL.createObjectURL(file)
    })

  }

  const handleVerification = async (e) => {
    try {
      e.preventDefault()
  
      const formData = new FormData()
  
      formData.append("id_type", input.id_type)
      formData.append("id_number", input.id_number)
      formData.append("nationality", input.nationality)
      formData.append("address", input.address)
      formData.append("parent_firstName", input.parent_firstName)
      formData.append("parent_lastName", input.parent_lastName)
      formData.append("gender", input.gender)
      formData.append("marital_status", input.marital_status)
      formData.append("date_birth", new Date(input.date_birth))
      formData.append("city", input.city)
      formData.append("province", input.province)
      formData.append("phone_number", input.phone_number)
      formData.append("zip_code", input.zip_code)
      formData.append("ID_IMAGES", images.ID_IMAGES)
      formData.append("FACE_VALIDATION", images.FACE_VALIDATION)
  
      const res = await dispatch(Action.User.Validation({
        data: formData,
        access_token: localStorage.access_token
      }))

      if(res) {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Succes verification. Waiting for admin approval',
        })
        history.push("/")
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Err...',
          text: 'Please fill all the form',
        })
      }
  
      
    } catch (err) {
      
    }
  }

  console.log(input);
  return (
    <div>
      <Headers/>
      <Container>
        <Card className="mt-6 p-4">
          <h4 className="m-2">Verify your Account</h4>
        <Row className="m-2">
          <Col xs={6} className="mt-2">
            <Form.Label> Father's/Mother's First Name :</Form.Label>
            <Form.Control
              name="parent_firstName"
              onChange={handleChange}
              value={input.parent_firstName}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Father's/Mother's Last Name :</Form.Label>
            <Form.Control
              name="parent_lastName"
              onChange={handleChange}
              value={input.parent_lastName}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Gender :</Form.Label>
            <Form.Control 
              as="select"
              name="gender"
              onChange={handleChange}
              value={input.gender}
            >
              <option>Male</option>
              <option>Female</option>
            </Form.Control>
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Marital Status :</Form.Label>
            <Form.Control 
              as="select"
              name="marital_status"
              onChange={handleChange}
              value={input.marital_status}
            >
              <option>Single</option>
              <option>Maried</option>
            </Form.Control>
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Date of Birth :</Form.Label>
            <Form.Control
              name="date_birth"
              type="date"
              onChange={handleChange}
              value={input.date_birth}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Nationality :</Form.Label>
             <Form.Control 
              as="select"
              name="nationality"
              onChange={handleChange}
              value={input.nationality}
            >
              <option>Indonesia</option>
              <option>Singapure</option>
              <option>Malaysia</option>
            </Form.Control>
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Address :</Form.Label>
            <Form.Control
              name="address"
              onChange={handleChange}
              value={input.address}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> City :</Form.Label>
            <Form.Control
              name="city"
              onChange={handleChange}
              value={input.city}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Province :</Form.Label>
            <Form.Control
              name="province"
              onChange={handleChange}
              value={input.province}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Zip Code :</Form.Label>
            <Form.Control
              name="zip_code"
              type="number"
              onChange={handleChange}
              value={input.zip_code}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label> Phone Number :</Form.Label>
            <Form.Control
              name="phone_number"
              type="number"
              onChange={handleChange}
              value={input.phone_number}
            />
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label>ID Type :</Form.Label>
            <Form.Control 
              as="select"
              name="id_type"
              onChange={handleChange}
              value={input.id_type}
            >
              <option>ID-Card</option>
              <option>Driver-License</option>
              <option>Passport</option>
            </Form.Control>
          </Col>
          <Col xs={6} className="mt-2">
            <Form.Label>ID Number :</Form.Label>
              <Form.Control
                name="id_number"
                type="number"
                onChange={handleChange}
                value={input.id_number}
              />
          </Col>
        </Row>
        </Card>

        <Card className="mt-6 p-4 mb-6">
        <Row className="m-2">
          <Col xs={6}>
            <div>
            <Form.Label className="d-block">Upload your ID Card Images :</Form.Label>
            {
              imageUrl.ID_IMAGES ? <img className="mb-3" style={{width: '100px', height: 'auto'}} src={imageUrl.ID_IMAGES && imageUrl.ID_IMAGES} /> : ""
            }
            </div>
            <Form.Control
              name="ID_IMAGES"
              type="file"
              onChange={(e) => fileSelected(e, "ID_IMAGES")}
            />
          </Col>
          <Col xs={6}>
            <div>
            <Form.Label className="d-block" >Upload your selfie photos :</Form.Label>
            {
              imageUrl.FACE_VALIDATION ? <img className="mb-3" style={{width: '100px', height: 'auto'}} src={imageUrl.FACE_VALIDATION && imageUrl.FACE_VALIDATION} /> : ""
            }
            </div>
              <Form.Control
                name="FACE_VALIDATION"
                type="file"
                onChange={(e) => fileSelected(e, "FACE_VALIDATION")}
              />


          </Col>
          <Col xs={12} className="d-flex">
            <Button variant="success" className="mt-4 mx-auto" onClick={handleVerification}>
              Verify
            </Button>
          </Col>
        </Row>
        </Card>
      </Container>
    </div>
  )
}
