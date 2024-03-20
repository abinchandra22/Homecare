import React from 'react'
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import google2 from '../assets/google2.png'
function Login() {
  return (
    <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center mt-5'>
      <div className='container w-75'>
        <Link to={'/'} style={{ textDecoration: 'none' }}><i class="fa-solid fa-arrow-left fa-beat"></i><b>Back To Home</b></Link>
        <div className='card shadow p-5 ' style={{ backgroundColor: 'rgb(0, 221, 255)' }}>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='w-100' src="https://img.freepik.com/premium-vector/illustration-cartoon-female-user-entering-login_241107-682.jpg" alt="" />
            </div>
            <div className='col-lg-6 text-center'>
              <h4 className='fw-bolder  mt-2 mb-3 text-warning'>
                Login To Your Account
              </h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <div className='d-flex justify-content-center align-items-center'>
                  <button className='btn btn-light mb-2 bg-warning'>Login  </button>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                  <p>or connect with google</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <div className='google d-flex justify-content-evenly rounded mt-2' style={{ width: '75%', height: '50px', backgroundColor: '#db4437', color: 'white', cursor: 'pointer' }}>
                    <img className='ms-2 mt-2' src={google2} style={{ width: '25px', height: '25px' }} alt="" />
                    <h6 className='mt-2'>Sign in with Google</h6>
                  </div>
                </div>


                <div className='d-flex justify-content-center align-items-center  mt-4'>
                  <input className='me-2 ' style={{ width: '20px', height: '20px' }} type="checkbox" />
                  <label htmlFor="remember" className='me-3'>Remember?</label>
                  <a href="#" className=' '>Forgot password?</a>
                </div>

              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login