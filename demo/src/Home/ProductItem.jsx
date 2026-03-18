import React from "react";



const ProductItem = (Props) =>{
    return(
        <>
        <div className="product-item">
                        <div className="product-item-inner">
                            <Link className="image-box">
                         <img src="./Images/1_2.webp" alt="front" className="front-img" />
                         <img src="./Images/model_3.webp" alt="back" className="back-img" />
                          </Link>
                          <div className="wishlist-container">
                                                      <span classname="wishlist">♡</span>
                                                      <Link className="tooltip">Add to Wishlist</Link>
                                                      </div>
                                                      <Link className="product-cart">
                                                      <span>quickshop</span>
                                                      </Link>
                            
                            <div className="text">
                                <Link><p>
                                    0.50 CT Rose GOld Round-Cut Engagement Ring With Side  Round Diamond
                                    </p></Link>
                            </div>
                            <div className="price">
                                <Link> From $396.00</Link>
                            </div>
                        </div>
        </>
        )
}
export default ProductItem;