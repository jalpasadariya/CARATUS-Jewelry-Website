import React from "react";
import { Link } from "react-router-dom";




const Diamond = () =>{
    return(
        <>
         <div className="diamond-main">
            <div className="container">
                <div className="diamond-main-inner">
                    <div className="diamond-item">
                        <h1>
                            What Are Lab-Grown Diamonds?
                        </h1>
                        <p>
                            Lab-Grown Diamonds are created using advanced technology to replicate the natural diamond-growing process. At Caratus Jewels, we offer 100% Lab-Grown Diamonds that deliver the same beauty, durability, and brilliance as mined diamonds, but with a more sustainable approach.
                        </p>
                        <Link>
                            learn more
                        </Link>
                    </div>
                    <div className="diamond-item">
                        <img src="./Images/image_4.webp" alt="" />
                    </div>
                </div>
            </div>
         </div>
        </>
        )
}
export default Diamond;