import React from 'react'
import { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

function Projects() {

  const [active, setActive] = useState(1);

  return (
    <>
      <h1 className='text-center text-white fs-1 mb-4 mt-5 pt-5'>Projects</h1>
      <div className='d-flex justify-content-center'>
        <MDBAccordion onChange={(itemId) => setActive(itemId)} className='w-75'>

          {/* Javascript projects */}
          <MDBAccordionItem collapseId={1} headerTitle='JavaScript' className='mb-2 border text-center'>
            <div className='d-flex mt-3 mb-3 w-100'>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/qB1zpzGm/Screenshot-211.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Weather app</MDBCardTitle>
                    <MDBBtn href='https://arunmf.github.io/Weather-app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Weather-app' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/rmQFyP5d/Screenshot-209.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Budget calculator</MDBCardTitle>
                    <MDBBtn href='https://arunmf.github.io/Budget-calculator/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Budget-calculator' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/6pv3VzxS/Screenshot-210.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Calculator</MDBCardTitle>
                    <MDBBtn href='https://arunmf.github.io/Calculator-javascript/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Calculator-javascript' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className='d-flex w-100'>
            </div>
          </MDBAccordionItem>

          {/* Angular projects */}
          <MDBAccordionItem collapseId={2} headerTitle='Angular' className='mb-2 border text-center'>
            <div className='d-flex mt-3 mb-3 w-100'>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/nrZkvL5C/Screenshot-202.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Hotel website</MDBCardTitle>
                    <MDBBtn href='https://arunmf-hotel-website.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/stars/ArunMF/lists/hotel-website' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/6qnQNW5L/Screenshot-206.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>E-Cart</MDBCardTitle>
                    <MDBBtn href='https://arunmf-ecart.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/stars/ArunMF/lists/e-cart' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/FKCzyCBc/Screenshot-205.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Student Manage...</MDBCardTitle>
                    <MDBBtn href='https://arunmf-student-management-system.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Student-Management-System' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/x1kKNHC6/Screenshot-203.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>CodeBase</MDBCardTitle>
                    <MDBBtn href='https://arunmf-codebase.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/CodeBase' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className='d-flex w-100'>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/3JqGhRBm/Screenshot-204.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Product Finder</MDBCardTitle>
                    <MDBBtn href='https://arunmf-product-finder.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Product-Finder' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
          </MDBAccordionItem>

          {/* React projects */}
          <MDBAccordionItem collapseId={3} headerTitle='ReactJS' className='mb-2 border text-center'>
            <div className='d-flex mt-3 mb-3 w-100'>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/rwBD739M/Screenshot-212.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>My portfolio</MDBCardTitle>
                    <MDBBtn href='https://arunmf-my-portfolio-react.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/My-portfolio-React' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/hjbQLsTg/Screenshot-214.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>FindMyDoctor</MDBCardTitle>
                    <MDBBtn href='https://arunmf-findmydoctor.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/stars/ArunMF/lists/findmydoctor' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/W1rBV5rV/Screenshot-207.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Discount calculator</MDBCardTitle>
                    <MDBBtn href='https://arunmf-discount-calculator.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Discount-Calculator' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/Nj4WL5NC/Screenshot-208.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Counter app</MDBCardTitle>
                    <MDBBtn href='https://arunmf-counterapp.netlify.app/' className='me-2 btn btn-success' style={{ height: "35px" }}>View site</MDBBtn>
                    <MDBBtn href='https://github.com/ArunMF/Counter-app' className='btn btn-success' style={{ height: "35px" }}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className='d-flex w-100'>

            </div>
          </MDBAccordionItem>
        </MDBAccordion>
      </div>
    </>
  )
}

export default Projects