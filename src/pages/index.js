import * as React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Category_Slider from "../components/Category_Slider"
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import img1 from '../images/1st.png'
import logo_1 from '../images/logo-1.png'
import logo_2 from '../images/logo-2.png'
import logo_3 from '../images/logo-3.png'
import logo_4 from '../images/logo-4.png'
import img_back_2 from '../images/img-back-2.png'
import img_back_mob_2 from '../images/img-back-mob-2.png'
import howitwork_img from '../images/how-is-img.png'
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Photo Editing Services</title>
          <meta name="description" content="SPE is the leading outsourcing provider of photo editing services for businesses in the real estate, fashion, and e-commerce industries, among others."></meta>
          <meta name="keywords" content="photo editing, photo retouch, image editing"></meta>
        </Helmet>

      <Header />
    
      <div>
        <div className="container">
          <div className="home-first-sec">
              <div className="row">
                <div className="col-lg-6">
                   <div className="text-box">
                     <h1>Looking for Keyword?</h1>
                     <p>
                     Smart Photo Editors (SPE) is a preferred partner for photographers, photo studios, and businesses from (LOCATION). We are the (KEYWORD) and we have built a team of photo editing superstars to provide top-quality photo editing services and graphic designs.
                     </p>
                    <p> Since our foundation in 2006, we’ve become one of the most trusted outsourcing partners 
                     because we deliver high-quality, and cost-effective service to those looking for (KEYWORD).</p> 

                     <p>We do this by offering flexible engagement plans including one-time assignments, 
                       hourly projects, and FTE models. To discover how photo editing can give your business a 
                       competitive edge, contact us today. </p>

                     <div className="btn-home-sec">
                       <button className="get-started">Get started</button>
                       <button className="see-port">see portfolio</button>
                     </div>
                   </div>
                </div>
                <div className="col-lg-6">
                  <div className="homeimg-box">
                       <img src={img1} className="img-1"></img>              
                  </div>
                </div>
              </div>
          </div>  
        </div>
        <div className="container">
          <div className="logo-sec">
            <div className="logo-box">
              <img src={logo_1}></img>
            </div>
            <div className="logo-box">
              <img src={logo_2}></img>
            </div>
            <div className="logo-box">
              <img src={logo_3}></img>
            </div>
            <div className="logo-box">
              <img src={logo_4}></img>
            </div>
          </div>  
       </div>
        <div className="category-slider-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-9 col-md-12">
                          <div className="cat-slider-text">
                            <h4>category</h4>
                            <h2>Our Photo <br></br>Editing Services</h2>
                            <p>Smart Photo Editors will handle all of your photo retouch and editing needs through a wide range of services. These image editing services are all backed by our 100% on-time in-full guarantee, flexible prices, and a customer-centric, quality-first approach.</p>
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-12">
                        
                      </div>
                  </div>
              </div>
                      
              <div className="main-slider">
                  <div className="container cate-slider">
                    <div className="img-back-2">
                      <img src={img_back_2}></img>
                    </div>
                    <div className="img-back-2 mob-img-back">
                      <img src={img_back_mob_2}></img>
                    </div>
                    <Category_Slider/>
                  </div>
              </div>
           

            <div className="howitwork-sec">
              <div className="container">
              <div className="row">
                <div className="col-lg-5">
                   <div className="img-howit">
                     <img src={howitwork_img}></img>
                   </div>
                </div>
                <div className="col-lg-7 p-0">

                   <div className="cat-slider-text">
                      <h4>Process</h4>
                      <h3>How It Works</h3>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
                    </div>
                    <div className="how-text">
                      <ol>
                        <li><span>1</span><p>YOU UPLOAD YOUR IMAGES TO OUR FAST SERVERS</p></li>
                        <li><span>2</span><p>WE EDIT THE IMAGES TO YOUR HEARTS CONTENT</p></li>
                        <li><span>3</span><p>WE PERFORM RIGUROUS QUALITY CHECKS</p></li>
                        <li><span>4</span><p>YOU DOWNLOAD THE EDITED IMAGES</p></li>
                      </ol>
                    </div>
                </div>
              </div>
              </div>
            </div>
            </div>   
            <div className="category-slider-sec testimonials-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-7">
                          <div className="cat-slider-text">
                            <h4>Word of praise</h4>
                            <h3>Testimonials</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna ali- </p>
                          </div>
                      </div>
                      <div className="col-lg-5"></div>
                  </div>
              </div>
                      
              <div className="main-slider">
                  <div className="container cate-slider">
                   
                    <Testimonials/>
                  </div>
              </div>
            </div> 
          
           <div className="Success-sec">
             <div className="container">
                <div class="cat-slider-text">
                    <h4>Success</h4>
                    <h3>Success Stories</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim </p>
                </div>

                <div className="main-slider">
                  <div className="container cate-slider">
                   
                   <Sucslider/>
                  </div>
              </div>
             </div>  
           </div>
          

          <div className="start-sec">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="start-text">
                    <h1>Start Your Project Today</h1>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="start-btn">
                    <button>Start</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
     
    </>
  )
}

export default IndexPage
