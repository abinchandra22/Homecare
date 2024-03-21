import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import abtus from '../assets/abtus.jpg'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import campanian from '../assets/campanian.png'
import Personal from '../assets/Personal.png'
import Respite from '../assets/Respite.png'
import Physiotherapy from '../assets/Physiotherapy.png'
import spk from '../assets/spk.png'
import Counselling from '../assets/Counselling.png'
import Header from '../components/Header'
import Footer from '../components/Footer'



function Home() {
  return (
    <div>
      <div> <Header></Header></div>
      <div className='bg-img'>
        <div className="row w-100">
          <div className="col-lg-7"></div>
          <div className=" cont col-lg-5 d-flex justify-content-center align-items-center flex-column ">
            <h1 className='text-warning  fw-bold mt-5' >Welcome to the wonder of love and care. <i class="fa-solid fa-heart fa-beat " style={{ color: 'red', height: '45px' }}></i></h1>
            <Link to={'/login'} className=' d-flex justify-content-center align-items-center mt-5' style={{ textDecoration: 'none', backgroundColor: 'rgba(18, 14, 14, 0.566)' }}><button className='btn border text-light w-100' >Get Started <i class="fa-solid fa-right-to-bracket"></i></button></Link>

          </div>
        </div>

      </div>
      {/* about us */}
      <div className='mt-5'>
        <h1 className='abt text-center'>About Us</h1> <hr />
        <div className="row mt-5 w-100">
          <div className="col-lg-6">
            <h1 className='d-flex justify-content-center align-items-center'> <span style={{ color: ' rgb(47, 202, 0)' }}>H</span><span style={{ color: 'rgb(17, 17, 92)' }}>eaven</span> <span style={{ color: 'rgb(202, 0, 101)' }}>C</span><span style={{ color: 'rgb(17, 17, 92)' }}>are</span></h1>
            <h5 className='skill'>Skilled Nursing Services</h5>

            <p className='skill2 p-5'> We at Heaven Care, are dedicated to helping our clients lead dignified and independent lifestyles in the comfort and safety of their own homes. As pioneers in professional home healthcare in Kerala, we have adopted best practices from around the globe and highest quality standards. Our focus on quality has gained us the distinction of being the first organization from South India to be awarded QAI Accreditation for Home Healthcare Services.

              With love, care and respect as core values, our professionally trained team of caregivers, nurses and therapists have made a difference to the lives of thousands of individuals. It is because of the care provided by this team that many of our clients in different parts of the World entrust upon us the care of their aged parents who are living alone. </p>

          </div>
          <div className="col-lg-6 ">
            <img className='w-100' src={abtus} alt="" />
          </div>
        </div>
      </div>
      <hr />
      {/* servieses */}
      <div className='mt-5'>
        <h1 className='abt text-center'>Our Services</h1>

        <Container>
          <Row>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <i class="log fa-solid fa-stethoscope fa-5x p-3 "></i>
              <h4 className='mt-4'>Home Consultation by Doctors</h4>
              <p>In-home health care and treatment for elderly can reduce hospitalisation and improve the management of chronic diseases. Guardian Angel has experienced doctors for palliative and geriatric care on its panel who can visit your loved ones at your home. Avoid the risk, inconvenience, time and discomfort of having to visit the clinic or hospital. Doctor consultation at home helpis patients to have faster recovery and more regular, reliable access to care. </p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <i class="log fa-solid fa-syringe fa-5x p-3"></i>
              <h4 className='mt-4'>Skilled Nursing</h4>
              <p>Skilled nursing care refers to a patient’s need for care or treatment that can only be performed by licensed nurses. Skilled Nursing is especially beneficial for seniors and bed-ridden patients to get qualified nursing services at home without having to travel to a doctor or hospital.</p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <img className='p-3' src={Personal} style={{ height: '100px ', width: '110px' }} alt="no image" />
              <h4 className='mt-4'>Personal Care</h4>
              <p>If your loved ones require assistance or total care for performing day-to-day activities our caregivers and nurses can help.</p>
            </Col>
          </Row>

          <Row>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <img className='p-3' src={campanian} style={{ height: '100px ', width: '110px' }} alt="no image" />
              <h4 className='mt-4'>Companion Care</h4>
              <p>Getting older can be a difficult and lonely experience. Studies prove that, lower level of activity and fewer social interactions often increase the chance of diseases such as dementia. For such elderly persons we have specially trained staff makes regular visits, provide company and engage them in activities and conversation. </p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <img className='p-3' src={Respite} style={{ height: '100px ', width: '110px' }} alt="no image" />
              <h4 className='mt-4'>Respite Care</h4>
              <p>No matter how much you love those under your care, the challenges of caregiving can be exhausting and often depressing.</p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <img className='p-3' src={Physiotherapy} style={{ height: '100px ', width: '110px' }} alt="no image" />
              <h4 className='mt-4'>Physiotherapy</h4>
              <p>Home-based physiotherapy may be of great help to those with mobility problems or long-term conditions that affect mobility. Physical therapy has proven to be an effective form of treatment for muscle pain, joint injuries, arthritis, mobility issues, and even respiratory problems, like cystic fibrosis.</p>
            </Col>
          </Row>

          <Row>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <img className='p-3' src={spk} style={{ height: '100px ', width: '110px' }} alt="no image" />
              <h4 className='mt-4'>Speech Therapy</h4>
              <p>If you have been affected by surgery, stroke or another condition that’s impacted your ability to communicate effectively or swallow safely and efficiently, we can help. </p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <img className='p-3' src={Counselling} style={{ height: '100px ', width: '110px' }} alt="no image" />
              <h4 className='mt-4'>Counselling</h4>
              <p>emotional support, advocacy and advice to help protect your rights, guidance with relationships
                , help to manage situations and behaviours, information and training.</p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <i class="log fa-solid fa-baby fa-5x p-3"></i>

              <h4 className='mt-4'>Mother & Baby Care</h4>
              <p>A birth of a new relationship of bond & trust. Guardian Angel Mother & Baby Care is a specially designed care package for mothers and babies that goes beyond care to create a memorable journey of the auspicious and adventurous moments. We understand the emotional rides you embark on, from the first news of pregnancy to the first doctor’s visit, to the reaction of daddy to be, to the bump transformation, the first baby kick to the D-Day and the celebration that follows.</p>
            </Col>
          </Row>

          <Row>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <i class="log fa-solid fa-ambulance fa-5x p-3"></i>

              <h4 className='mt-4'>Non-Emergency Medical Transport</h4>
              <p>Whether your loved one needs to see the physician for a routine visit, or whether it is going home after hospitalization or to a family function. </p>
            </Col>
            <Col md={4} className='text-center mt-3 border rounded shadow'>
              <i class="log fa-solid fa-person-breastfeeding fa-5x "></i>

              <h4 className='mt-4'>iBreastExam</h4>
              <p>Guardian Angel brings to you the FDA cleared breakthrough technology from UE Lifesciences.</p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      {/* contact us */}

      <Container className='mt-5'>
        <Row>
          <Col md={3}>
            <img src="https://images.unsplash.com/photo-1543333995-a78aea2eee50?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGNhcmV8ZW58MHx8MHx8fDA%3D" style={{ height: '300px', width: '100%', borderRadius: '40px' }} alt="" />
          </Col>
          <Col md={3} className='mt-5 '>
            <img src="https://media.istockphoto.com/id/1313904621/photo/portrait-of-an-african-young-nurse-helping-old-elderly-disable-man-grandfather-to-walk-using.jpg?s=612x612&w=0&k=20&c=ftJordYyY9YELIZcPYoAquP_pRilpvh5gOP2zHKrcTU=" style={{ height: '300px', width: '100%', borderRadius: '40px' }} alt="" />
          </Col>
          <Col md={6} className='mt-5 '>
            <h2 className='fw-bold text-center' style={{ color: 'rgb(17, 17, 92)' }}>Contact Us</h2>
            <div className='ms-5'>
              <h5 className='mt-3 '><i class="fa-solid fa-location-dot me-4" style={{ color: 'rgb(26, 87, 109)' }}></i>K C Tower, CSEZ, Seaport - Airport Rd near , <br /> <span className='ms-5'>Kakkanad, Ernakulam, Kerala 682037</span></h5>
              <h5 className='mt-3 '><i class="fa-solid fa-phone me-4" style={{ color: 'rgb(26, 87, 109)' }}></i>+91 9654872156</h5>
              <h5 className='mt-3 '><i class="fa-solid fa-envelope me-4" style={{ color: 'rgb(26, 87, 109)' }}></i>heavencare@gmail.com</h5>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      {/* review */}
      <Container className='mt-5'>
        <Row >
          <h2 className='text-center mt-3 mb-5' style={{ color: 'rgb(17, 17, 92)' }}>Reviews</h2>
          <Carousel >
            <Carousel.Item >
              <Col md={12} className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://i0.wp.com/ketto.blog/wp-content/uploads/2022/03/How-Do-You-Help-Old-People_.png?fit=1920%2C1080&ssl=1" style={{ height: '100px', width: '100px', borderRadius: '50px' }} alt="no image" />
                <p className='text-center mt-3'>My Therapists Bhavya was very gentle and. She was very professional, experienced and followed hygiene protocol. I would recommend heaven care.</p>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={12} className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://images.pexels.com/photos/7155244/pexels-photo-7155244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '100px', width: '100px', borderRadius: '50px' }} alt="no image" />
                <p className='text-center mt-3'>I am availing the service from heaven care along with products they sent. The therapist who is assigned to me is very experienced one , Therapist Prabitha is very professional and also very good in giving treatment. I am loving all the pamper from Prabitha and heaven care products she uses for therapy.</p>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col md={12} className='d-flex justify-content-center align-items-center flex-column'>
                <img src="https://images.pexels.com/photos/8359636/pexels-photo-8359636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '100px', width: '100px', borderRadius: '50px' }} alt="no image" />
                <p className='text-center mt-3'>I have used heaven care services since pregnancy and postpartum. I had got 2 wonderful therapists Bindhu chechi and Anjali chechi. Both took really good care of me and my baby.
                  Thankful to my therapists immensely.</p>
              </Col>
            </Carousel.Item>
          </Carousel>

        </Row>
      </Container>
      <hr />
      <Footer></Footer>



    </div>
  )
}

export default Home