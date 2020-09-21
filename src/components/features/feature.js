import React from 'react';
import './feature.css';
import {Card, Row, Col} from 'react-bootstrap'
// import Featurecard from './featurecard';

// const Feature = props =>{
//     return (
//         <div className="feature">
//             <h4 className="feature_head">HOW IT WORKS</h4>
//             <div className="feature_card">
//                 <Featurecard heading="POST PROJECT" description="No description" bool={false} />
//                 <Featurecard heading="POST PROJECT" description="No description" bool={true} />
//                 <Featurecard heading="POST PROJECT" description="No description" bool={false} />
//                 <Featurecard heading="POST PROJECT" description="No description" bool={true} />
//             </div>
//         </div>
//     );
// };

// export default Feature;

export default class Feature extends React.Component{
    render(){
      return(
        <section className="container" style={{marginBottom:"10px"}}>
          <h1 style={{textAlign:"center", marginBottom:"10px"}} >How It Works</h1>
          <Row>
              <Col md={3} xs={12} className="cards">
              <Card class="card">
                  {/* <Card.Img variant="top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" /> */}
                  <Card.Body>
                    <img className="image" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" alt="demo"/>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    Browse proposals, profiles of freelancers & their reviews. Compare, Interview & finalise the candidate.
                    </Card.Text>
                    
                  </Card.Body>
                
              </Card>
              </Col>
              <Col md={3} xs={12} className="cards">
              <Card class="card">
                  {/* <Card.Img variant="top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" /> */}
                  <Card.Body>
                    <img className="image" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" alt="demo"/>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    Browse proposals, profiles of freelancers & their reviews. Compare, Interview & finalise the candidate.
                    </Card.Text>
                    
                  </Card.Body>
                
              </Card>
              </Col>
              <Col md={3} xs={12} className="cards">
              <Card class="card">
                  {/* <Card.Img variant="top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" /> */}
                  <Card.Body>
                    <img className="image" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" alt="demo"/>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    Browse proposals, profiles of freelancers & their reviews. Compare, Interview & finalise the candidate.
                    </Card.Text>
                    
                  </Card.Body>
                
              </Card>
              </Col>
              <Col md={3} xs={12} className="cards">
                <Card class="card">
                  {/* <Card.Img variant="top" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" /> */}
                  <Card.Body>
                    <img className="image" src="https://assets.truelancer.com/assets/home_v/images/hiwIcn_02.webp" alt="demo"/>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                    Browse proposals, profiles of freelancers & their reviews. Compare, Interview & finalise the candidate.
                    </Card.Text>
                    
                  </Card.Body>
                
              </Card>
              </Col>
          </Row>
        </section>
      )
    }
  
  }