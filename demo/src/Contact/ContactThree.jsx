import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";





const ContactThree = () =>{
    return(
        <>
        <div className="three-main">
            <div className="container">
                <div className="three-main-inner">
                    <div className="item">
                        <div className="icon"><BiPhoneCall />
                        </div>
                        <div className="text">
                            <strong>
                                Call us
                            </strong>
                            <span>
                                +1 (201) 275-4655
                            </span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="icon"><HiOutlineMail />
                        </div>
                        <div className="text">
                            <strong>
                                Emails
                            </strong>
                            <span>
                                info@caratusjewels.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}
export default ContactThree;    