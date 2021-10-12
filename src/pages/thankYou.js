import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import location_icon from "../images/location-icon.webp"
import phone_icon from "../images/phone-icon.webp"
import email_icon from "../images/email-icon.webp"
import { useForm } from "react-hook-form"
import axios from "axios"
import { commonConfig } from "../commonConfig/config"
const ThankYou = () => {
  return (
    <>
      <Header color={"#f4fbf8"} />

      <div className="white-back">
        <div className="container">
          <div className="contact-sec">
            {/* <h1>
              Contact Us and <br></br> Get a Free Quote
            </h1> */}
          </div>
          <br />
          <br />
          <br />
          <div
            className="form-box"
            style={{ textAlign: "center", paddingBottom: "50px !important" }}
          >
            Thank you for contacting SmartPhotoEdits. Our Business Development
            Executive
            <br />{" "}
            <span style={{ textDecoration: "uppercase" }}>
              <strong>Mr. Amaresh Erappa</strong>
            </span>{" "}
            will contact you in 1 business day.
          </div>

          <div className="address-sec">
            <div className="address-row">
              <div className="address-text">
                <div className="address-bg">
                  <div className="text-add">
                    <div className="img-add">
                      <img src={location_icon}></img>
                    </div>
                    <h2>OFFICE LOCATION</h2>
                    <p>
                      Dodda Banaswadi Main Rd, Lakshmamma Layout, Dodda
                      Banaswadi, Bengaluru, Karnataka 560043
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Dodda+Banaswadi+Main+Rd,+Bengaluru,+Karnataka/@13.0084742,77.6400735,17z/data=!3m1!4b1!4m8!1m2!2m1!1shttps:%2F%2Fwww.google.com%2Fmaps%2Fplace%2FDodda%2BBanaswadi%2BMain%2BRd,%2BLakshmamma%2BLayout,%2BBanaswadi,%2BBengaluru,%2BKarnataka%2F@13.014965,77.6532301,17z%2Fdata%3D*213m1*214b1*214m5*213m4*211s0x3bae16e81befbe45:0x4ebce86830dab029*218m2*213d13.0149598*214d77.6554241!3m4!1s0x3bae16e81befbe45:0x4ebce86830dab029!8m2!3d13.008469!4d77.6422675"
                    target="_blank"
                  >
                    See on map
                  </a>
                </div>
              </div>

              <div className="address-text">
                <div className="address-bg">
                  <div className="text-add">
                    <div className="img-add">
                      <img src={phone_icon}></img>
                    </div>
                    <h2>OFFICE PHONE</h2>
                    <p>Call us 24/7</p>
                    <h3>+00 80 555 777</h3>
                  </div>
                  <a href="tel:+00 80 555 777">Call Us Now</a>
                </div>
              </div>

              <div className="address-text">
                <div className="address-bg">
                  <div className="text-add">
                    <div className="img-add">
                      <img src={email_icon}></img>
                    </div>
                    <h2>OFFICE EMAIL</h2>
                    <p>Call us 24/7</p>
                    <h3>info@smartphotoedits.com</h3>
                  </div>
                  <a href="mailto:info@smartphotoedits.com">Email Us Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="google-map-code">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7774.705865095975!2d77.66230558151554!3d13.01318260316813!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1632396370426!5m2!1sen!2sin"
            width="100%"
            height="600"
            frameborder="0"
            style={{ border: 0 }}
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>

        <div class="start-sec privacy-6">
          <div class="container">
            <div class="row  align-items-center">
              <div class="col-md-12 col-lg-8">
                <div class="start-text">
                  <h1>Start Your Project Today </h1>
                </div>
              </div>
              <div class="col-md-12 col-lg-4">
                <div class="start-btn">
                  <button>START</button>
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

export default ThankYou
