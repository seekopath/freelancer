import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../../../node_modules/react-bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import './category.css'
import {FiFilter} from 'react-icons/fi'
import Container from 'react-bootstrap/Container'
import Card from './categorycard'
import Dashboardsearchbar from '../dashboard/dashboardsearchbar/dashboardsearchbar'


function Category() {
  return (
  <>
  <Dashboardsearchbar />  
  <Container fluid style={{marginTop: '5rem'}}>

    
  <Form>
    <div className="ujjain">
    <Form.Row className="mb-0">
      <Col xs={1} md={0} className="d-xs-block d-md-none" align="top">
        <Button variant="outline-primary" >  <FiFilter/>  </Button>
      </Col>
      <Col xs = {7} md={{span:6,offset:2}} className="pl-4">
        <Form.Control type="text" placeholder="Search Hackathons" />
      </Col>
      <Col xs ={3} md={2} >
        <Button variant="outline-primary">Trending</Button>
      </Col>
    
      <Col xs={1} md={2}>
        <Form.Control as="select">
          <option>Reset</option>
          <option>Prizes (high to low)</option>
          <option>Days left(Low to high)</option>
          <option>Registrations(high to low)</option>
        </Form.Control>
      </Col>
    </Form.Row>
    </div>
  </Form>
  <Row>

    <Col xs={0} md={2} className="mt-0 shadrul d-md-block d-xs-none">

    <div className="hitesh">  

      <Row className="mb-3">
        <Col><h6>Filters</h6></Col>
        
        <Col><h6>Clear All</h6></Col>
      </Row>
      
    
    <div className="naman"> 
    <h6>Eligible</h6>
    {['All', 'corporate','Engineering Students','Graduate'].map((type) => (
    <div key={`default-${type}`} className="mb-2">
      <Form.Check 
        type={'checkbox'}
        id={`default-${type}`}
        label={`${type}`}
      />
    </div>
    ))}
    </div>

    <div className="naman">
     <h6>Domains</h6>
    {['Arts & Sciences', 'Business','Engineering','Others'].map((type) => (
    <div key={`default-${type}`} className="mb-2">
      <Form.Check 
        type={'checkbox'}
        id={`default-${type}`}
        label={`${type}`}
      />
    </div>
    ))}
    </div>

    <div className="naman">
    <h6>Category</h6>
    {['Article Writing', 'Awards','Business Plan'].map((type) => (
    <div key={`default-${type}`} className="mb-2">
      <Form.Check 
        type={'checkbox'}
        id={`default-${type}`}
        label={`${type}`}
      />
    </div>
    ))}

    </div>

    </div>


    </Col>
    <Col className="rajneesh">
      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

      <div className='cards'>
         <Card
          img='https://d8it4huxumps7.cloudfront.net/uploads/images/150x150/5f5f68449144e_WhatsApp_Image_2020-09-13_at_9.00.29_PM__1_.jpeg'
          title='NASA International Space Apps Challenge - Aaruush 2020'
          subtitle="SRM Institute of Science and Technology (SRMIST), Chennai"
          time='02 Oct 2020 - 04 Oct 2020' />
      </div>  

    </Col>
  </Row>
            </Container>
      </>
    
  );
}

export default Category;
