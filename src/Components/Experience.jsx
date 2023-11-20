import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Experience() {
  return (
    <div className='py-5'>
      <h1 className='text-center text-white fs-1 mb-3'>Experience</h1>
      <MDBTable align='middle' className='container'>
      <MDBTableBody className='text-center'>
        <tr className='border'>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1 text-white'>Intern - MEA(R)N Stack Web Development</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1 text-white'>Luminar Technolab - Kochi</p>
            <p className='text-muted mb-1'>~ Internship ~</p>
            <p className='text-muted mb-0'>Apr 2023 - Nov 2023</p>
          </td>
        </tr><br />

        <tr className='border'>
          <td>
            <div className='d-flex align-items-center'>
              <div className='ms-3'>
                <p className='fw-bold mb-1 text-white'>Programmer Trainee</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1 text-white'>Cognizant Technology Solutions - Kochi</p>
            <p className='text-muted mb-1'>~ Full-time ~</p>
            <p className='text-muted mb-0'>Aug 2022 - Jan 2023</p>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Experience