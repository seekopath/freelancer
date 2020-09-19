import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import { Row, Col, Button} from 'react-bootstrap';
import './featuredjobs.css'
const options = {
  items:4,
    margin : 10,
    // center : true,
    loop :true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplaySpeed : 50,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
};
export class Hello extends React.Component{
  render()
  {
    return (
      <div className="containerr">
    <OwlCarousel
    className="owl-theme"

    {...options}
>

  <div className="item">
  <Card className="card">
    <Card.Img variant="top" src="/assets/img_card.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        #Some random text
      </Card.Text>
      <div className="footer-content">
        <Row>
          <Col>
          <p>306 registered</p>
          {/* <span className="icon"><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/registered.svg"/></span> */}
          </Col>
          <Col>
          <span>1 Day left</span>
          </Col>
        </Row>
        <Row className="bookmark-views">
          <Col>
            <Button variant="outline-primary">Primary</Button>
          </Col>
          <Col>
          <Button variant="outline-primary">Primary</Button>
          </Col>
        </Row>
      </div>
    </Card.Body>
    
  </Card>
  </div>
  <div className="item">
  <Card>
    <Card.Img variant="top" src="/assets/img1_card.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        #Some random text
      </Card.Text>
      <div className="footer-content">
        <Row>
          <Col>
          <p>306 registered</p>
          {/* <span className="icon"><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/registered.svg"/></span> */}
          </Col>
          <Col>
          <span>1 Day left</span>
          </Col>
        </Row>
        <Row className="bookmark-views">
          <Col>
            <Button variant="outline-primary">Primary</Button>
          </Col>
          <Col>
          <Button variant="outline-primary">Primary</Button>
          </Col>
        </Row>
      </div>
    </Card.Body>
    
  </Card>
  </div>
  <div className="item">
  <Card>
    <Card.Img variant="top" src="/assets/img3_card.jpg" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        #Some random text
      </Card.Text>
      <div className="footer-content">
        <Row>
          <Col>
          <p>306 registered</p>
          {/* <span className="icon"><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/registered.svg"/></span> */}
          </Col>
          <Col>
          <span>1 Day left</span>
          </Col>
        </Row>
        <Row className="bookmark-views">
          <Col>
            <Button variant="outline-primary">Primary</Button>
          </Col>
          <Col>
          <Button variant="outline-primary">Primary</Button>
          </Col>
        </Row>
      </div>
    </Card.Body>
    
  </Card>
  </div>
  <div className="item">
  <Card>
    <Card.Img variant="top" src="/assets/img2_card.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        #Some random text
      </Card.Text>
      <div className="footer-content">
        <Row>
          <Col>
          <p>306 registered</p>
          {/* <span className="icon"><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/registered.svg"/></span> */}
          </Col>
          <Col>
          <span>1 Day left</span>
          </Col>
        </Row>
        <Row className="bookmark-views">
          <Col>
            <Button variant="outline-primary">Primary</Button>
          </Col>
          <Col>
          <Button variant="outline-primary">Primary</Button>
          </Col>
        </Row>
      </div>
    </Card.Body>
    
  </Card>
  </div>
  <div class="item">
  <Card>
    <Card.Img variant="top" src="/assets/img2_card.png" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        #Some random text
      </Card.Text>
      <div class="footer-content">
        <Row>
          <Col>
          <p>306 registered</p>
          {/* <span className="icon"><img src="https://d8it4huxumps7.cloudfront.net/uploads/images/d2c-images/registered.svg"/></span> */}
          </Col>
          <Col>
          <span>1 Day left</span>
          </Col>
        </Row>
        <Row className="bookmark-views">
          <Col>
            <Button variant="outline-primary">Primary</Button>
          </Col>
          <Col>
          <Button variant="outline-primary">Primary</Button>
          </Col>
        </Row>
      </div>
    </Card.Body>
    
  </Card>
  </div>

</OwlCarousel>
</div>
    )
  }
}
export default Hello;



