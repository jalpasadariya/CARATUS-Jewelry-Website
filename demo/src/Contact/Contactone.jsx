import React from "react";
import { Link } from "react-router-dom";




const ContactOne = () =>{
    return(
        <>
        <div className="contact-main">
                <div className="contact-main-inner">
                    <div className="contact-item">
                        <img src="./images/caratus-hero-image1.webp" alt="" />
                    </div>
                    <div className="contact-item">
                        <div className="text">
                        <h2>
                            Have a Questions?
                        </h2>
                        <p>
                            We're here to help you with any questions you have about our service or products.
                        </p>
                        <Link>
                        read faqs
                        </Link>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}   
export default ContactOne;