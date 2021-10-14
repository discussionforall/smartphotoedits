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
import GetStart from "../components/getStart"

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
        <GetStart pageKeyword="Start Your Project Today" />
      </div>
      <Footer />
    </>
  )
}

export default ThankYou
