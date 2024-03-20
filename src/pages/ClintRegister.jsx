import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './ClintRegister.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { userRegAPI } from '../servises/allAPI'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

function ClintRegister() {
  const [userInputData, setUserInputData] = useState({
    username: "", email: "", password: "", number: "", address: ""
  })
  const navigate = useNavigate()

  // console.log(userInputData);
  const handleRegister = async () => {
    console.log(userInputData);

    const { username, email, password, number, address } = userInputData
    if (!username || !email || !password || !number || !address) {

      toast.warning("Please Complete the form")
    } else {
      // alert("proside to register")
      try {
        const result = await userRegAPI(userInputData)
        console.log(result);
        if (result.status == 200) {
          toast.success(`Welcome ${result.data.username}`)
          setUserInputData({
            username: "", email: "", password: "", number: "", address: ""
          })
          // navigate to login page
          setTimeout(() => {
            navigate("/clint-login")
          }, 2000)
        } else {
          toast.error(result.response.data)

        }

      }
      catch (err) {
        console.log(err);

      }
    }
  }

  return (
    <>
      <Header></Header>
      <div className='client_div' style={{ width: '100%', height: '100vh' }}>
        <Row className='w-100' >
          <Col md={4}></Col>
          <Col md={8} className='mt-3 d-flex justify-content-center align-items-center flex-column '>
            <div className='register_div mt-5 d-flex justify-content-center align-items-center flex-column '>
              <h3>User Registration </h3>
              <input type="text" placeholder='Username' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-5' value={userInputData.username} onChange={(e) => setUserInputData({ ...userInputData, username: e.target.value })} />
              <input type="email" placeholder='Email Address' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' value={userInputData.email} onChange={(e) => setUserInputData({ ...userInputData, email: e.target.value })} />
              <input type="password" placeholder='Password' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' value={userInputData.password} onChange={(e) => setUserInputData({ ...userInputData, password: e.target.value })} />
              <input type="tel" placeholder='Phone Number' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' value={userInputData.number} onChange={(e) => setUserInputData({ ...userInputData, number: e.target.value })} />
              <textarea className='rounded form-control w-50' style={{ borderRadius: '50px' }} placeholder='Address' cols="5" rows="5" value={userInputData.address} onChange={(e) => setUserInputData({ ...userInputData, address: e.target.value })}></textarea>
              <button onClick={handleRegister} className='w-50 mt-3 btn btn-danger' style={{ borderRadius: '50px' }}>REGISTER</button>
              <p className='mt-3'>Allready have an Account? Click here to <Link to={'/clint-login'} className='text-danger'>Login</Link></p>

            </div>

          </Col>
        </Row>
        <ToastContainer autoClose={2000} position="top-center" theme='colored'></ToastContainer>

      </div>
      <Footer></Footer>
    </>
  )
}

export default ClintRegister