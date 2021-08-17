import React from "react"
import foot_logo from "../images/footer-logo.png"
import left_footer_icon from "../images/left-footer-icon.png"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faLinkedinIn,faInstagram} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'
library.add(
 faLinkedinIn,
  faFacebook,
  faTwitter,
  faInstagram
);


const Footer = () => {
  return <div>
     <div className="footer-sec">
       <div className="container">
         <div className="row">
           <div className="footer-about">
              <div className="foot-logo">
                 <img src={foot_logo}></img>
              </div>
              <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
              <div className="input-box">
                <input type="text" placeholder="Enter Email Address"></input>
                 <img src={left_footer_icon}></img>
                </div>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut </p>
           </div>
           <div className="footer-menu">
             <h2>Quick Links</h2>
             <div className="ft-menu">
                <a href="#">Home</a>   
                <a href="#">   Privacy Policy</a>
                <a href="#">   About Us</a>
                <a href="#">  Case studies</a>
             </div>
           </div>
           <div className="footer-menu">
           <h2>Contact Us</h2>
             <div className="ft-email">
                <h6>Email</h6>
                <p>photo@edits.com</p>
             </div>
           </div>
           <div className="footer-menu">
           <h2 className="unvisible">Contact Us</h2>
             <div className="ft-email">
                <h6>Address</h6>
                <p>Dodda Banaswadi Main Rd, 
                  Lakshmamma Layout, 
                  Dodda Banaswadi, 
                  Bengaluru, Karnataka 560043</p>
             </div>
           </div>
        
         </div>

         <div className="footer-rights">
           <div className="row">
             <div className="col-md-5 col-6">
               <p>© 2021. Smart Photo Edits Copyright</p>
             </div>
             <div className="col-md-5 col-6">
               <div className="menu2-footer">
                 <a href="#">Sitemap</a> 
                 <a href="#">Privacy</a>
                 <a href="#">Cookie Settings</a>
               </div>
             </div>
             <div className="col-md-2 col-12">
               <div className="social-icon">
                 <a href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} fixedWidth />
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faTwitter} fixedWidth />
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faFacebook} fixedWidth /> 
                  </a>
                  <a href="#">
                  <FontAwesomeIcon icon={faInstagram} fixedWidth />
                  </a>
               </div>  
             </div>
           </div>
         </div>
       </div>
     </div>
  </div>
 
}

export default Footer
