import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import location_icon from "../images/location-icon.webp"
import phone_icon from "../images/phone-icon.webp"
import email_icon from "../images/email-icon.webp"
import { useForm } from "react-hook-form"
import axios from "axios"
import { commonConfig } from "../commonConfig/config"
import GoogleMapCode from "../components/googleMapCode"
import AddressSection from "../components/addressSection"

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

          <AddressSection/>
        </div>

        <GoogleMapCode/>
        
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
