import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testi1 from "../images/testi-1.png";
import testi2 from "../images/testi-2.png";
import testi_icon from "../images/testi-icon.png";
import { TestimonialData } from "../testimonialData";

const Testimonials = ({locationKey}) => {
    function SampleNextArrow(props) {
        const {onClick } = props;
        return (
          <div
            className="cut-arrow-right"
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="cut-arrow-left"
           
            onClick={onClick}
          />
        );
      }
        const settings = {
         
          infinite: true,
          className: "center",
          infinite: true,
          arrows: true,
          //centerMode: true,
          centerPadding: "-60px",
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2,
          nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />,
         responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
             
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };
    return (
      <>
  <div>
        <div className="slider-main">
        <Slider {...settings}>
        {TestimonialData.filter(d => d.country.includes(locationKey)).map(filteredData => (
        <div>
            <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="testi-img">
                          <img className="desktop-img" width="300px" height="411px" src={`../../images/testimonial/${filteredData.imageDesktop}`}></img>
                          <img className="mobile-img" width="140px" height="125px" src={`../../images/testimonial/${filteredData.imageMobile}`}></img>
                    </div>
                    <div className="testi-text">
                        <div className="testi-icon">
                           <img src={testi_icon}></img>
                        </div>
                        <div className="testi-middle">
                          <p>{filteredData.description + '"'}</p>
                        </div>

                        <siv className="author-name">
                            <h2>{filteredData.title},</h2>
                            <p>{filteredData.place}</p>
                        </siv>
                    </div>
                </div>
            </div>
        </div>
       
       ))}
        </Slider>
        </div>
      </div>
      </>
      )
      }
      export default Testimonials