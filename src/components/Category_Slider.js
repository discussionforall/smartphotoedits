import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import icons1 from "../images/icon-slider1.png";
import icons2 from "../images/icon-slider2.png";
import icons3 from "../images/icon-slider3.png";
import icons4 from "../images/icon-slider4.png";
const SimpleSlider = () => {
    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="cut-arrow-right"
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const {onClick } = props;
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
          slidesToShow: 4,
          slidesToScroll: 3,
          nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />,
         responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
             
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 767,
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
          <div>
            <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-1">
                        <img src={icons1}></img>
                    </div>
                    <h2>Realestate</h2>
                    <p>Take a look at the before and after samples of the images we worked on.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
          </div>
          <div>
          <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-2">
                        <img src={icons2}></img>
                    </div>
                    <h2>Sky replacement</h2>
                    <p>Take a look at the before and after samples of the images we worked on.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
          </div>
          <div>
          <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-1">
                        <img src={icons3}></img>
                    </div>
                    <h2>Portrait & Fashion</h2>
                    <p>Take a look at the before and after samples of the images we worked on.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
          </div>
          <div>
          <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-2">
                        <img src={icons4}></img>
                    </div>
                    <h2>Jewelry</h2>
                    <p>Take a look at the before and after samples of the images we worked on.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
          </div>
          <div>
          <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-1">
                        <img src={icons1}></img>
                    </div>
                    <h2>Realestate</h2>
                    <p>Take a look at the before and after samples of the images we worked on.</p>
                    <a href="#">Learn More</a>
                </div>
            </div>
          </div>
        
        </Slider>
        </div>
      </div>
      </>
      )
      }
      export default SimpleSlider