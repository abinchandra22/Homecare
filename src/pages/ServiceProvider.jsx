import React, { useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import './ServiceProvider.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { serviceProviderRegAPI } from '../servises/allAPI';

function ServiceProvider() {

// register
const [serviceProviderInputData,setServiveProviderInputData]= useState({
  username:"",email:"",password:"",mobile:"",service:"",specialization:"",qualification:"",exp_year:"",rate:""
})

const handleRegister= async (e)=>{
  e.preventDefault()
  console.log(serviceProviderInputData);

  const {username,email,password,mobile,service,specialization,qualification,exp_year,rate}=serviceProviderInputData
  if (!username || !email || !password || !mobile  || !service || !specialization || !qualification  || !exp_year || !rate) {
    
    toast.warning("Please Complete the form")
  }else{
    // alert("proside to register")
    try{
      const result = await serviceProviderRegAPI(serviceProviderInputData)
      console.log(result);
      if (result.status==200) {
        toast.success(`Welcome ${result.data.username}`)
        setServiveProviderInputData({   username:"",email:"",password:"",mobile:"",service:"",specialization:"",qualification:"",exp_year:"",rate:""
      })
        
      }else{
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
    <div className='client ' style={{width:'100%',height:'150vh'}}>
        <Row className='w-100' >
            <Col md={4}></Col>
            <Col md={8} className='mt-3 d-flex justify-content-center align-items-center flex-column '>
                <div className='register mt-5 d-flex justify-content-center align-items-center flex-column '>
                    <h3>service Provider Registration</h3>
                    <input type="text" placeholder='Username' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-5'  value={serviceProviderInputData.username} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, username: e.target.value })}/>
                    <input type="email" placeholder='Email Address' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.email} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, email: e.target.value })}/>
                    <input type="password" placeholder='Password' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.password} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, password: e.target.value })}/>
                    <input type="tel" placeholder='Phone Number' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.mobile} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, mobile: e.target.value })}/>
                    <input type="text" placeholder='service' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.service} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, service: e.target.value })}/>
                    <input type="text" placeholder='specialization' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.specialization} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, specialization: e.target.value })}/>
                    <input type="text" placeholder='qualification' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.qualification} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, qualification: e.target.value })}/>
                    <input type="num" placeholder='Experience Year' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.exp_year} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, exp_year: e.target.value })}/>
                    <input type="rate" placeholder='Rate' style={{borderRadius:'50px'}} className='form-control mb-3 w-50 mt-2'  value={serviceProviderInputData.rate} onChange={e => setServiveProviderInputData({ ...serviceProviderInputData, rate: e.target.value })}/>
                    <button onClick={handleRegister} className='w-50 mt-3 btn btn-danger' style={{borderRadius:'50px'}}>REGISTER</button>
                </div>
            </Col>
        </Row>
        <ToastContainer autoClose={3000} theme='colored'></ToastContainer>
       </div>
    </>
  )
}

export default ServiceProvider