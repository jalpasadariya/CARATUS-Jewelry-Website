import React from "react";
import { Link } from "react-router-dom";




const Jewelry = () =>{
    return(
        <>
         <section class="banner-section">
            <div class="banner-container">
        <div class="banner-image">
            <img src="./Images/jewelry_2.webp" alt="Jewelry Model" />
        </div>

        <div class="banner-content">
            <h1 class="banner-title">Make Your Loved <br/> One Shine With <br/>
             Dazzling Jewelry
             </h1>
            <p class="banner-description">
                Surprise your loved one with the timeless sparkle of dazzling jewelry from Caratus Jewels. Perfect for creating unforgettable moments and cherished memories.
            </p>
            <Link>
            <div className="shop-btn" >SHOP GIFT</div>
            </Link>
        </div>
    </div>
</section>
        </>
    )
}
export default Jewelry; 