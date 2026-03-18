import React from "react";
import { Link } from "react-router-dom";



const EarringsMain = () =>{
    return(
        <>
        <div className="ringsmain">
                <div className="title">
                            <Link to="/" >
                            <span>Home  /  Earrings</span>
                            </Link>
                        </div>
                <div className="ring-section">
              <div className="content-box">
                  <h1>Earrings</h1>
                 <p>
           Elevate your style with stunning<strong> Diamond Earrings</strong> Lab Grown Diamond Earrings. Blending modern elegance with sustainable luxury, these dazzling designs add a touch of brilliance to any outfit. For daily wear or more special occasions, every pair is designed to shine as bright as you. Crafted with precision and care, our earrings offer guilt-free glamour without compromising on quality. Experience beauty that aligns with your values—effortlessly chic, endlessly radiant.
             </p>
         </div>
         <div className="image-box">
         <img src="./images/Frame_121_1.jpg" alt="Earrings"/>
       </div>
       </div>
        </div>
        </>
        );
}
export default EarringsMain;