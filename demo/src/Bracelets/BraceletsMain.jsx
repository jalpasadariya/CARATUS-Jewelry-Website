import React from "react";
import { Link } from "react-router-dom";



const BraceletsMain = () =>{
    return(
        <>
        <div className="ringsmain">
                <div className="title">
                            <Link to="/" >
                            <span>Home  /  Bracelets</span>
                            </Link>
                        </div>
                <div className="ring-section">
              <div className="content-box">
                  <h1>Bracelets</h1>
                 <p>
            Beautifully designed by Caratus Jewels, this <strong>Diamond Bracelet</strong> blends an elegant look. From dressing up a plain office look to adding just the right finish to a dazzling cocktail ensemble, the Gold Bracelets for Women are sure to lift your style without much effort. Crafted with precision and timeless appeal, each bracelet reflects sophistication in every detail. Let your wrist sparkle with a piece that transitions effortlessly from day to night.
             </p>
         </div>
         <div className="image-box">
         <img src="./images/Frame_123_1.webp" alt="Wedding Rings"/>
       </div>
       </div>
        </div>
        </>
        );
}
export default BraceletsMain;