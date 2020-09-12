import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import './carousel.css'

export class Carousell extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/5f47a80b2a54f_Web_Banner_FINACE_Reg_now_open.png?d=1280x500"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/5f47a80b2a54f_Web_Banner_FINACE_Reg_now_open.png?d=1280x500"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://d8it4huxumps7.cloudfront.net/images/home-page-banner/5f47a80b2a54f_Web_Banner_FINACE_Reg_now_open.png?d=1280x500"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Carousell;
