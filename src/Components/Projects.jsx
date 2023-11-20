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
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Card title</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Card title</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Card title</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Card title</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
            </div>
            <div className='d-flex w-100'>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Card title</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
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
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/6qnQNW5L/Screenshot-206.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>E-Cart</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/FKCzyCBc/Screenshot-205.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Student Manage...</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/x1kKNHC6/Screenshot-203.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>CodeBase</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
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
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
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
                  <MDBCardImage src='https://i.postimg.cc/W1rBV5rV/Screenshot-207.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Dicount calculator</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
                  </MDBCardBody>
                </MDBCard>
              </div>
              <div className='w-25 p-2'>
                <MDBCard>
                  <MDBCardImage src='https://i.postimg.cc/Nj4WL5NC/Screenshot-208.png' height="150px" position='top' alt='...' />
                  <MDBCardBody>
                    <MDBCardTitle className='text-white'>Counter app</MDBCardTitle>
                    <MDBBtn href='#' className='me-2 btn btn-success' style={{height:"35px"}}>View site</MDBBtn>
                    <MDBBtn href='#' className='btn btn-success' style={{height:"35px"}}>Code</MDBBtn>
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