import React from "react";
import { Link } from "react-router-dom";    




const Photo = () =>{
    return(
        <>
          <div className="photo-main">
            <div className="container">
                <div className="photo-main-inner">
                   <Link>
                    <img src="./Images/container_44.webp" alt="" />
                   </Link>
                   <h2>
                    Stunning Necklaces & Pendants
                   </h2>
                   <span>
                    10-20% Discount
                   </span>
                   <Link>
                    SHOP NOW
                   </Link>
                </div>
                <div className="photo-main-inner">
                   <Link>
                    <img src="./Images/container-1.webp" alt="Photo" />
                   </Link>
                   <h2>
                    Exclusive Bracelet Collection
                   </h2>
                   <span>
                    10-20% Discount
                   </span>
                   <Link>
                    SHOP NOW
                   </Link>
                </div>
            </div>
          </div>
        </>
    )
}
export default Photo;