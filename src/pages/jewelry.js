import React,{ useState,useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import jewelry_1 from '../images/jewelry-1.webp'
import jewelry_1_mob from '../images/jewelry-1-mob.webp'
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import jewelry_icon_1 from "../images/jewelry-icon-1.webp";
import jewelry_icon_2 from "../images/jewelry-icon-2.webp";
import jewelry_icon_3 from "../images/jewelry-icon-3.webp";
import jewelry_icon_4 from "../images/jewelry-icon-4.webp";
import jewelry_2 from "../images/jewelry-2.webp"
import jp_img from "../images/jp-img.webp"
import jp_img_1 from "../images/jp-img-1.webp"
import jp_img_2 from "../images/jp-img-2.webp"
import jp_img_3 from "../images/jp-img-3.webp"
import jp_img_4 from "../images/jp-img-4.webp"
import jp_img_5 from "../images/jp-img-5.webp"
import jp_img_mob from "../images/jp-img-mob.webp"
import jp_img_1_mob from "../images/jp-img-1-mob.webp"
import jp_img_2_mob from "../images/jp-img-2-mob.webp"
import jp_img_3_mob from "../images/jp-img-3-mob.webp"
import jp_img_4_mob from "../images/jp-img-4-mob.webp"
import jp_img_5_mob from "../images/jp-img-5-mob.webp"
import jewelry_2_mob from '../images/jewelry-2-mob.webp'

const Jewelry = () => {
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
							<h1>Jewelry & <br></br>Product Photo <br></br> Editing</h1>
							<p>Excite your buyers with eye-catching jewelry images by outsourcing to Smart Photo Edits for the best jewelry photo editing services at an affordable rate </p>
							<div className="btn-home-sec">
								<button className="get-started">Get started</button>
								<button className="see-port">see portfolio</button>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="homeimg-box"> 
                        <img src={jewelry_1} className="img-1 desktop-img-1" width="488px" height="578px"></img>
                        <img src={jewelry_1_mob} className="mob-img-1" width="244px" height="289px"></img>
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
								<div class="icon-sec-slider color-1"> <img src={jewelry_icon_1} width="41px" height="37px"></img>
								</div>
								<h1>Leading</h1>
								<p>Leading provider of jewelry photo editing services to photographers </p>
							</div>
						</div>
						<div className="col-md-6 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-2"> <img src={jewelry_icon_2} width="41px" height="37px"></img>
								</div>
								<h1>Experienced</h1>
								<p>Highly experienced teams and state-of-the-art photo editing tools</p>
							</div>
						</div>
						<div className="col-md-6 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-1"> <img src={jewelry_icon_3} width="41px" height="37px"></img>
								</div>
								<h1>Stand Out</h1>
								<p>Make your gems and jewelry stand out by a mile!</p>
							</div>
						</div>
						<div className="col-md-6 col-6">
							<div class="back-color-slider-box">
								<div class="icon-sec-slider color-2"> <img src={jewelry_icon_4} width="41px" height="37px"></img>
								</div>
								<h1>Partner</h1>
								<p>Quality-first approach is what makes us a trustworthy partner</p>
							</div>
						</div>
					</div>
				</div>
				<div className="col-md-12 col-lg-6 our-mission">
					<div class="cat-slider-text">
						<h4>PERFECTION</h4>
						<h2>Looking for Perfection</h2>
						<p>Smart Photo Edits is a leading provider of jewelry photo editing services to photographers and jewelry brands in LOCATION. </p>
						<p>With highly experienced teams and state-of-the-art photo editing tools, we’re able to deliver editing services that make your gems and jewelry stand out by a mile! Our quality-first approach is what makes us a trustworthy partner – so your hunt for ends with SPE. </p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="abot-2-sec secound-ab">
		<div className="container">
			<div className="row align-items-center">
				<div className="col-md-6">
					<p>Our photo editing experts use a streamlined photo editing process that puts each image through a rigorous quality check. Since we specialize in editing jewelry images, we’re able to deliver a high volume of edited and optimized photos to our customers with a fast turnaround – one of the reasons why our customers love us. </p>
					<p>If you are looking for KEYWORD, feel free to connect with us right away! </p>
				</div>
				<div className="col-md-6">
					<div className="img-box-about">
                        <img src={jewelry_2} class="desktop-img-1" width="604px" height="449px"></img> 
                        <img src={jewelry_2_mob} class="mob-img-1" width="333px" height="250px"></img>
                         
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="ep-sec">
		<div className="container">
			<div class="cat-slider-text">
				<h4>ECOMMERCE SERVICES</h4>
				<h2>Jewelry Photo Editing Services</h2>
				<p>SPE’s jewelry photo editing services are designed to make your gems and jewelry stand out in all their brilliance</p>
			</div>
			<div className="row">
				<div className="ep-box">
					<div className="ep-img"> 
                       <img src={jp_img} class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={jp_img_mob} class="mob-img-1" width="236px" height="286px"></img>
					</div>
					<h1>Photo Retouching</h1>
					<p>Remove unwanted spots and defects using our jewelry photo retouching services.</p>
				</div>
				<div className="ep-box">
					<div className="ep-img"> 
                       <img src={jp_img_1} class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={jp_img_1_mob} class="mob-img-1" width="236px" height="286px"></img>
					</div>
					<h1>Focus Stacking</h1>
					<p>Combine shots from multiple focal points into an amazing stacked jewelry image. </p>
				</div>
				<div className="ep-box">
					<div className="ep-img"> 
                       <img src={jp_img_2} class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={jp_img_2_mob} class="mob-img-1" width="236px" height="286px"></img>
					</div>
					<h1>Shine & Saturation
</h1>
					<p>Metal smoothing and polishing editing that makes jewelry shine</p>
				</div>
				<div className="ep-box">
					<div className="ep-img"> 
                       <img src={jp_img_3} class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={jp_img_3_mob} class="mob-img-1" width="236px" height="286px"></img>
					</div>
					<h1>Scratch & <br></br> Dust Removal</h1>
					<p>Remove ugly scratches or dust from jewelry photos</p>
				</div>
				<div className="ep-box">
					<div className="ep-img"> 
                       <img src={jp_img_4} class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={jp_img_4_mob} class="mob-img-1" width="236px" height="286px"></img>
					</div>
					<h1> Background <br></br> Removal</h1>
					<p>Remove distracting backgrounds and replace them with a more fitting setting.</p>
				</div>
				<div className="ep-box">
					<div className="ep-img"> 
                       <img src={jp_img_5} class="desktop-img-1" width="296px" height="359px"></img>
                       <img src={jp_img_5_mob} class="mob-img-1" width="236px" height="286px"></img>
					</div>
					<h1>Combining <br></br> Images</h1>
					<p>Merge multiple images into a single image that grabs the buyers’ attention.</p>
				</div>
			</div>
		</div>
	</div>
	<div className="how-sec">
		<div className="container">
			<h2>How it Works</h2>
			<p>A speedy, secure editing process created for a high-quality quick turnaround on
				<br></br> your requirements. No time wasted! </p>
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
				<Testimonials/> </div>
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
					<Sucslider/> </div>
			</div>
		</div>
	</div>
	<div className="start-sec">
		<div className="container">
			<div className="row  align-items-center">
				<div className="col-md-12 col-lg-8">
					<div className="start-text">
						<h1>Image Editing & Retouching Services</h1> </div>
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

export default Jewelry