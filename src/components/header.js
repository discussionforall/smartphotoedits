import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/style.css"
import "../Fonts/Fonts.css"
import logo from '../images/logo.png'
import img_top from '../images/top-img.png'
import { Link } from "gatsby"

import { useState } from "react";




const Header = () => {
  const [showText, setShowText] = useState(false);


  const imageClick = () => {
<Link to="/" />
  }
  return (
    <>
      <div className="img-top">
        <img src={img_top}></img>
      </div>

      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-4 logo-header">
              <Link to="/">
                <img src={logo} onClick={() => imageClick()}></img>
              </Link>
            </div>
            <div className="col-lg-7 col-md-7 col-8">
              <div className="menu-bar">
                <Link to="/">Home</Link>
                <Link to="/samples">Samples</Link>

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
            <Link to="/">Home</Link>
            <Link to="/samples">Samples</Link>
          </div>}
        </div>
      </div>
    </>
  )
}


export default Header
