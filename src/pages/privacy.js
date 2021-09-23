import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import privacy_icon from "../images/privacy-icon.png"
import privacy_icon_1 from "../images/privacy-icon-1.png"
import privacy_icon_2 from "../images/privacy-icon-2.png"
import privacy_icon_3 from "../images/privacy-icon-3.png"

const Privacy = () => {
      
  return (
    <>
      <Header/>
      <div className="privacy-back">

        <div className="privacy-1">  
            <div className="container">
                <div class="cat-slider-text">
                    <h2>Our Privacy Policy</h2>
                    <p> At Smart Photo Edits we take all the possible measures to protect the privacy of our customers and website
                    visitors. We have designed our services bearing your confidentiality and security in mind</p>
                    <p>All photo and image editing services provided by Smart Photo Edits are 100% compliant with the GDPR and
                    CCPA regulations</p>
                </div>

                <div className="privacy-icon-box">
                    <div className="pi-box-main">
                        <div class="back-color-slider-box">
                            <div className="bg-privacy-box">
                                    <div class="icon-sec-slider color-1">
                                        <img src={privacy_icon} alt="privacy-icon" width="38px" height="37px"></img>
                                    </div>
                                    <h1>How We Deal With Your Personal Information</h1>
                                    <a href="#">Jump to this section </a>
                            </div>        
                        </div>
                        <div class="back-color-slider-box">
                            <div className="bg-privacy-box">
                                    <div class="icon-sec-slider color-1">
                                        <img src={privacy_icon_1} alt="privacy-icon-1" width="38px" height="37px"></img>
                                    </div>
                                    <h1>How We Use Your Data to Serve You Better</h1>
                                    <a href="#">Jump to this section </a>
                            </div>        
                        </div>
                        <div class="back-color-slider-box">
                            <div className="bg-privacy-box">
                                    <div class="icon-sec-slider color-1">
                                        <img src={privacy_icon_2} alt="privacy-icon-2" width="38px" height="37px"></img>
                                    </div>
                                    <h1>Links to <br></br> External Websites</h1>
                                    <a href="#">Jump to this section </a>
                            </div>        
                        </div>
                        <div class="back-color-slider-box">
                            <div className="bg-privacy-box">    
                                    <div class="icon-sec-slider color-1">
                                        <img src={privacy_icon_3} alt="privacy-icon-3" width="28px" height="37px"></img>
                                    </div>
                                    <h1>GDRP and <br></br> CCPA Compliance</h1>
                                    <a href="#">Jump to this section </a>
                            </div>        
                        </div>
                    </div>
                </div>
            </div>
        </div> 


        <div className="privacy-2">  
            <div className="container">
                <div class="cat-slider-text">
                    <h2>How We Deal With <br></br> Your Personal Information</h2>
                    <ul>
                        <li>Any information that you provide to Smart Photo Edits via our website through any forms are always stored using
                            the latest security protocols</li>
                        <li>Your name, email id, address, and phone number are only used by us to communicate with you about our
                            company and its products or services. We will NEVER share your data with a third party – whether for selling,
                            leasing, or any other form of distribution.</li>
                        <li> We always use the latest technology to prevent any unauthorized access or use of your personal data. </li>
                        <li>We may at times share your information with our business partners, authorized vendors or affiliates to provide you
                            with an optimum service and information.</li>
                    </ul>
                </div>
            </div>
        </div> 

        <div className="privacy-2 privacy-3">  
            <div className="container">
                <div class="cat-slider-text">
                    <h2>How We Use Your <br></br> Data to Serve You Better</h2>
                    <ul>
                        <li>Our website uses cookies to deliver a more personalized experience to you.</li>
                        <li>Information that is captured using cookies is analyzed to allow us to improve your web experience</li>
                        <li>We do not get any remote access to your computer or mobile devices via cookies, nor do they grant us access to
                        any of your confidential data. </li>
                        <li>We will never make any customer-centric data or information about your location public. </li>
                        <li>The storage of cookies is restricted to the browser you use or the system memory. You can disable them in your
                            browser’s settings. However, by turning off cookies, you will limit yourself from receiving the full personalized
                            experience that our website is designed for</li>
                        <li>To learn more about cookies and how they work, please visit <a href="#">www.allaboutcookies.org</a> </li>
                    </ul>
                </div>
            </div>
        </div>  

          <div className="privacy-4">  
            <div className="container">
                <div class="cat-slider-text">
                    <h2>Links to External Websites</h2>
                    <p>Any links on our website that lead to third-party websites are provided solely for your convenience. They
                        should be accessed at your own risk. Smart Photo Edits will not be responsible for your privacy and security
                        on any of these external websites</p>
                </div>
            </div>
          </div>  

          <div className="privacy-2 privacy-3 privacy-5">  
            <div className="container">
                <div class="cat-slider-text">
                    <h2>GDRP and CCPA Compliance</h2>
                    <ul>
                        <li>All personal or business identification details provided by you on our website (e.g. your name, email, phone
                            number, location, etc.) are all securely stored by us in adherence to the GDRP and CCPA requirements</li>
                        <li>We only use this information for communication with clients and potential customers.</li>
                        <li>We do not retain any of your personal information for any longer than is necessary. The only exception to this is if
                            a law or regulation requires us to maintain your data for longer. </li>
                        <li>You can request copies of your personal information or information related to our data storage policies at any time
                            by contacting us.</li>
                    </ul>
                </div>
            </div>
        </div> 

        <div class="start-sec privacy-6">
            <div class="container">
                <div class="row  align-items-center">
                    <div class="col-md-12 col-lg-8">
                        <div class="start-text">
                            <h1>Contact Us</h1>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-4">
                        <div class="start-btn">
                            <button>Contact</button>
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

export default Privacy
