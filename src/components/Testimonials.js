import * as React from "react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import testi1 from "../images/testi-1.png";
import testi2 from "../images/testi-2.png";
import testi_icon from "../images/testi-icon.png";


const Testimonials = () => {
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
        <div>
            <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="testi-img">
                        <img src={testi1}></img>
                    </div>
                    <div className="testi-text">
                        <div className="testi-icon">
                           <img src={testi_icon}></img>
                        </div>
                        <div className="testi-middle">
                        <p>It was a pleasant experience we would say. The timelines and the quality required for the project were extremely satisfactory. I would definitely recommend this company for a cost-effective high-quality service."</p>
                        </div>

                        <siv className="author-name">
                            <h2>Photo Editing Manager,</h2>
                            <p>Reputed Real Estate Studio in Sweden</p>
                        </siv>
                    </div>
                </div>
            </div>
        </div>
          <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="testi-img">
                        <img src={testi2}></img>
                    </div>
                    <div className="testi-text">
                        <div className="testi-icon">
                           <img src={testi_icon}></img>
                        </div>
                        <div className="testi-middle">
                        <p>It was a pleasant experience we would say. The timelines and the quality required for the project were extremely satisfactory. I would definitely recommend this company for a cost-effective high-quality service."</p>
                        </div>

                        <div className="author-name">
                            <h2>Photo Editing Manager,</h2>
                            <p>Reputed Real Estate Studio in Sweden</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="testi-img">
                        <img src={testi1}></img>
                    </div>
                    <div className="testi-text">
                        <div className="testi-icon">
                           <img src={testi_icon}></img>
                        </div>
                        <div className="testi-middle">
                        <p>It was a pleasant experience we would say. The timelines and the quality required for the project were extremely satisfactory. I would definitely recommend this company for a cost-effective high-quality service."</p>
                        </div>

                        <div className="author-name">
                            <h2>Photo Editing Manager,</h2>
                            <p>Reputed Real Estate Studio in Sweden</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div>
              <div className="cate-slider-box">
                <div className="back-color-slider-box">
                    <div className="testi-img">
                        <img src={testi2}></img>
                    </div>
                    <div className="testi-text">
                        <div className="testi-icon">
                           <img src={testi_icon}></img>
                        </div>
                        <div className="testi-middle">
                        <p>It was a pleasant experience we would say. The timelines and the quality required for the project were extremely satisfactory. I would definitely recommend this company for a cost-effective high-quality service."</p>
                        </div>

                        <div className="author-name">
                            <h2>Photo Editing Manager,</h2>
                            <p>Reputed Real Estate Studio in Sweden</p>
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
      export default Testimonials