import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { adminLoginAPI } from '../servises/allAPI';

function AdminLogin() {

  const [adminLoginData, setAdminLoginData] = useState({
    username: "", password: ""
  })
  const navigate = useNavigate()

  // console.log(adminLoginData);

  const handleadmLogin = async (e) => {
    e.preventDefault();
    // console.log(adminLoginData);

    const { username, password } = adminLoginData
    if (!username || !password) {
      toast.warning("Please Complete the form")

    } else {

      try {
        const result = await adminLoginAPI(adminLoginData)
        console.log(result);
        if (result.status == 200) {
          sessionStorage.setItem("username", result.data.existingAdmin.username)
          sessionStorage.setItem("password", result.data.existingAdmin.password)

          toast.success("Login success")
          // console.log("success");
          setTimeout(() => {
            setAdminLoginData({ email: "", password: "" })

            navigate("/admin-dashboard")
            setAdminLoginData(false)
          }, 2000)

        } else {
          toast.error("Invalid Email/Password")
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  return (
    <div style={{ width: '100%' }} className='d-flex justify-content-center align-items-center mt-5'>
      <div className='container w-75'>
        <Link to={'/'} style={{ textDecoration: 'none' }}><i class="fa-solid fa-arrow-left fa-beat"></i><b>Back To Home</b></Link>
        <div className='card shadow p-5 ' style={{ backgroundColor: 'rgb(0, 221, 255)' }}>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='w-100' src="https://www.nicepng.com/png/detail/263-2636180_admin-login-png-admin-login-image-png.png" alt="" />
            </div>
            <div className='col-lg-6 text-center'>
              <h4 className='fw-bolder  mt-2 mb-3 text-danger'>
                Admin Login
              </h4>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Control type="text" placeholder="Username" value={adminLoginData.username} onChange={(e) => setAdminLoginData({ ...adminLoginData, username: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" value={adminLoginData.password} onChange={(e) => setAdminLoginData({ ...adminLoginData, password: e.target.value })} />
                </Form.Group>
                <div className='d-flex justify-content-center align-items-center'>
                  <button onClick={handleadmLogin} className='btn btn-light mb-2 bg-warning'>Login  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-center" theme='colored'></ToastContainer>

    </div>

  )
}

export default AdminLogin