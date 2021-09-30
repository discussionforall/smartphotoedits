import React,{ useState,useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import after_slide_1 from '../images/after-slide-1.png';

const Portfolio = ({ location }) => {

  const [tabIndex, setTabIndex] = useState(0);

  useEffect(()=>{
      let params = new URLSearchParams(location.search);
      let tab = params.get('tab');
      if(tab !== null && tab !== undefined && tab !== ""){
        setTabIndex(Number(tab));
      }
  },[])
  
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

              <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <div className="container">
                  <TabList>
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
                  </TabPanel>
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
                  </div>
              </Tabs>
              
            

           </div>
      </div>
      <Footer />
    </>
  )
}

export default Portfolio
