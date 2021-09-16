import React,{ useState,useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import product1 from '../images/product1.webp'
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import product_icon_1 from "../images/product-icon-1.webp";
import product_icon_2 from "../images/product-icon-2.webp";
import product_icon_3 from "../images/product-icon-3.webp";
import product_icon_4 from "../images/product-icon-4.webp";
import product_img_2 from "../images/product-img-2.webp"
import ep_img from "../images/pro-1.webp"
import ep_img_1 from "../images/pro-1.webp"
import ep_img_2 from "../images/pro-2.webp"
import ep_img_3 from "../images/pro-3.webp"
import ep_img_4 from "../images/pro-4.webp"
import ep_img_5 from "../images/pro-5.webp"
import product1_mob from '../images/product1-mob.webp'
import product_img_2_mob from '../images/product-img-2-mob.webp'

const For = () => {
  return (
    <>
      <Header />
      
      <div className="product-sec">
        <div className="ps-first">
          <div className="container">
              <div className="home-first-sec">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="text-box">
                        <h1>eCommerce & Product Photo Editing</h1>
                      
                        <p>Sell your products faster by enhancing your online shop
                          and e-commerce listings with optimized images by partnering with Smart Photo Edits
                          </p>
                            
                        <div className="btn-home-sec">
                          <button className="get-started">Get started</button>
                          <button className="see-port">see portfolio</button>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="homeimg-box">
                          <img src={product1} className="img-1 desktop-img-1" width="488px" height="578px"></img>
                          <img src={product1_mob} className="mob-img-1" width="244px" height="289px"></img>               
                      </div>
                    </div>
                  </div>
              </div>  
            </div>
          </div>

          <div className="about-3-sec">
             <div className="container">
                <div className="row">
                   <div className="col-md-12 col-lg-6 right-len">
                      <div className="row row-2">
                         <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-1">
                                  <img src={product_icon_1} width="41px" height="37px"></img>
                                </div>
                                <h1>Leading</h1>
                                <p>Leading provider of e-commerce and product photo editing</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-2">
                                  <img src={product_icon_2} width="41px" height="37px"></img>
                                </div>
                                <h1>Partner</h1>
                                <p>Partner with us as we offer high-quality services</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-1">
                                  <img src={product_icon_3} width="41px" height="37px"></img>
                                </div>
                                <h1>Optimized</h1>
                                <p>We ensure that every image is optimized for use</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-2">
                                  <img src={product_icon_4} width="41px" height="37px"></img>
                                </div>
                                <h1>Ready</h1>
                                <p>Ready to use on online marketplace and e-commerce platforms</p>
                              </div>
                          </div> 
                      </div>
                   </div>
                   <div className="col-md-12 col-lg-6 our-mission">
                      <div class="cat-slider-text">
                          <h4>PERFECTION</h4>
                          <h2>Looking for Perfection</h2>
                          <p>Smart Photo Edits (SPE) is a leading provider of
                              e-commerce and product photo editing services to
                              online retailers and product photographers in
                            LOCATION.
                          </p>
                          <p>Businesses looking for KEYWORD love to partner
                              with us as we offer high-quality services at affordable
                              prices. We have designed our e-commerce and
                              product photo editing services to ensure that every
                              image is optimized for use in an online marketplace
                              and e-commerce platforms. 
                          </p>
                        </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="abot-2-sec secound-ab">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                      <p>We’ve invested in the top product photography
                        editing tools like Adobe Photoshop and Lightroom –
                        which allows us to add the creativity and corrections
                        needed to enhance images for online viewing. 
                        </p>
                        <p>We have also built teams of editing specialists who are
                          specifically trained in those tools so they can handle
                          large volumes of photo editing requirements. If you
                          are looking for KEYWORD, then SPE is the right
                          partner for you. 
                        </p>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box-about">
                        <img src={product_img_2} class="desktop-img-1" width="490px" height="417px"></img>
                        <img src={product_img_2_mob} class="mob-img-1" width="333px" height="250px"></img>
                      </div>
                    </div>
                </div>
              </div>  
          </div> 
        
        <div className="ep-sec">
           <div className="container">
              <div class="cat-slider-text">
                    <h4>ECOMMERCE SERVICES</h4>
                    <h2>eCommerce & Product <br></br>Photo Editing Services by SPE</h2>
                    <p>SPE offers extensive e-commerce product photo editing services to help you sell better online</p>
              </div>    
              <div className="row">
                 <div className="ep-box">
                   <div className="ep-img">
                      <img src={ep_img} width="296px" height="359px"></img>
                   </div> 
                   <h1>Photo Retouching</h1>
                   <p>Contrast/brightness, red-eye reduction, and enlarging of product photos</p>
                 </div>
                 <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_1} width="296px" height="359px"></img>
                    </div> 
                    <h1>Color Corrections</h1>
                   <p>Exact color-matching is guaranteed to make your products stand out. </p>
                 </div>
                 <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_2} width="296px" height="359px"></img>
                    </div> 
                    <h1>Background Removal</h1>
                    <p>Change an ordinary or uninspiring background to a vibrant one of your choice!</p>
                  </div>  
                  <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_3} width="296px" height="359px"></img>
                    </div> 
                    <h1>Lighting & <br></br>Shadow Corrections</h1>
                    <p>Addition of artificial shadows, cast shadows, and drop shadows.</p>
                  </div>  
                  <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_4} width="296px" height="359px"></img>
                    </div> 
                    <h1>Scaling <br></br>Adjustments</h1>
                    <p>Change an ordinary or uninspiring background to a vibrant one of your choice!</p>
                  </div>  
                  <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_5} width="296px" height="359px"></img>
                    </div> 
                    <h1>Custom <br></br>Color Tone</h1>
                    <p>High-resolution color correction and enhancement to make any product magical</p>
                  </div>  
              </div>         
           </div>
        </div>
           
          <div className="how-sec">
            <div className="container">
              <h2>How it Works</h2>
              <p>A speedy, secure editing process created for a high-quality quick turnaround on <br></br>
                  your requirements. No time wasted!
              </p>
            </div> 
          </div>
        
          <div className="category-slider-sec testimonials-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-9">
                          <div className="cat-slider-text">
                            <h4>Word of praise</h4>
                            <h3>Testimonials</h3>
                            <p>Don’t just take our word for it. Discover what our customers have to say about us.</p>
                          </div>
                      </div>
                      <div className="col-lg-3"></div>
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
                <div className="cat-slider-text">
                    <h4>Success</h4>
                    <h3>Success Stories</h3>
                    <p>Delivering true value to every customer. Find out how we do it.</p>
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
              <div className="row  align-items-center">
                <div className="col-md-12 col-lg-8">
                  <div className="start-text">
                    <h1>Image Editing & Retouching Services</h1>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <div className="start-btn">
                    <button>Get Started</button>
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

export default For