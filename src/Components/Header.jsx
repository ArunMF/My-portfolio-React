import React from 'react'
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div className='py-4'>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link eventKey="link-1">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-3">Education</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-4">Experience</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-5">Skills</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-6">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-7">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header