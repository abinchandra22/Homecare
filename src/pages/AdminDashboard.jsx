import React from 'react'
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';
import { Col, Container, Row } from 'react-bootstrap';

function AdminDashboard() {

  return (
    <>
    <AdminHeader></AdminHeader>

    <Container className='mt-5 mb-5'>
        <Row>
          <Col md={3}>
            <img src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D" style={{ height: '300px', width: '100%', borderRadius: '40px' }} alt="" />
          </Col>
          <Col md={3} className='mt-5 '>
            <img src="https://media.istockphoto.com/id/1313904621/photo/portrait-of-an-african-young-nurse-helping-old-elderly-disable-man-grandfather-to-walk-using.jpg?s=612x612&w=0&k=20&c=ftJordYyY9YELIZcPYoAquP_pRilpvh5gOP2zHKrcTU=" style={{ height: '300px', width: '100%', borderRadius: '40px' }} alt="" />
          </Col>
          <Col md={6} className='mt-5 '>
            <h2 className='fw-bold text-center' style={{color:'red'}}>Start a lovely new journey with us today</h2>
            <div className='ms-5'>
              <h5 className='mt-3 text-center '> To care for those who once cared for us is one of the highest honors.</h5>
            </div>
          </Col>
        </Row>
      </Container>


      <Footer></Footer>

    </>
  )
}

export default AdminDashboard