import React from 'react'
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

function Education() {
  return (
    <div className='my-5 py-5'>
      <h1 className='text-center text-white fs-1 mb-3'>Education</h1>
      <MDBTable align='middle' className='container rounded'>
      <MDBTableHead className='text-center p-3'>
        <tr>
          <th scope='col' className='text-white fs-4'>Institute name</th>
          <th scope='col' className='text-white fs-4'>Course</th>
          <th scope='col' className='text-white fs-4'>Year</th>
          <th scope='col' className='text-white fs-4'>CGPA/Percentage</th>
        </tr>
      </MDBTableHead><br />
      <MDBTableBody className='text-center'>
        <tr>
          <td>
            <p className='fw-normal mb-1 text-white mt-2'>Naipunnya Institute of Management and <br />Information Technology, Pongam</p>
          </td>
          <td>
            <p className='fw-normal mb-1 text-white mt-2'>Bachelor of Computer Application</p>
          </td>
          <td>
            <MDBBadge color='success' className='mb-2 px-2 pt-1 mt-2' style={{fontSize:"12px"}} pill>
              2019 - 2022
            </MDBBadge>
          </td>
          <td>
            <p className='text-white mt-2'>60.67%</p>
          </td>
        </tr><br />

        <tr>
          <td>
            <p className='fw-normal mb-1 text-white'>Union H S S Mambra</p>
          </td>
          <td>
            <p className='fw-normal mb-1 text-white'>Plus Two</p>
          </td>
          <td>
            <MDBBadge color='success' className='mb-2 px-2 pt-1' style={{fontSize:"12px"}} pill>
              2018 - 2019
            </MDBBadge>
          </td>
          <td>
            <p className='text-white'>73%</p>
          </td>
        </tr><br />

        <tr>
          <td>
            <p className='fw-normal mb-1 text-white'>L F C H S S Koratty</p>
          </td>
          <td>
            <p className='fw-normal mb-1 text-white'>SSLC</p>
          </td>
          <td>
            <MDBBadge color='success' className='mb-2 px-2 pt-1' style={{fontSize:"12px"}} pill>
              2016 - 2017
            </MDBBadge>
          </td>
          <td>
            <p className='text-white'>88%</p>
          </td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    </div>
  )
}

export default Education