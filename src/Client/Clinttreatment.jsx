import React from 'react'
import Header from './Components/Header'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Clinttreatment() {


  return (
    <div>
      <Header></Header>
      <h1 style={{ color: 'rgb(96, 13, 174)' }} className='text-center mt-2' >Treatment Form</h1>
      <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
        <div className='container card shadow p-5 ms-5 me-5 w-100' style={{ backgroundColor: 'rgb(0, 221, 255)' }}>
          <div className='row align-items-center'>
            <div className='col-lg-6 align-items-center'>

              <Form.Select className='w-50 container' aria-label="Default select example">
                <option>Select The Tratment Type</option>
                <option value="1">Home Care</option>
                <option value="2">Therapy</option>
                <option value="3">One day Checkup</option>
              </Form.Select>

              <Form.Check className='w-50 container mt-3' // prettier-ignore
                type="checkbox"
                id="inputCheckbox"
                label="DayCare"
              />
              <Form.Check className='w-50 container mt-3' // prettier-ignore
                type="checkbox"
                id="inputCheckbox"
                label="NightCare"
              />
              <Form.Check className='w-50 container mt-3' // prettier-ignore
                type="checkbox"
                id="inputCheckbox"
                label="Food Home"
              />


              <Form.Select className='w-50 container' aria-label="Default select example">
                <option>Select The Service Provider</option>
                <option value="1">Doctor</option>
                <option value="2">Nurse</option>
                <option value="3">Care Taker</option>
              </Form.Select>


            </div>


            <div className='col-lg-6 align-items-center'>
              {/*form1  */}
              <Form.Label htmlFor="inputDate">Sheduled From</Form.Label>
              <Form.Control className='w-50 ' placeholder='Date'
                type="date"
                id="inputDate"
              // aria-describedby="passwordHelpBlock"
              />
              <Form.Label htmlFor="inputDate">Sheduled To</Form.Label>
              <Form.Control className='w-50 ' placeholder='Date'
                type="date"
                id="inputDate"
              // aria-describedby="passwordHelpBlock"
              />
              <Form.Control className='mt-4' size="lg" type="text" placeholder="Enter your location here" />
            </div>

          </div>
        </div>
      </div>
      {/* service provider */}

      <h1 style={{ color: 'rgb(96, 13, 174)' }} className='text-center mt-5' >Find your service provider here</h1>


      <div className='p-5 d-flex justify-content-center '>
        <Card className=' text-center' style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://www.ziprecruiter.com/svc/fotomat/public-ziprecruiter/cms/151811860ICUNurse.jpg=ws1280x960" />
          <Card.Body>
            <Card.Title>Service Provider Name</Card.Title>
            <Card.Text >
              <b>Service :</b> Doctor
              <br />
              <b>Specialization :</b> Nuro
              <br />
              <b>Qualification :</b> MBBS
              <br />
              <b>Experience Year :</b> 5
              <br />
              <b>Rate :</b> 250
            </Card.Text>
            <Button variant="primary">Book</Button>
          </Card.Body>
        </Card>

      </div>    </div>
  )
}

export default Clinttreatment
