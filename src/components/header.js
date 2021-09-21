import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../Fonts/Fonts.css"
import logo from '../images/logo.webp'
import img_top from '../images/top-img.webp'
import favicon from '../images/favicon.ico'
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { useState } from "react";




const Header = ({metaTitle, metaDescription }) => {
  const [showText, setShowText] = useState(false);


  const imageClick = () => {
<Link to="/" />
  }
  return (
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription}></meta>
          <meta name="keywords" content="photo editing, photo retouch, image editing"></meta>
          <link rel="icon" type="image/png" sizes="16x16" href={favicon}></link>
        </Helmet>
      <div className="img-top">
      <img src={img_top} width="1366px" height="725px"></img>
      </div>

      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-4 logo-header">
              <Link to="/">
              <img src={logo} onClick={() => imageClick()} width="224px" height="59px"></img>
              </Link>
            </div>
            <div className="col-lg-9 col-md-9 col-8">
              <div className="menu-bar">
                <Link to="/about">About Us</Link>
                <Link to="/sample">Sample</Link>

                <div className="menu-btn">
                  <button>get a quote</button>
                </div>
                <div className="mob-menu" onClick={() => setShowText(!showText)}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>

          {showText && <div className="menubar-mob">
                <Link to="/about">About Us</Link>
                <Link to="/sample">Samples</Link>
          </div>}
        </div>
      </div>
    </>
  )
}


export default Header
