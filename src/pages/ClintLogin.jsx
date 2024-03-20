import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userLoginAPI } from '../servises/allAPI';
import { Link, useNavigate } from 'react-router-dom';

function ClintLogin() {

  const [userLoginData, setUserLoginData] = useState({

    email: "", password: ""
  })
  const navigate = useNavigate()

  const handleLogin = async () => {
    console.log(userLoginData);

    const { email, password } = userLoginData
    if (!email || !password) {
      toast.warning("Please Complete the form")

    } else {
      try {
        const result = await userLoginAPI(userLoginData)
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("email", result.data.existingUser.email)
          sessionStorage.setItem("token", result.data.token)
          sessionStorage.setItem("userDetails", JSON.stringify(result.data.existingUser))
          // localStorage.setItem("")

          toast.success("Login success")

          setTimeout(() => {
            setUserLoginData({ email: "", password: "" })

            navigate("/clint-dashboard")
            setUserLoginData(false)
          }, 2000)

        } else {
          toast.error("Incorrect Email/Password")

        }
      } catch (err) {
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
              <h3>User Login </h3>
              <input type="email" placeholder='Email Address' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' value={userLoginData.email} onChange={(e) => setUserLoginData({ ...userLoginData, email: e.target.value })} />
              <input type="password" placeholder='Password' style={{ borderRadius: '50px' }} className='form-control mb-3 w-50 mt-2' value={userLoginData.password} onChange={(e) => setUserLoginData({ ...userLoginData, password: e.target.value })} />

              <button onClick={handleLogin} className='w-50 mt-3 btn btn-danger' style={{ borderRadius: '50px' }}>LOGIN</button>
              <p className='mt-5'>If yoy are a New User? Click here to <Link to={'/clint-register'} className='text-danger'>Register</Link></p>

            </div>
          </Col>
        </Row>
        <ToastContainer autoClose={2000} position="top-center" theme='colored'></ToastContainer>

      </div>
      <Footer></Footer>

    </>
  )
}

export default ClintLogin