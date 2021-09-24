import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import fashion_1 from '../images/fashion-1.webp'
import fashion_1_mob from '../images/fashion-1-mob.webp'
import Testimonials from "../components/Testimonials"
import Fashion_Slider from "../components/Fashion_Slider"
import Sucslider from "../components/success_slider.js"
import fashion_icon_1 from "../images/fashion-icon-1.webp";
import fashion_icon_2 from "../images/fashion-icon-2.webp";
import fashion_icon_3 from "../images/fashion-icon-3.webp";
import fashion_icon_4 from "../images/fashion-icon-4.webp";
import fashion_2 from "../images/fashion-2.webp"
import fashion_2_mob from '../images/fashion-2-mob.webp'
import fashion_slider_1_mob from "../images/fashion-slider-1-mob.webp";
import fashion_slider_2_mob from "../images/fashion-slider-2-mob.webp";
import fashion_slider_3_mob from "../images/fashion-slider-3-mob.webp";
import fashion_slider_4_mob from "../images/fashion-slider-4-mob.webp";
import fashion_slider_5_mob from "../images/fashion-slider-5-mob.webp";
import fashion_slider_6_mob from "../images/fashion-slider-6-mob.webp";
import fashion_slider_7_mob from "../images/fashion-slider-7-mob.webp";
import { Link } from "gatsby"
import GetStart from "../components/getStart"
import axios from "axios"
import { SuccessStoryData } from "../data/fashionSuccessStoryData";
import { TestimonialData } from "../data/fashionTestimonialData";
const publicIp = require('public-ip')

const Fashion = ({ location }) => {

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
    let utm_term = params.get('utm_term');
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
        // console.log(parseQuery(location.search).utm_term)
        setLocationKey(localStorage.getItem("location") !==null?localStorage.getItem("location"):'United States' )
       
      })
      .catch(function (error) {
        console.log(error);
      });

      if(location.search !==''&&parseQuery(location.search).utm_term){
         
        if(localStorage.getItem("utm_term")!==''){
            localStorage.setItem("utm_term",utm_term);
           
        }else{
            localStorage.setItem("utm_term","Image Editing & Retouching Services");
            
        }
    }
    setDataKey(location.search !==''? localStorage.getItem("utm_term")  !==null? localStorage.getItem("utm_term"):utm_term:localStorage.getItem("utm_term")!==null?localStorage.getItem("utm_term"):'Image Editing & Retouching Services' )
      
    })();    

  },[])

  return (
    <>
      <Header metaTitle="Outsource Fashion & Portrait Photo Editing Services to SPE" metaDescription="Smart Photo Edits is a leading provider of fashion and portrait photo editing services, 
      offering customized outsourcing services at affordable prices"/>
      
<div className="product-sec fashion-sec">
	<div className="ps-first">
		<div className="container">
			<div className="home-first-sec">
				<div className="row">
					<div className="col-lg-6">
						<div className="text-box">
							<h1>{dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}</h1>
							<p>Smart Photo Edits is a leading provider of {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}, offering customized outsourcing services at affordable prices</p>
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
                        <img src={fashion_1} alt="fashion-banner-img" className="img-1 desktop-img-1" width="488px" height="578px"></img>
                        <img src={fashion_1_mob} alt="fashion-banner-img-mob" className="mob-img-1" width="244px" height="289px"></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="about-3-sec">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-12 right-len">
					<div className="row row-2">
						<div className="col-md-6 col-lg-3 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-1"> <img src={fashion_icon_1} alt="fashion-icon-img-1" width="41px" height="37px"></img>
								</div>
								<h1>Leading</h1>
								<p>Leading outsourcing partner of top fashion and portrait photographers</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-2"> <img src={fashion_icon_2} alt="fashion-icon-img-2" width="41px" height="37px"></img>
								</div>
								<h1>Stand Out</h1>
								<p>Focuses on the subject of each photograph to make it stand out</p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-1"> <img src={fashion_icon_3} alt="fashion-icon-img-3" width="41px" height="37px"></img>
								</div>
								<h1>Handle</h1>
								<p>Able to handle a large volume of fashion and portrait photo editing </p>
							</div>
						</div>
						<div className="col-md-6 col-lg-3 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-2"> <img src={fashion_icon_4} alt="fashion-icon-img-4" width="41px" height="37px"></img>
								</div>
								<h1>Pricing Plans</h1>
								<p>Flexible pricing plans include ad-hoc assignments</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 col-lg-12 our-mission">
                    <div className="row  align-items-center">
                        <div className="col-md-12 col-lg-6">
                            <div class="cat-slider-text">
                                <h4>PERFECTION</h4>
                                <h2>Looking for {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}</h2>
                                <p>Smart Photo Edits (SPE) is a leading outsourcing partner of top fashion and portrait photographers as well as photo studios from {locationKey&&locationKey?locationKey:'United States'}. We’ve worked with
                                    photographers, fashion magazines, portrait photo studios, and clothing brands for their photo editing requirements. If you're looking for {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}, we are
                                    your perfect partner. 
                                </p>
                                <p> Smart Photo Edits focuses on the subject of each
                                    photograph to make it stand out. To make this happen, we’ve invested in the latest photo editing tools and hired experts. We’re able to handle a large volume of fashion
                                    and portrait photo editing with a quick turnaround.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-6">
                            <div className="img-box-about">
                                <img src={fashion_2} alt="fashion-img-2" class="desktop-img-1" width="604px" height="449px"></img> 
                                <img src={fashion_2_mob} alt="fashion-img-2-mob" class="mob-img-1" width="333px" height="250px"></img>
                                
                            </div>
                        </div>
                    </div>    
				</div>
			</div>
		</div>
	</div>
	<div className="abot-2-sec secound-ab">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-12 col-lg-6">
					<h1>Flexible pricing plans</h1>
				</div>
				<div className="col-md-12 col-lg-6">
                    <p>Our flexible pricing plans include ad-hoc assignments, hourly services, and FTE models. Collaborate with SPE
                        and end your search for {dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}. </p>
				</div>
			</div>
		</div>
	</div>
	
	<div className="fashion-slider">
      
            <div class="cat-slider-text">
                <h4>ECOMMERCE SERVICES</h4>
                <h2>Portrait & Fashion <br></br> Photo Editing Services</h2>
                <p>SPE offers a comprehensive range of portrait and fashion photo editing services for adding
                    glamour and beauty to your photographs.
                </p>
            </div>
            <div className="slider-sh">
                <Fashion_Slider/>
            </div>

			<div className="fh-slider-mob">
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_4_mob} alt="fashion-slider-4-img-mob" width="376px" height="378px"></img>
						<div class="fh-text">
							<h2>Skin Retouching & Airbrushing</h2>
							<p>Advanced skin retouching and airbrushing to enhance the subject of the photo.</p>
						</div>
					</div>
				</div>
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_5_mob} alt="fashion-slider-5-img-mob" width="376px" height="378px"></img>
						<div class="fh-text">
							<h2>Color Correction</h2>
							<p>Fix common coloration issues like dull colors to enrich the subject.</p>
						</div>
					</div>
				</div>
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_1_mob} alt="fashion-slider-1-img-mob" width="376px" height="378px"></img>
						<div class="fh-text">
							<h2>Lighting and Shading</h2>
							<p>Fix common lighting and shading imbalances to make the subject more appealing.</p>
						</div>
					</div>
				</div>
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_2_mob} alt="fashion-slider-2-img-mob" width="376px" height="378px"></img>
						<div className="fh-text">        
                        	<h2>Skin Retouching & Airbrushing</h2>
                        	<p>Advanced skin retouching and airbrushing to
                        	enhance the subject of the photo.</p>
                       </div>
					</div>
				</div>
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_3_mob} alt="fashion-slider-3-img-mob" width="376px" height="378px"></img>
						<div className="fh-text">
                            <h2>Contrast and Saturation</h2>
                            <p>Proper contrast and saturation balancing enhance
                            high-resolution photos.</p>
                        </div> 
					</div>
				</div>
				
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_6_mob} alt="fashion-slider-6-img-mob" width="376px" height="378px"></img>
						<div className="fh-text">
                            <h2>Custom Color Tone</h2>
                            <p>Create customized color tones that draw attention to the subject.</p>
                        </div> 
					</div>
				</div>
				<div className="fh-slider-box">
					<div className="fh-slider-mob-img">
						<img src={fashion_slider_7_mob} alt="fashion-slider-7-img-mob" width="376px" height="378px"></img>
						<div className="fh-text">
                            <h2>Background Removal</h2>
                            <p>Remove distracting backgrounds so that full attention is given to the subject.</p>
                        </div> 
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
				<Sucslider locationKey={locationKey} SuccessStoryData={SuccessStoryData} /> </div>
			</div>
		</div>
	</div>
	<GetStart dataKey={dataKey} />
</div>
      <Footer />
    </>
  )
}

export default Fashion
