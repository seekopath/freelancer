import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './dashboardcarousel.css'
const options = {
    items: 2,
    margin : 15,
    center : true,
    loop :true,
    autoplay:true,
    autoplayHoverPause:true,
    autoplaySpeed : 50,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
};
class Dashboardcarousel extends React.Component{
  render()
  {
    return (
      <div className="dashboardcarousel_content">
    <OwlCarousel
    className="owl-theme"

    {...options}
>

  <div className="dashboardcarousel_item">
  <img alt="img1" src="/assets/img1.png" className="dashboardcarousel_image"/></div>
  <div className="dashboardcarousel_item">
  <img alt="img1" src="/assets/img2.jpg" className="dashboardcarousel_image"/></div>
  <div className="dashboardcarousel_item">
  <img alt="img1" src="/assets/img3.png" className="dashboardcarousel_image"/></div>
  <div className="dashboardcarousel_item">
  <img alt="img1" src="/assets/img4.jpg" className="dashboardcarousel_image"/></div>

</OwlCarousel>
</div>
    )
  }
}

export default Dashboardcarousel;