import React from "react";
import { Link } from "react-router-dom";







const ContactTwo = () =>{
    return(
        <>
        <div className="contact-two-main">
            <div className="contact-two-main-inner">
                <div className="title">
                    <h2>
                       Got Any Questions? 
                    </h2>
                    <span>
                        Use the form below to get in touch with the sales team
                    </span>
                </div>
                <div className="form">
                    <form>
                        <input type="text" placeholder="Name"/>
                        <input type="email" placeholder="Email"/>
                    </form>
                    <div className="phone">
                        <input type="text" placeholder="Phone Number"/>
                    </div>
                    <textarea name="message"  placeholder="Message"></textarea>
                </div>
                <Link>
                    send Question
                </Link>
                <p>
                    This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
                </p>
            </div>
        </div>

        </>
        )
}   
export default ContactTwo;