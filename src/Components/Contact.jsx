import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

function Contact() {
  return (
    <div className='my-5 py-5'>
      <h1 className='text-center text-white fs-1 mb-4'>Contact me</h1>
      <div className='container'>
        <Row className='justify-content-center'>
          <p className='text-center'>I welcome the opportunity to connect and collaborate. Please feel free to reach out to me through the provided contact information, and I look forward to engaging in meaningful conversations and potential partnerships.Don't hesitate to get in touch. I'm here to discuss any inquiries, projects, or opportunities, and I'm eager to explore how we can work together to achieve common goals.</p>
          <Form className='w-50 my-3'>
            <h2 className='fs-2 text-white mb-3 ms-1'>Have any questions?</h2>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className='ms-1 text-light'>Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className='ms-1 text-light'>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Label className='ms-1 text-light'>Subject</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='ms-1 text-light'>Message</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <button className='btn btn-success w-25 shadow'><b><i class="fa-solid fa-paper-plane"></i> Send</b></button>
          </Form>
          <h5 className='text-center text-white my-5'>OR</h5>
          <div className='d-flex w-75'>
            <Col>
              <a href="#" className='fs-1 text-light text-center' style={{ textDecoration: "none"}}><i class="fa-solid fa-envelope" style={{paddingLeft:"80px"}}></i>
                <p className='fs-6'>arunmf10@gmail.com</p>
              </a>
            </Col>
            <Col>
              <a href="#" className='fs-1 text-info text-center' style={{ textDecoration: "none" }}><i class="fa-solid fa-phone" style={{paddingLeft:"85px"}}></i>
                <p className='fs-6'>+91-8592051971</p>
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/arun-m-f-595b30231" className='fs-1 text-center' style={{ textDecoration: "none" }}><i class="fa-brands fa-linkedin" style={{paddingLeft:"85px"}}></i>
                <p className='fs-6'>Arun M F</p>
              </a>
            </Col>
            <Col>
              <a href="" className='fs-1 text-warning text-center' style={{ textDecoration: "none" }}><i class="fa-solid fa-earth-americas" style={{paddingLeft:"80px"}}></i>
                <p className='fs-6'>www.MyPortfolio.com</p>
              </a>
            </Col>
          </div>
        </Row>
      </div>
    </div>
  )
}

export default Contact