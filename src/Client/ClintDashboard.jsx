import React, { useEffect, useState } from 'react'
import './ClintDashboard.css'
import Header from './Components/Header'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Components/Footer';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function ClintDashboard() {

  // modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // name
  const [userLoginData, setUserLoginData] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("email")) {
      setUserLoginData(sessionStorage.getItem("email"))

    } else {
      setUserLoginData("")
    }
  }, [])

  // Logout
  const navigate = useNavigate()
  const handleLogout = () => {
    sessionStorage.clear()
    //  setIsAuthorised(false)
    navigate('/')
  }

  return (
    < >
      <Header></Header>
      <div className='bgimg'>
        <div className="row w-100">
          <div className="col-lg-4"></div>
          <div className=" cont col-lg-8 d-flex justify-content-center align-items-center flex-column ">
            <h1 className='text-warning  fw-bold mt-3' >Welcome {userLoginData.split("@", 1)}</h1>
            <button onClick={handleLogout} className='btn d-flex justify-content-center align-items-center mt-5' style={{ textDecoration: 'none', backgroundColor: 'rgba(18, 14, 14, 0.566)' }}><button className='btn border text-light w-100' >LogOut <i class="fa-solid fa-arrow-right-from-bracket"></i></button></button>

          </div>
        </div>
      </div>
      <div className='text-center mt-5 prov'>
        <h1>What We Provide</h1>
      </div>
      <div className='text-center paragraph'>
        <p>At Heaven Care, we are aware that as your loved ones age, they may require more intensive care to ensure their safety and well-being. Here we offer reliable home nurse service prioritising your loved one's comfort, safety, and dignity. Whether it's 24*7 care or provide assistance during hospital stays, our nurses are there every step of the way, offering both skilled medical attention and heartfelt companionship.

          We understand the importance of placing your trust in our hands, and we take this responsibility seriously. Our team identifies the unique requirements of your aged parents or grandparents and help you to choose the right level of care – whether it is for daily activities, medication management, or specialised support for a chronic condition. Carepartners are selected carefully by and undergo training to meet the diverse needs of our clients, allowing us to provide specialised care that promotes physical, emotional, and mental wellness.</p>
        <Link onClick={handleShow}>Delete Your Account</Link>
      </div>
      <div className='text-center mt-5 prov'>
        <h1>Service Booking</h1>
      </div>
      <div className='p-5 d-flex justify-content-center '>
        <Card className='me-5 text-center' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.athulyaliving.com/images/home-healthcare.jpg" />
          <Card.Body>
            <Card.Title>Treatment</Card.Title>
            <Card.Text className='cardtext'>
              We provides essential support and assistance to individuals in their own homes, promoting independence and quality of life.
            </Card.Text>
            <Link to={'/clint-treatment'} className='btn btn-primary' variant="primary">View More</Link>
          </Card.Body>
        </Card>
        <Card className='me-5 text-center' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://affiliazion.com/wp-content/uploads/2023/06/bigstock-Virtual-Personal-Assistant-Wom-398991929.jpg" />
          <Card.Body>
            <Card.Title>Virtual Assistant</Card.Title>
            <Card.Text className='cardtext'>
              Virtual assistance in home care utilizes technology to provide remote support and monitoring for patients in their own homes.        </Card.Text>
            <Button variant="primary">View More</Button>
          </Card.Body>
        </Card>
        <Card className=' text-center' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/151811860ICUNurse.jpg=ws1280x960" />
          <Card.Body>
            <Card.Title>Emergency Services</Card.Title>
            <Card.Text className='cardtext'>
              Emergency services in home care provide immediate medical assistance and support for individuals in their own residences.
            </Card.Text>
            <Button variant="primary">View More</Button>
          </Card.Body>
        </Card>
      </div>

      {/* modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title>Modal heading</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete your account?</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>




      <Footer></Footer>

    </>
  )
}

export default ClintDashboard