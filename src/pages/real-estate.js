import React, { useState, useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import real_estate_banner from "../images/real-estate-banner.webp"
import Testimonials from "../components/Testimonials"
import Sucslider from "../components/success_slider.js"
import real_estate_icon_1 from "../images/icon-slider1.webp"
import real_estate_icon_2 from "../images/product-icon-2.webp"
import real_estate_icon_3 from "../images/product-icon-3.webp"
import real_estate_icon_4 from "../images/product-icon-4.webp"
import real_estate_banner_2 from "../images/real-estate-banner-2.webp"
import re_img from "../images/re-img.webp"
import re_img_1 from "../images/re-img-1.webp"
import re_img_2 from "../images/re-img-2.webp"
import re_img_3 from "../images/re-img-3.webp"
import re_img_4 from "../images/re-img-4.webp"
import re_img_5 from "../images/re-img-5.webp"
import re_img_6 from "../images/re-img-6.webp"
import re_img_7 from "../images/re-img-7.webp"
import re_img_mob from "../images/re-img-mob.webp"
import re_img_1_mob from "../images/re-img-1-mob.webp"
import re_img_2_mob from "../images/re-img-2-mob.webp"
import re_img_3_mob from "../images/re-img-3-mob.webp"
import re_img_4_mob from "../images/re-img-4-mob.webp"
import re_img_5_mob from "../images/re-img-5-mob.webp"
import re_img_6_mob from "../images/re-img-6-mob.webp"
import re_img_7_mob from "../images/re-img-7-mob.webp"
import real_estate_banner_mob from "../images/real-estate-banner-mob.webp"
import real_estate_banner_2_mob from "../images/real-estate-banner-2-mob.webp"
import { Link } from "gatsby"
import GetStart from "../components/getStart"
import { SuccessStoryData } from "../data/realestateSuccessStoryData"
import { TestimonialData } from "../data/realestateTestimonialData"
import setKey, {FirstCapital} from "../utils/setKey"

const Realestate = ({ location }) => {
  var Real_Estate_keyword = "Real Estate Image Editing Services"

  const [dataKey, setDataKey] = useState("")
  const [locationKey, setLocationKey] = useState("")

  useEffect(async () => {
    let data = await setKey(
      location,
      "utm_term_real_estate",
      Real_Estate_keyword
    )
    if (data.length > 0) {
      setDataKey(data[0])
      setLocationKey(data[1])
    }
    return () => {
      data = null
    }
  }, [])

  return (
    <>
      <Header
        metaTitle="Outsource Real Estate Photo Editing Services to SPE"
        metaDescription="Make your property listings stand out in a competitive market by partnering with Smart Photo Edits, a top real estate photo editing outsourcing partner
"
      />
      <div className="home-sec">
        <div className="zindex-div">
          <div className="product-sec">
            <div className="ps-first">
              <div className="container">
                <div className="home-first-sec">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="text-box">
                        <h1>
                          {dataKey && dataKey ? FirstCapital(dataKey): Real_Estate_keyword}
                        </h1>

                        <p>
                          Make your property listings stand out in a competitive
                          market by partnering with Smart Photo Edits, for{" "}
                          {dataKey && dataKey ? dataKey : Real_Estate_keyword}.
                          The leading real estate photo editing outsourcing
                          partner!
                        </p>

                        <div className="btn-home-sec">
                          <Link to="/contact" className="get-started">
                            Get started
                          </Link>
                          <Link to="/portfolio?tab=0" className="see-port">
                            see portfolio{" "}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="homeimg-box">
                        <img
                          src={real_estate_banner}
                          alt="real-estate-banner-img"
                          className="img-1 desktop-img-1"
                          width="488px"
                          height="578px"
                        ></img>
                        <img
                          src={real_estate_banner_mob}
                          alt="real-estate-banner-img-mob"
                          className="mob-img-1"
                          width="244px"
                          height="289px"
                        ></img>
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
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            <img
                              src={real_estate_icon_1}
                              alt="real-estate-icon-1"
                              width="48px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>Leading</h1>
                          <p>
                            Leading real estate photo editing outsourcing
                            partner{" "}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            <img
                              src={real_estate_icon_2}
                              alt="real-estate-icon-2"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>Partner</h1>
                          <p>
                            We???ve worked with real estate agents, developers,
                            builders, and photographers
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-1">
                            <img
                              src={real_estate_icon_3}
                              alt="real-estate-icon-3"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>Detail-Oriented</h1>
                          <p>
                            SPE are highly detail-oriented and meticulous in
                            their approach
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6 col-6">
                        <div className="back-color-slider-box">
                          <div className="icon-sec-slider color-2">
                            <img
                              src={real_estate_icon_4}
                              alt="real-estate-icon-4"
                              width="41px"
                              height="37px"
                            ></img>
                          </div>
                          <h1>Potential</h1>
                          <p>
                            Real estate photos they edit have the potential to
                            appeal to property buyers
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 col-lg-6 our-mission">
                    <div className="cat-slider-text">
                      <h4>PERFECTION</h4>
                      <h2>
                        Looking for{" "}
                        {dataKey && dataKey
                          ? FirstCapital(dataKey)
                          : Real_Estate_keyword}
                        ?
                      </h2>
                      <p>
                        {" "}
                        Smart Photo Edits (SPE) is a leading real estate photo
                        editing outsourcing partner for businesses in{" "}
                        {locationKey && locationKey
                          ? locationKey
                          : "United States"}
                        .
                      </p>
                      <p>
                        {" "}
                        We???ve worked with real estate agents, developers,
                        builders, and photographers to improve their property
                        listings online. All real estate photo editing services
                        teams at SPE are highly detail-oriented and meticulous
                        in their approach, so if you're looking for
                        {dataKey && dataKey ? dataKey : Real_Estate_keyword}, we
                        are the ideal partner for you.
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
                    <p>
                      We???ve invested in the latest photography-related
                      technological tools, to ensure that the real estate photos
                      they edit have the potential to appeal to property buyers.
                    </p>
                    <p>
                      {" "}
                      Our teams can handle large volumes of image editing in a
                      short time. We also have flexible pricing plans to suit
                      any budget ??? so you can rest assured your search for{" "}
                      {dataKey && dataKey
                        ? dataKey
                        : Real_Estate_keyword} in{" "}
                      {locationKey && locationKey
                        ? locationKey
                        : "United States"}{" "}
                      will end with a successful partnership with us.
                    </p>
                  </div>
                  <div className="col-md-6">
                    <div className="img-box-about">
                      <img
                        src={real_estate_banner_2}
                        alt="real-estate-banner-2"
                        className="desktop-img-1"
                        width="490px"
                        height="417px"
                      ></img>
                      <img
                        src={real_estate_banner_2_mob}
                        alt="real-estate-banner-2-mob"
                        className="mob-img-1"
                        width="333px"
                        height="250px"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ep-sec re-sec">
              <div className="container">
                <div className="cat-slider-text">
                  <h4>ECOMMERCE SERVICES</h4>
                  <h2>
                    Real Estate Photo <br></br> Editing Services by SPE
                  </h2>
                  <p>
                    SPE???s real-estate photo editing services are designed to
                    deliver high-quality property images for more leads and
                    better sales
                  </p>
                </div>
                <div className="row">
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img}
                        alt="real-estate-Product-img"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_mob}
                        alt="real-estate-img-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>Real Estate Photo Enhancements</h1>
                    <p>
                      Retouch and enhance property images so they stand out and
                      sell.{" "}
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_1}
                        alt="real-estate-img-1"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_1_mob}
                        alt="real-estate-img-1-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      Real Estate <br></br>Photo Correction
                    </h1>
                    <p>
                      Correct minor blemishes in real estate photos so they are
                      not distracting.{" "}
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_2}
                        alt="real-estate-img-2"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_2_mob}
                        alt="real-estate-img-2-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      Real Estate HDR <br></br>Blending & Corrections
                    </h1>
                    <p>
                      Enhance property listings with HDR images that emphasize
                      all the details
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_3}
                        alt="real-estate-img-3"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_3_mob}
                        alt="real-estate-img-3-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>Real Estate Perspective Corrections</h1>
                    <p>
                      Correct distortions and misalignments in real estate
                      photos to create a natural look.
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_4}
                        alt="real-estate-img-4"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_4_mob}
                        alt="real-estate-img-4-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      Real Estate Blurry <br></br>Image Corrections
                    </h1>
                    <p>
                      Sharpen blurred images to create a crisp and clear
                      property photo
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_5}
                        alt="real-estate-img-5"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_5_mob}
                        alt="real-estate-img-5-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      Property Sky <br></br> Replacement
                    </h1>
                    <p>
                      Replace the sky behind a property photo to create a
                      specific mood.
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_6}
                        alt="real-estate-img-6"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_6_mob}
                        alt="real-estate-img-6-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      360-Degree <br></br> Virtual Property Tours
                    </h1>
                    <p>
                      Provide a convenient way for buyers to pre-screen houses
                      from the comfort of their homes.
                    </p>
                  </div>
                  <div className="ep-box">
                    <div className="ep-img">
                      <img
                        src={re_img_7}
                        alt="real-estate-img-7"
                        className="desktop-img-1"
                        width="296px"
                        height="359px"
                      ></img>
                      <img
                        src={re_img_7_mob}
                        alt="real-estate-img-7-mob"
                        className="mob-img-1"
                        width="236px"
                        height="286px"
                      ></img>
                    </div>
                    <h1>
                      Real Estate Drone<br></br> Image Editing
                    </h1>
                    <p>
                      Convert shaky, unstable footage into breathtaking property
                      images
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="how-sec">
              <div className="container">
                <h2>How it Works</h2>
                <p>
                  A speedy, secure editing process created for a high-quality
                  quick turnaround on <br></br>
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
                      <p>
                        Don???t just take our word for it. Discover what our
                        customers have to say about us.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
              <div className="main-slider">
                <div className="container cate-slider">
                  <Testimonials
                    locationKey={locationKey}
                    TestimonialData={TestimonialData}
                  />
                </div>
              </div>
            </div>

            <div className="Success-sec">
              <div className="container">
                <div className="cat-slider-text">
                  <h4>Success</h4>
                  <h3>Success Stories</h3>
                  <p>
                    Delivering true value to every customer. Find out how we do
                    it.
                  </p>
                </div>

                <div className="main-slider">
                  <div className="container cate-slider">
                    <Sucslider
                      locationKey={locationKey}
                      SuccessStoryData={SuccessStoryData}
                    />
                  </div>
                </div>
              </div>
            </div>

            <GetStart dataKey={FirstCapital(dataKey)} pageKeyword={Real_Estate_keyword} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Realestate
