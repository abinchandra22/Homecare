import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import './ServiceProvider.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

function ServiceLogin() {
  return (
    <div>
      <div className='client ' style={{ width: '100%', height: '100vh' }}>
        <Row className='w-100' >
          <Col md={4}></Col>
          <Col md={8} className='mt-3 d-flex justify-content-center align-items-center flex-column '>
            <div className='registerlog mt-5 d-flex justify-content-center align-items-center flex-column '>
              <h3 className='mb-5'>service Provider Login</h3>
              <input type="email" placeholder='Email Address' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' />
              <input type="password" placeholder='Password' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' />

              <button className='w-50 mt-3 btn btn-danger' style={{ borderRadius: '50px' }}>Login</button>
              <p className='mt-5'>If yoy are a New Service Provider? Click here to <Link to={''} className='text-danger'>Register</Link></p>

            </div>
          </Col>
        </Row>
        <ToastContainer autoClose={2000} position="top-center" theme='colored'></ToastContainer>
      </div>

    </div>
  )
}

export default ServiceLogin