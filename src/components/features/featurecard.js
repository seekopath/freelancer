import React from "react";
import "./featurecard.css";
import { Container, Row, Col } from "react-bootstrap";

const Featurecard = (props) => {
  return props.bool ? (
    <div className="feature-card">
      <Row>
        <Col md={6}>
          <div className="feature-card_description">
            <h4 className="feature-card_heading">{props.heading}</h4>
            <h6 className="feature-card_description">{props.description}</h6>
          </div>
        </Col>
        <Col md={6} className="feature-card_blank">
          <div className=""></div>
        </Col>
      </Row>
    </div>
  ) : (
    <div className="feature-card">
      <Row>
        <Col md={6} className="feature-card_blank">
          <div className=""></div>
        </Col>
        <Col md={6}>
          <div className="feature-card_description">
            <h4 className="feature-card_heading">{props.heading}</h4>
            <h6 className="feature-card_description">{props.description}</h6>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Featurecard;
