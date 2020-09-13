import React from 'react';
import ReactDOM from 'react-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './carousel.css'
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
class Carousell extends React.Component{
  render()
  {
    return (
      <div class="content">
    <OwlCarousel
    className="owl-theme"

    {...options}
>

  <div class="item">
  <img alt="img1" src="/assets/img1.png" class="image"/></div>
  <div class="item">
  <img alt="img1" src="/assets/img2.jpg" class="image"/></div>
  <div class="item">
  <img alt="img1" src="/assets/img3.png" class="image"/></div>
  <div class="item">
  <img alt="img1" src="/assets/img4.jpg" class="image"/></div>

</OwlCarousel>
</div>
    )
  }
}
// ReactDOM.render(<Carousell />, document.getElementById('root'));

export default Carousell;