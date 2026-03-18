import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";




const Footer = () =>{
    return(
        <>
        <footer class="footer">
    <div class="footer-container">
        <div class="footer-col about">
            <img src="./Images/Caratus-logo.png" alt="Caratus Logo" class="footer-logo"/> <p>Caratus began as a small, family-owned business with a deep commitment to excellence. Rooted in integrity, driven by passion, and inspired by innovation, we have evolved into a brand that prioritizes craftsmanship, quality, and cutting-edge solutions.</p>
        </div>

        <div class="footer-col">
            <h3>INFORMATION</h3>
            <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Order History</a></li>
                <li><a href="#">Specials</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Size Guide</a></li>
            </ul>
        </div>

        <div class="footer-col">
            <h3>POLICIES</h3>
            <ul>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Terms of Services</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
                <li><a href="#">Blogs</a></li>
            </ul>
        </div>

        <div class="footer-col contact">
            <h3>CONTACT US</h3>
            <p>India: Plot-111, Shivdarshan H Soc, Katargam 395004 Surat.</p>
            <p>Phone: +91 70460 68920</p>
            <p style={{ marginTop: '15px' }}>USA: 140 Zabriskie St, Jersey City, NJ 07307</p>
            <p>Mail: info@caratusjewels.com</p>
            <p>Phone: +1 (201) 275-4655</p>
        </div>
    </div>
    <div className="footer-meddle">
        <div className="container">
            <div className="footer-inner">
                <div className="footer-item">
                    <h2>
                        Subscribe & Save 5%
                    </h2>
                    <p>
                        Be the first to know about offers and discounts and latest trends.
                    </p>
                </div>
                {/* <div className="footer-item">
                    <input type="text"/>
                    <div className="icon-one"><MdOutlineEmail />
                    </div>
                    <div className="icon-two"><FaArrowRightLong /></div>
                </div> */}
                <div class="newsletter-container">
    <div class="email-box">
        <i class="envelope-icon"><MdOutlineEmail /></i> 
        <input type="email" placeholder="Your email" />
        <button class="arrow-btn">→</button>
    </div>
</div>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <div className="container">
            <div className="footer-inner">
                <div className="footer-item">
                        © 2025 - Caratus - All rights reserved. Developed by Hiddentechies
                </div>
                <div className="footer-item">
                    <img src="./Images/Group_17_1.avif" alt="" />
                </div>
            </div>
        </div>
    </div>
</footer>
        </>
    )
}
export default Footer;