import React, { useEffect, useState } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import after_slide_1 from '../images/after-slide-1.png';

const portfolio = () => {

  const FIRST_IMAGE = {
    id: 1,
    imageUrl: after_slide_1
  };
  const SECOND_IMAGE = {
    id: 2,
    imageUrl: after_slide_1
  };

  

return (
 
    <>
    
      <Header color={'#f4fbf8'}/>
  
      <div className="white-back portfollio-main">
          <div className = "portfollio-sec">
              <div className="container">
                <div class="cat-slider-text">
                    <h2>Our Portfolio</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim</p>
                </div>
              </div>
          </div>

           <div className="portfollio-tab">

              <Tabs>
                <div className="container">
                  <TabList>
                    <Tab>All</Tab>
                    <Tab>REAL ESTATE</Tab>
                    <Tab>PORTRAIT</Tab>
                    <Tab>FASHION</Tab>
                    <Tab>JEWELERY</Tab>
                    <Tab>PRODUCT</Tab>
                  </TabList>
                </div>

                <div className="container tab-slider">
                  <TabPanel>
                    <div className="after-slider">
                   <ReactBeforeSliderComponent
                    
                      firstImage={FIRST_IMAGE}
                      secondImage={SECOND_IMAGE}
                    />
                     <div className="after-slider-text">
                        <div className="left-after-text">
                            <h1>Real Estate House <br></br> Photoshooting Image Edit</h1>
                            <h1>2021</h1>
                        </div>
                        
                     </div>
                    </div>
                    <div className="after-slider">
                   <ReactBeforeSliderComponent
                    
                      firstImage={FIRST_IMAGE}
                      secondImage={SECOND_IMAGE}
                    />
                     <div className="after-slider-text">
                        <div className="left-after-text">
                            <h1>Real Estate House <br></br> Photoshooting Image Edit</h1>
                            <h1>2021</h1>
                        </div>
                        
                     </div>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 4</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 5</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 6</h2>
                  </TabPanel>
                  </div>
              </Tabs>
              
            

           </div>
      </div>
      <Footer />
    </>
  )
}

export default portfolio
