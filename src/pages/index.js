import React,{ useState,useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Category_Slider from "../components/Category_Slider"
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import img1 from '../images/1st.webp'
import logo_1 from '../images/logo-1.webp'
import logo_2 from '../images/logo-2.webp'
import logo_3 from '../images/logo-3.webp'
import logo_4 from '../images/logo-4.webp'
import img_back_2 from '../images/img-back-2.webp'
import img_back_mob_2 from '../images/img-back-mob-2.webp'
import howitwork_img from '../images/how-is-img.webp'
import { Link } from "gatsby"
import GetStart from "../components/getStart"
import { SuccessStoryData } from "../data/successStoryData";
import { TestimonialData } from "../data/testimonialData";
import setKey from "../utils/setKey"

const IndexPage = ({ location }) => {
  
  const [dataKey,setDataKey]=useState('');
  const [locationKey,setLocationKey]=useState('');

  useEffect(async()=>{    
      let data = await setKey(location,"utm_term","Image Editing & Retouching Services")
      if(data.length > 0){
        setDataKey(data[0]);
        setLocationKey(data[1]);
      }
      
      return () => {
      data = null;
      }
  },[])
  
  
  return (
    <>

      <Header metaTitle="Photo Editing Services" metaDescription="SPE is the leading outsourcing provider of photo editing services for businesses in the real estate, fashion, and e-commerce industries, among others.">
        <link rel="prefetch" href="https://ipv4.icanhazip.com"/>
      </Header>
    
      <div className="home-sec">
        <div className="zindex-div">
          <div className="container">
          <div className="home-first-sec">
              <div className="row">
                <div className="col-lg-6">
                   <div className="text-box"> 
                     <h1>Looking for {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}?</h1>
                  
                     <p>
                      Since 2006, Smart Photo Editors (SPE) has been a preferred partner for photographers, 
                      photo studios, and businesses from {locationKey&&locationKey?locationKey:'United States'}.
                      We are the {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'} professionals and 
                      we have built a team of photo editing superstars to provide high-quality,
                      and cost-effective outsourcing options.
                      </p>
                     
                     <p>We do this by offering flexible engagement plans including one-time assignments,
                        hourly projects, and FTE models. To those looking for {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'} 
                        to discover how SPE can give your business a competitive edge, contact us today.</p>

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
                  <img src={img1} className="img-1" width="488px" height="578px" alt="banner-img"></img>               
                  </div>
                </div>
              </div>
          </div>  
        </div>
        <div className="container">
        <div className="logo-sec">
            <div className="logo-box">
              <img src={logo_1} alt="logo-img-1" width="202px" height="41px"></img>
            </div>
            <div className="logo-box">
              <img src={logo_2} alt="logo-img-2" width="202px" height="41px"></img>
            </div>
            <div className="logo-box">
              <img src={logo_3} alt="logo-img-3" width="202px" height="41px"></img>
            </div>
            <div className="logo-box">
              <img src={logo_4} alt="logo-img-4" width="202px" height="41px"></img>
            </div>
          </div> 
       </div>
        <div className="category-slider-sec">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-9 col-md-12">
                          <div className="cat-slider-text">
                            <h4>category</h4>
                            <h2>{dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}</h2>
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
                      <img src={img_back_2} alt="Category-Slider-img" width="644px" height="1748px"></img>
                    </div>
                    <div className="img-back-2 mob-img-back">
                      <img src={img_back_mob_2} alt="Category-Slider-img-mob" width="267px" height="685px"></img>
                    </div>
                    <Category_Slider/>
                  </div>
              </div>
           

            <div className="howitwork-sec">
              <div className="container">
              <div className="row">
                <div className="col-lg-5">
                <div className="img-howit">
                     <img src={howitwork_img} alt="howitwork_img" width="386px" height="538px"></img>
                   </div>
                </div>
                <div className="col-lg-7 p-0">

                   <div className="cat-slider-text">
                      <h4>Process</h4>
                      <h3>How It Works</h3>
                      <p>A speedy, secure editing process created for a high-quality quick turnaround on your requirements. No time wasted!</p>
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
           
           <GetStart dataKey={dataKey} pageKeyword="Image Editing & Retouching Services" />
      </div>
      </div>

      <Footer />
     
    </>
  )
}

export default IndexPage
