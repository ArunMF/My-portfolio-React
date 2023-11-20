import React from 'react'
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { Col, Row } from 'react-bootstrap';

function Skills() {
  return (
    <div className='my-5'>
      <Row className='container mt-5' style={{marginLeft:"100px"}}>
      <h1 className='text-center text-white fs-1 mb-4'>Skills</h1>
        <Col>
        <p className='text-success'>HTML</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='success' width='85' valuemin={0} valuemax={100} className='text-black'>85%</MDBProgressBar>
          </MDBProgress>
          <br />
        <p className='text-info'>CSS</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='info' width='80' valuemin={0} valuemax={100} className='text-black'>80%</MDBProgressBar>
          </MDBProgress>
          <br />
          <p className='text-warning'>JavaScript</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='warning' width='75' valuemin={0} valuemax={100} className='text-black'>75%</MDBProgressBar>
          </MDBProgress>
          <br />
          <p className='text-light'>Angular</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='light' width='75' valuemin={0} valuemax={100} className='text-black'>75%</MDBProgressBar>
          </MDBProgress>
          </Col>
        <Col>
        <p className='text-success'>ReactJS</p>
        <MDBProgress>
            <MDBProgressBar striped bgColor='success' width='70' valuemin={0} valuemax={100} className='text-black'>70%</MDBProgressBar>
          </MDBProgress>
          <br />
          <p className='text-info'>MongoDB</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='info' width='60' valuemin={0} valuemax={100} className='text-black'>60%</MDBProgressBar>
          </MDBProgress>
          <br />
          <p className='text-warning'>NodeJS</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='warning' width='50' valuemin={0} valuemax={100} className='text-black'>50%</MDBProgressBar>
          </MDBProgress>
          <br />
          <p className='text-light'>ExpressJS</p>
          <MDBProgress>
            <MDBProgressBar striped bgColor='light' width='50' valuemin={0} valuemax={100} className='text-black'>50%</MDBProgressBar>
          </MDBProgress>
        </Col>
      </Row>

    </div>
  )
}

export default Skills