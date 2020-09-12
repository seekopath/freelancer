import React from "react";
import Card from "../cards/card";
import "./categories.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';

const Category = (props) => {
  return (
    <Container className="containerr">
        <Row>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
            <Col md={3} xs={6} className="cards"><Card name="Competitions" /></Col>
        </Row>
    </Container>
  );
};

export default Category;
