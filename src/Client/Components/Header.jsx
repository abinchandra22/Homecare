import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import health3 from '../assets/health3.png'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <Navbar className="head">
        <Container>
          <Navbar.Brand href="/" className='d-flex'>
            <img
              alt=""
              src={health3}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            <h1 className='d-flex justify-content-center align-items-center'> <span style={{ color: ' rgb(47, 202, 0)' }}>H</span>eaven <span style={{ color: 'rgb(202, 0, 101)' }}>C</span>are</h1>
          </Navbar.Brand>
          <Dropdown className='ms-auto me-5 mt-3 ' style={{ height: '50px', width: '50px', borderRadius: '25px' }}>
            <Dropdown.Toggle className='dropdown mt-2 me-2 d-flex justify-content-center align-items-center' style={{ backgroundColor: ' rgba(0, 0, 0, 0)', height: '50px', width: '50px', borderRadius: '25px', borderColor: 'rgba(0, 0, 0, 0)' }} id="dropdown-basic" >
              <h1 className=' text-secondary'><i class="fa-solid fa-circle-user" style={{ height: '50px' }}></i></h1>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="/service-provider">Service Provider</Dropdown.Item>
              <Dropdown.Item href='/clint-login'>Users</Dropdown.Item>
              <Dropdown.Item href='/adm-login'>Admin</Dropdown.Item>

            </Dropdown.Menu>
          </Dropdown>

        </Container>
      </Navbar>


    </div>
  )
}

export default Header