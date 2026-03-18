import React from "react";
import { Link } from "react-router-dom";



const ShopGift = () =>{
    return(
        <>
        <div className="shopgift-main">
            <div className="container">
                <div className="shopgift-main-inner">
                    <div className="shopgift-item">
                        <h2>
                            Exclusive styles
                        </h2>
                        <div className="text">
                            For every love <br />
                            story and <br />
                            promise of  <br />
                            forever.
                        </div>
                        
                        <div className="shop-gift">
                            <Link>shop gift</Link>
                        </div>
                    </div>
                    <div className="shopgift-item">
                        <img src="./Images/shop_perfect.webp" alt="shop" />
                    </div>
                </div>
            </div>
        </div>
        </>
        )
}
export default ShopGift;    