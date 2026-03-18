import React from "react";
import { Link } from "react-router-dom";



const RingsMain = () =>{
    return(
        <>
        <div className="ringsmain">
                <div className="title">
                            <Link to="/" >
                            <span>Home  /  Rings</span>
                            </Link>
                        </div>
                <div className="ring-section">
              <div className="content-box">
                  <h1>Rings</h1>
                 <p>
            For <span className="highlight">Diamond Rings for Women</span> or 
            <strong>Unique Wedding Rings</strong>, our collection has something for every style and occasion. 
            Every single ring is highly manufactured with gorgeous lab-grown diamonds. 
            From timeless solitaires to modern statement pieces, we cater to every style. 
            Designed to symbolize love and commitment, each piece reflects elegance, responsibility, and timeless charm.
             </p>
         </div>
         <div className="image-box">
         <img src="./images/ads.webp" alt="Wedding Rings"/>
       </div>
       </div>
        </div>
        </>
        );
}   
export default RingsMain;