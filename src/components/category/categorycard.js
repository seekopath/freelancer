import React from 'react';

import 'react-bootstrap'
import './category.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Row,Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import {MdEventNote} from 'react-icons/md';
import {IoIosTime} from 'react-icons/io';
import {AiFillEye} from 'react-icons/ai';
import {BsPersonPlusFill} from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge';



class Card extends React.Component {
  render() {
    return(
        <div className="card">
          <Row>
            <Col xs={4} md={2}>
              <Image src={this.props.img} rounded/>
            </Col>
            <Col xs={8} md={7} >
            <div className="card-body">
            <h6>{this.props.title}</h6>
            <p>{this.props.subtitle}</p>
            <Row>
              <Col xs={12} md={6}>
              <p><span><MdEventNote/></span>{this.props.time}</p>
              </Col>
              
              
              <Col xs={0} md={6} className ="hel d-none d-lg-block">
                <span>
                  <Badge pill variant="secondary">
                Programming
              </Badge>{'   '}
             
              <Badge pill variant="secondary">
                Engineering
              </Badge>{'   '}

                </span>
              
              </Col>


            </Row>
            
            
            
          </div>
            </Col>
            <Col md={2} >
              <Row>
                <Col xs={4} md={12}>
                  <p>93  <span><BsPersonPlusFill/></span>  Registered</p>
                </Col>
                <Col xs={4} md={12}> 
                  <p>4  <span><IoIosTime/></span>  days left</p>
                </Col>
                <Col xs={4} md={12}> 
                  <p>10,966  <span><AiFillEye/></span>  Views</p>
                </Col>
              </Row>
              
              
              
            </Col>

          </Row>
         
        </div>
    )
  }
}


export default Card;

