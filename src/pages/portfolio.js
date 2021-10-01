import React,{ useState,useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import after_slide_1 from '../images/after-slide-1.png';

const Portfolio = ({ location }) => {

  const [tabIndex, setTabIndex] = useState(1);

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
                    <div className="load-more-button">
                       <button>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
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
                    <div className="load-more-button">
                       <button>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
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
                    <div className="load-more-button">
                       <button>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
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
                    <div className="load-more-button">
                       <button>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
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
                    <div className="load-more-button">
                       <button>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
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
