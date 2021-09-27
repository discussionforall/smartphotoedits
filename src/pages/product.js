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
import ep_img_mob from "../images/pro-1-mob.webp"
import ep_img_1_mob from "../images/pro-1-mob.webp"
import ep_img_2_mob from "../images/pro-2-mob.webp"
import ep_img_3_mob from "../images/pro-3-mob.webp"
import ep_img_4_mob from "../images/pro-4-mob.webp"
import ep_img_5_mob from "../images/pro-5-mob.webp"
import product1_mob from '../images/product1-mob.webp'
import product_img_2_mob from '../images/product-img-2-mob.webp'
import { Link } from "gatsby"
import GetStart from "../components/getStart"
import axios from "axios"
import { SuccessStoryData } from "../data/productSuccessStoryData";
import { TestimonialData } from "../data/productTestimonialData";

const publicIp = require('public-ip')
 
var Product_keyword = "Portrait & Fashion Photo Editing"

const For = ({ location }) => {

function parseQuery(queryString) {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

  let countryName;
  const [dataKey,setDataKey]=useState('');
  const [locationKey,setLocationKey]=useState('');
  const checkCountry = ['Australia','Canada','Netherlands','New Zealand','Sweden','Switzerland','United Kingdom','United States','Italy','Belgium','Norway','France','Finland','Israel','Ireland','Singapore','Denmark']
  
  useEffect(()=>{
    let  ip;
    let params = new URLSearchParams(location.search);
    let utm_term_product = params.get('utm_term');
    let config
    let data
    (async () => {
      ip = await publicIp.v4();
      
      data = [{ "query": ip,   "fields": "country"}];

       config = {
        method: 'post',
        url: 'https://server882.herokuapp.com/http://ip-api.com/batch',
        headers: { 
          'Content-Type': 'application/javascript'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        countryName = response.data[0].country;
        if(!checkCountry.includes(countryName)){
          countryName = 'United States'
        }
        console.log("location",countryName)
        localStorage.setItem("location",countryName);
        // console.log(parseQuery(location.search).utm_term_product)
        setLocationKey(localStorage.getItem("location") !==null?localStorage.getItem("location"):'United States' )
       
      })
      .catch(function (error) {
        console.log(error);
      });

      if(location.search !==''&&parseQuery(location.search).utm_term){
         
        if(localStorage.getItem("utm_term_product")!==''){
            localStorage.setItem("utm_term_product",utm_term_product);
           
        }else{
            localStorage.setItem("utm_term_product",Product_keyword);
            
        }
    }
    setDataKey(location.search !==''? localStorage.getItem("utm_term_product")  !==null? localStorage.getItem("utm_term_product"):utm_term_product:localStorage.getItem("utm_term_product")!==null?localStorage.getItem("utm_term_product"):Product_keyword )
      
    })();    

  },[])

  return (
    <>
      <Header metaTitle="Outsource ECommerce & Product Photo Editing Services to SPE" metaDescription="Sell your products faster by enhancing your online shop and e-commerce listings with optimized 
images by partnering with Smart Photo Edits" />

 <div className="home-sec">
        <div className="zindex-div">      
      <div className="product-sec">
        <div className="ps-first">
          <div className="container">
              <div className="home-first-sec">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="text-box">
                        <h1>{dataKey&&dataKey?dataKey:Product_keyword}</h1>
                      
                        <p>The {dataKey&&dataKey?dataKey:Product_keyword} at Smart Photo Edits will add persuasion to 
                        Sell your products faster by enhancing your online shop and e-commerce listings!
                          </p>
                            
                        <div className="btn-home-sec">
                        <Link to="/contact" className="get-started">
									Get started
								</Link>
                          <Link to="/portfolio" className="see-port">see portfolio </Link>
                        </div>
                        
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="homeimg-box">
                          <img src={product1} alt="product-banner-img" className="img-1 desktop-img-1" width="488px" height="578px"></img>
                          <img src={product1_mob} alt="product-banner-img-mob" className="mob-img-1" width="244px" height="289px"></img>               
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
                                  <img src={product_icon_1} alt="product-icon-img-1" width="41px" height="37px"></img>
                                </div>
                                <h1>Leading</h1>
                                <p>Leading provider of e-commerce and product photo editing</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-2">
                                  <img src={product_icon_2} alt="product-icon-img-2" width="41px" height="37px"></img>
                                </div>
                                <h1>Partner</h1>
                                <p>Partner with us as we offer high-quality services</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-1">
                                  <img src={product_icon_3} alt="product-icon-img-3" width="41px" height="37px"></img>
                                </div>
                                <h1>Optimized</h1>
                                <p>We ensure that every image is optimized for use</p>
                              </div>
                          </div>
                          <div className="col-md-6 col-6">
                            <div class="back-color-slider-box">
                                <div class="icon-sec-slider color-2">
                                  <img src={product_icon_4} alt="product-icon-img-4" width="41px" height="37px"></img>
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
                          <h2>Looking for {dataKey&&dataKey?dataKey:Product_keyword} </h2>
                          <p>Smart Photo Edits (SPE) is a leading provider of
                              e-commerce and product photo editing services to
                              online retailers and product photographers in {locationKey&&locationKey?locationKey:'United States'}.
                          </p>
                          <p>Businesses looking for {dataKey&&dataKey?dataKey:Product_keyword} love to partner
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
                          are looking for {dataKey&&dataKey?dataKey:Product_keyword}, then SPE 
                          is the right partner for you. 
                        </p>
                    </div>
                    <div className="col-md-6">
                      <div className="img-box-about">
                        <img src={product_img_2} alt="product-img-2" class="desktop-img-1" width="490px" height="417px"></img>
                        <img src={product_img_2_mob} alt="product-img-2-mob" class="mob-img-1" width="333px" height="250px"></img>
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
                      <img src={ep_img} alt="eCommerce-Product-img" class="desktop-img-1" width="296px" height="359px"></img>
                      <img src={ep_img_mob} alt="eCommerce-Product-img-mob" class="mob-img-1" width="236px" height="286px"></img>
                   </div> 
                   <h1>Photo Retouching</h1>
                   <p>Contrast/brightness, red-eye reduction, and enlarging of product photos</p>
                 </div>
                 <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_1} alt="eCommerce-Product-img-1" class="desktop-img-1"  width="296px" height="359px"></img>
                       <img src={ep_img_1_mob} alt="eCommerce-Product-img-mob" class="mob-img-1" width="236px" height="286px"></img>
                    </div> 
                    <h1>Color Corrections</h1>
                   <p>Exact color-matching is guaranteed to make your products stand out. </p>
                 </div>
                 <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_2} alt="eCommerce-Product-img-2" class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={ep_img_2_mob} alt="eCommerce-Product-img-2-mob" class="mob-img-1" width="236px" height="286px"></img>
                    </div> 
                    <h1>Background Removal</h1>
                    <p>Change an ordinary or uninspiring background to a vibrant one of your choice!</p>
                  </div>  
                  <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_3} alt="eCommerce-Product-img-3" class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={ep_img_3_mob} alt="eCommerce-Product-img-3-mob" class="mob-img-1" width="236px" height="286px"></img>
                    </div> 
                    <h1>Lighting & <br></br>Shadow Corrections</h1>
                    <p>Addition of artificial shadows, cast shadows, and drop shadows.</p>
                  </div>  
                  <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_4} alt="eCommerce-Product-img-4" class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={ep_img_4_mob} alt="eCommerce-Product-img-4-mob" class="mob-img-1" width="236px" height="286px"></img>
                    </div> 
                    <h1>Scaling <br></br>Adjustments</h1>
                    <p>Cropping and ratio adjustments to fit any digital catalog or e-commerce marketplace requirements. </p>
                  </div>  
                  <div className="ep-box">
                    <div className="ep-img">
                       <img src={ep_img_5} alt="eCommerce-Product-img-5" class="desktop-img-1"width="296px" height="359px"></img>
                       <img src={ep_img_5_mob} alt="eCommerce-Product-img-5-mob" class="mob-img-1" width="236px" height="286px"></img>
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
        
          <div className="category-slider-sec testimonials-sec ecommerce-testi">
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
                   
                    <Testimonials locationKey={locationKey} TestimonialData={TestimonialData} />
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
                   
                  <Sucslider locationKey={locationKey} SuccessStoryData={SuccessStoryData} />
                  </div>
              </div>
             </div>  
           </div>
            
           <GetStart dataKey={dataKey} />

        </div>  
        </div>
        </div>  
      <Footer />
    </>
  )
}

export default For
