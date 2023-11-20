import React from 'react'
import { Row } from 'react-bootstrap'
import Intro from './Intro'
import AboutMe from './AboutMe'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function MainPage() {
  return (
    <div className='py-5'>
        <Row>
        <Intro/>
      </Row>
      <Row>
        <AboutMe/>
      </Row>
      <Row>
        <Education/>
      </Row>
      <Row>
        <Experience/>
      </Row>
      <Row>
        <Skills/>
      </Row>
      <Row>
        <Projects/>
      </Row>
      <Row>
        <Contact/>
      </Row>
    </div>
  )
}

export default MainPage