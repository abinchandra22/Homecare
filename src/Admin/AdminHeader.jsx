import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';
import { Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';

function AdminHeader() {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const handleCloseLeft = () => setShowLeft(false);
  const handleShowLeft = () => setShowLeft(true);

  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  // logout
  const navigate = useNavigate()
const handleLogout = ()=>{
 sessionStorage.clear()
//  setIsAuthorised(false)
 navigate('/')
}


  return (
    <>
      <div className='top_nav mb-2' style={{ width: '100%', height: '60px', backgroundColor: 'rgb(0, 221, 255)' }}>
        <Row className="d-flex justify-content-between align-items-center w-100">
          <Col md={4}>
            <Dropdown>
              <Dropdown.Toggle className='ms-2 mt-2 mb-2' onClick={handleShowLeft} variant="dark" id="dropdown-basic">
                <i class="fa-solid fa-bars"></i>
              </Dropdown.Toggle>
            </Dropdown>
          </Col>
          <Col md={4} className='d-flex justify-content-center align-items-center'>
            <h3>Welcome Admin</h3>
          </Col>
          <Col md={4} className=' d-flex justify-content-end'>
            <button className='btn' onClick={handleShowRight}><h1 className=' text-dark me-2 '><i class="fa-solid fa-circle-user"></i></h1></button>
            <button onClick={handleLogout} className='btn btn-danger me-2 text-dark mt-2' style={{ height: '45px' }}>Log Out</button>
          </Col>

        </Row>
      </div>


      <Offcanvas show={showLeft} onHide={handleCloseLeft}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <h5>Attendence</h5>
          <Link to={'/bookings'} style={{ textDecoration: 'none', color: 'yellowgreen' }}><h5>Booking</h5></Link>
          <Link to={'/leave-request'} style={{ textDecoration: 'none', color: 'yellowgreen' }}><h5>Leave Request</h5></Link>
          <Link to={'/service-providerlist'} style={{ textDecoration: 'none', color: 'yellowgreen' }}><h5>service Provider List</h5>
          </Link>

          <h5>Feedbacks</h5>
          <h5>Chats</h5>
          <h5>Services</h5>
        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas show={showRight} onHide={handleCloseRight} placement="end">
        <Offcanvas.Header className='bg-dark d-flex' closeButton>
          <Offcanvas.Title className='text-white'>Admin Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-dark'>
          <div className='ms-5' style={{ backgroundColor: 'black', height: '400px', width: '300px', borderRadius: '5%' }}>
            <div className='d-flex align-items-center justify-content-center mt-4'>
              <label htmlFor="admin_profile">
                <input id='admin_profile' type="file" style={{ display: 'none' }} />
                <img className='mt-2' src="https://tse3.mm.bing.net/th?id=OIP.2hAVCZRMcBjsE8AGQfWCVQHaHa&pid=Api&P=0&h=180" style={{ width: '100px', height: '100px', borderRadius: '50%' }} alt="" />
              </label>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-2'>
              <p className='text-white'>ADD PICTURE</p>
            </div>
            <div className='d-flex align-items-center justify-content-center mt-2'>
              <TextField className='bg-white' id="filled-basic" type='email' label="email" variant="filled" />
            </div>

            <div className='d-flex align-items-center justify-content-center mt-2'>
              <TextField className='bg-white' id="filled-basic" type='password' label="password" variant="filled" />
            </div>
            <div className='d-flex align-items-center justify-content-center mt-3'>
              <button className='btn btn-info' style={{ borderStyle: 'dotted' }}>Update Profile</button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>




    </>
  )
}

export default AdminHeader