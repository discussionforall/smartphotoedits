import React,{ useState,useEffect } from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import after_slide_1 from '../images/after-slide-1.png';
import { RealEstate, Product, Jewelry, Fashion, Portrait } from "../data/portfolioData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import full_width_slider from '../images/full-width-slider.png';

const Portfolio = ({ location }) => {

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const  next=()=> {
    slider.slickNext();
  }
  const previous=()=> {
    slider.slickPrev();
  }

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

  const [slider, setslider] = useState();

  // State for the list
  const [productList, setProductList] = useState([...Product.slice(0, 3)])
  const [jewelryList, setJewelryList] = useState([...Jewelry.slice(0, 3)])
  const [fashionList, setFashionList] = useState([...Fashion.slice(0, 3)])
  const [realEstateList, setRealEstateList] = useState([...RealEstate.slice(0, 3)])
  const [portraitList, setPortraitList] = useState([...Portrait.slice(0, 3)])
  
  // State to trigger oad more
  const [loadMoreProduct, setLoadMoreProduct] = useState(false)
  const [loadMoreJewelry, setLoadMoreJewelry] = useState(false)
  const [loadMoreFashion, setLoadMoreFashion] = useState(false)
  const [loadMoreRealEstate, setLoadMoreRealEstate] = useState(false)
  const [loadMorePortrait, setLoadMorePortrait] = useState(false)
  
  // State of whether there is more to load
  const [hasMoreProduct, setHasMoreProduct] = useState(Product.length > 4)
  const [hasMoreJewelry, setHasMoreJewelry] = useState(Jewelry.length > 4)
  const [hasMoreFashion, setHasMoreFashion] = useState(Fashion.length > 4)
  const [hasMoreRealEstate, setHasMoreRealEstate] = useState(RealEstate.length > 4)
  const [hasMorePortrait, setHasMorePortrait] = useState(Portrait.length > 4)
  
    // Load more button click
    const handleLoadMore = (tab) => {
      if(tab === "Portrait"){
        setLoadMorePortrait(true)
      }
      if(tab === "Product"){
        setLoadMoreProduct(true)
      }
      if(tab === "Jewelry"){
        setLoadMoreJewelry(true)
      }
      if(tab === "Fashion"){
        setLoadMoreFashion(true)
      }
      if(tab === "RealEstate"){
        setLoadMoreRealEstate(true)
      }
      
    }
    
    // Handle loading more Fashion
    useEffect(() => {
      if (loadMoreFashion && hasMoreFashion) {
        const currentLength = fashionList.length
        const isMore = currentLength < Fashion.length
        const nextResults = isMore
          ? Fashion.slice(currentLength, currentLength + 10)
          : []
        setFashionList([...fashionList, ...nextResults])
        setLoadMoreFashion(false)
      }
    }, [loadMoreFashion, hasMoreFashion]) //eslint-disable-line
    
    //Check if there is more
    useEffect(() => {
      const isMore = fashionList.length < Fashion.length
      setHasMoreFashion(isMore)
    }, [fashionList]) //eslint-disable-line
    
  
    // Handle loading more RealEstate
    useEffect(() => {
      if (loadMoreRealEstate && hasMoreRealEstate) {
        const currentLength = realEstateList.length
        const isMore = currentLength < RealEstate.length
        const nextResults = isMore
          ? RealEstate.slice(currentLength, currentLength + 10)
          : []
        setRealEstateList([...realEstateList, ...nextResults])
        setLoadMoreRealEstate(false)
      }
    }, [loadMoreRealEstate, hasMoreRealEstate]) //eslint-disable-line
    
    //Check if there is more
    useEffect(() => {
      const isMore = realEstateList.length < RealEstate.length
      setHasMoreRealEstate(isMore)
    }, [realEstateList]) //eslint-disable-line
    
  
    // Handle loading more Protrait
    useEffect(() => {
      if (loadMorePortrait && hasMorePortrait) {
        const currentLength = portraitList.length
        const isMore = currentLength < Portrait.length
        const nextResults = isMore
          ? Portrait.slice(currentLength, currentLength + 10)
          : []
        setPortraitList([...portraitList, ...nextResults])
        setLoadMorePortrait(false)
      }
    }, [loadMorePortrait, hasMorePortrait]) //eslint-disable-line
    
    //Check if there is more
    useEffect(() => {
      const isMore = portraitList.length < Portrait.length
      setHasMorePortrait(isMore)
    }, [portraitList]) //eslint-disable-line
  

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
                    
                    <div>
                      {realEstateList.map((item,index) => (
                        item.type === "single" ? 
                          <div className="after-slider">
                            
                            <ReactBeforeSliderComponent
                            
                              firstImage={FIRST_IMAGE}
                              secondImage={SECOND_IMAGE}
                            />
        
                             <div className="after-slider-text">
                                <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                    <h1>2021</h1>
                                </div>
                                
                             </div>
                            </div>
                           
                        :
                          <div className="full-width-slider">
                          <Slider ref={c => {setslider(c)}}  {...settings}>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                            </Slider>
                            <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                   
                                  <div className="pn-button-sec">
                                        <button className="button pn-button" onClick={previous}>
                                          prev frame
                                        </button>
                                        <button className="button pn-button" onClick={next}>
                                          Next frame
                                        </button>
                                  </div>
                            </div>
                          </div>
                      ))}
                    </div>
                    {hasMoreRealEstate ? (
                        <div className="load-more-button">
                          <button  onClick={()=>handleLoadMore("RealEstate")}>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
                        </div>
                    ) : 
                      null
                    }

                  </TabPanel>
                  <TabPanel>
                  <div>
                      {portraitList.map((item,index) => (
                        item.type === "single" ? 
                          <div className="after-slider">
                            
                            <ReactBeforeSliderComponent
                            
                              firstImage={FIRST_IMAGE}
                              secondImage={SECOND_IMAGE}
                            />
        
                             <div className="after-slider-text">
                                <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                    <h1>2021</h1>
                                </div>
                                
                             </div>
                            </div>
                           
                        :
                          <div className="full-width-slider">
                          <Slider ref={c => {setslider(c)}}  {...settings}>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                            </Slider>
                            <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                   
                                  <div className="pn-button-sec">
                                        <button className="button pn-button" onClick={previous}>
                                          prev frame
                                        </button>
                                        <button className="button pn-button" onClick={next}>
                                          Next frame
                                        </button>
                                  </div>
                            </div>
                          </div>
                      ))}
                    </div>
                    {hasMorePortrait ? (
                        <div className="load-more-button">
                          <button  onClick={()=>handleLoadMore("Portrait")}>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
                        </div>
                    ) : null }
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
                  <div>
                      {jewelryList.map((item,index) => (
                        item.type === "single" ? 
                          <div className="after-slider">
                            
                            <ReactBeforeSliderComponent
                            
                              firstImage={FIRST_IMAGE}
                              secondImage={SECOND_IMAGE}
                            />
        
                             <div className="after-slider-text">
                                <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                    <h1>2021</h1>
                                </div>
                                
                             </div>
                            </div>
                           
                        :
                          <div className="full-width-slider">
                          <Slider ref={c => {setslider(c)}}  {...settings}>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                            </Slider>
                            <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                   
                                  <div className="pn-button-sec">
                                        <button className="button pn-button" onClick={previous}>
                                          prev frame
                                        </button>
                                        <button className="button pn-button" onClick={next}>
                                          Next frame
                                        </button>
                                  </div>
                            </div>
                          </div>
                      ))}
                    </div>
                    {hasMoreJewelry ? (
                        <div className="load-more-button">
                          <button  onClick={()=>handleLoadMore("Jewelry")}>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
                        </div>
                    ) : null }
                  </TabPanel>
               
                  <TabPanel>
                  <div>
                      {productList.map((item,index) => (
                        item.type === "single" ? 
                          <div className="after-slider">
                            
                            <ReactBeforeSliderComponent
                            
                              firstImage={FIRST_IMAGE}
                              secondImage={SECOND_IMAGE}
                            />
        
                             <div className="after-slider-text">
                                <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                    <h1>2021</h1>
                                </div>
                                
                             </div>
                            </div>
                           
                        :
                          <div className="full-width-slider">
                          <Slider ref={c => {setslider(c)}}  {...settings}>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                                
                              </div>
                              <div className="full-slider-sub">
                                <img src={full_width_slider}></img>
                              
                              </div>
                            </Slider>
                            <div className="left-after-text">
                                  <h1>{item.title}</h1>
                                   
                                  <div className="pn-button-sec">
                                        <button className="button pn-button" onClick={previous}>
                                          prev frame
                                        </button>
                                        <button className="button pn-button" onClick={next}>
                                          Next frame
                                        </button>
                                  </div>
                            </div>
                          </div>
                      ))}
                    </div>
                    {hasMoreProduct ? (
                        <div className="load-more-button">
                          <button  onClick={()=>handleLoadMore("Product")}>load More <span><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="long-arrow-alt-down" class="svg-inline--fa fa-long-arrow-alt-down fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z"></path></svg></span></button>
                        </div>
                    ) : null }
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
