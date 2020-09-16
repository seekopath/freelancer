import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./testimonial.css";
const options = {
  items: 4,
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplaySpeed: 50,
  dots: true,
  navText: [
    "<div>hiasbghjgshj</div>",
    "<FontAwesomeIcon icon={faAngleRight} />",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};
class Testimonial extends React.Component {
  render() {
    return (
      <section>
        <h1 className="text-center">Testimonials</h1>
        <div className="containerrrr">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <figure className="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div className="item">
              <figure className="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div className="item">
              <figure className="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div className="item">
              <figure className="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
            <div className="item">
              <figure className="snip1192">
                <blockquote>
                  Calvin: Sometimes when I'm talking with others, my words can't
                  keep up with my thoughts. I wonder why we think faster than we
                  speak. Hobbes: Probably so we can think twice.{" "}
                </blockquote>
                <div className="author">
                  <img
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg"
                    alt="sq-sample1"
                  />
                  <h5>
                    Pelican Steve <span> LittleSnippets</span>
                  </h5>
                </div>
              </figure>
            </div>
          </OwlCarousel>
          {/* <p>
<button  class=" corousel-nav-button owl-prev"><FontAwesomeIcon icon={faAngleLeft} /></button>
<button class=" corousel-nav-button owl-next"><FontAwesomeIcon icon={faAngleRight} /></button>
</p> */}
        </div>
      </section>
    );
  }
}
export default Testimonial;
