import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import suc_img from "../images/success-img.png";

const Sucslider = () => {
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
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: <SampleNextArrow/>,
         prevArrow: <SamplePrevArrow/>,
         responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
             
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
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
        <div>
            <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="testi-img col-md-12 col-lg-6">
                        <img src={suc_img}></img>
                    </div>
                    <div className="testi-text col-md-12 col-lg-6">
                         <h3>.31 KM Image Trail Stitched for Norwegian Company</h3>

                         <div className="subtext">
                           <h5>The Scope</h5>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p>
                         </div>

                         <div className="subtext">
                           <h5>The Outcome</h5>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div className="cate-slider-box">
            <div className="back-color-slider-box">
                    <div className="testi-img col-md-12 col-lg-6">
                        <img src={suc_img}></img>
                    </div>
                    <div className="testi-text col-md-12 col-lg-6">
                         <h3>.31 KM Image Trail Stitched for Norwegian Company</h3>

                         <div className="subtext">
                           <h5>The Scope</h5>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p>
                         </div>

                         <div className="subtext">
                           <h5>The Outcome</h5>
                           <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat </p>
                         </div>
                    </div>
                </div>
            </div>
        </div>
       
        
        </Slider>
        </div>
      </div>
      </>
      )
      }
      export default Sucslider