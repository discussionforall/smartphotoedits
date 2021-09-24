import React from "react"
import { Link } from "gatsby"

const GetStart = ({dataKey}) => {
    return (
        <div className="start-sec">
        <div className="container">
            <div className="row  align-items-center">
            <div className="col-md-12 col-lg-8">
                <div className="start-text">
                <h1>{dataKey&&dataKey?dataKey:'Image Editing & Retouching Services'}</h1>
                </div>
            </div>
            <div className="col-md-12 col-lg-4">
                <div className="start-btn">
                <Link to="/contact">
                    <button>Get Started</button>
                </Link>    
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default GetStart;