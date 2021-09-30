import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import icons1 from "../images/icon-slider1.webp";
import icons2 from "../images/icon-slider2.webp";
import icons3 from "../images/icon-slider3.webp";
import icons4 from "../images/icon-slider4.webp";
import { Link } from "gatsby"
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
          slidesToScroll:1,
          nextArrow: <SampleNextArrow />,
         prevArrow: <SamplePrevArrow />,
         responsive: [
          {
            breakpoint: 2500,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
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
                        <img src={icons1} alt="Category-icon-1" width="48px" height="37px"></img>
                    </div>
                    <h1>Real Estate Photo <br></br>Editing</h1>
                    <p>Background replacement, lighting, and retouching for real estate.</p>
                    <Link to ="/portfolio?tab=0">
                        <a href="#">Read More </a>
                    </Link>
                </div>
            </div>
          </div>
          <div>
            <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-2">
                        <img src={icons2}  alt="Category-icon-2" width="48px" height="37px"></img>
                     
                    </div>
                    <h1>Portrait & Fashion Photo <br></br> Editing</h1>
                    <p>Photo enhancing techniques for portrait and fashion photos. </p>
                    <Link to ="/portfolio?tab=2">
                        <a href="#">Read More </a>
                    </Link>
                </div>
            </div>
          </div>
          <div>
            <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-1">
                    <img src={icons3} alt="icons3Category-icon-3" width="32px" height="auto"></img>
                    </div>
                    <h1>Ecommerce & Product <br></br> Editing</h1>
                    <p>Visually realistic feel for your products for e-commerce selling </p>
                    <Link to ="/portfolio?tab=4">
                      <a href="#">Read More </a>
                    </Link>
                </div>
            </div>
          </div>
          <div>
          <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="icon-sec-slider color-2">
                    <img src={icons4} alt="Category-icon-4" width="47px" height="auto"></img>
                    </div>
                    <h1>Jewelry Photo <br></br> Editing</h1>
                    <p>Photo enhancement techniques for jewelry and gems</p>
                    <Link to ="/portfolio?tab=3">
                      <a href="#">Read More </a>
                    </Link>  
                </div>
            </div>
          </div>

          <div>
          
          </div>
          
 
        </Slider>
        </div>
      </div>
      </>
      )
      }
      export default SimpleSlider