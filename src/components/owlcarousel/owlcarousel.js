import React, { Component } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import './owl.css';



export class OwlDemo extends Component {
  render() {
    const options = {
        items: 4
    };
    return (
      <div>
        <div class="container-fluid">
          <OwlCarousel options={options}>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
            <div>
              <img className="img" src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/5f3e0c035b1ff_listing_app_3_.jpg?d=400x229" />
            </div>
          </OwlCarousel>
        </div>
      </div>
    );
  }
}
export default OwlDemo;
