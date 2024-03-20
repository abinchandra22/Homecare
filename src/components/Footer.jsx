import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div style={{ backgroundColor: " rgb(0, 221, 255)" }}>
                <Container >
                    <Row>
                        <Col md={4} className='mt-5 mb-5'>
                            <h1 className='text-center'> <span style={{ color: ' rgb(47, 202, 0)' }}>H</span>eaven <span style={{ color: 'rgb(202, 0, 101)' }}>C</span>are</h1>
                            <p className='text-center'>Lorem, ipsum dolor sit amet consectetur um, blanditiis porro tempora, quae odit inventore commodi temporibus laboriosam dolorem, obcaecati dolor. Lorem ipsum dolor sit amet consectetur adip.tatibus eius esse.</p>
                        </Col>
                        <Col md={4} className='mt-5  text-center'>
                            <h4>Links</h4>
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}><p>Home</p></Link>
                            <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}><p>Login</p></Link>
                        </Col>
                        <Col md={4} className='mt-5  text-center mb-5'>
                            <h4>Contact Us</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. alias ad optio autem deleniti expedita.</p>
                            <hr />
                            <div >
                                <i class="fa-brands fa-instagram me-4 fa-2x"></i>
                                <i class="fa-brands fa-facebook-f me-4 fa-2x"></i>
                                <i class="fa-brands fa-whatsapp me-4 fa-2x"></i>
                                <i class="fa-solid fa-location-dot me-4 fa-2x"></i>
                            </div>
                        </Col>
                        <p className='text-center'>Copyright © 2024. All rights Reserved</p>
                    </Row>

                </Container>
            </div>

        </div>
    )
}

export default Footer