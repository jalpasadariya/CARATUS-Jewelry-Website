import React from "react";
import { Link } from "react-router-dom";



const ProductOne = () =>{
    return(
        <>
        <div className="product-main">
            <div className="container">
                    <div className="title-Three">
                        <strong>
                          Shop fine Jewelry
                        </strong>
                    </div>
                    <div className="title-two">
                        <span>
                            Earrings    Necklaces
                        </span>
                    </div>
                <div className="product-main-inner">
                    <div className="product-item">
                        <div className="product-item-inner">
                            <Link className="image-box">
                         <img src="./Images/52_1.webp" alt="front" className="front-img" />
                         <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
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
                                    Vertical Diamond Yellow Gold Earrings
                                    </p></Link>
                            </div>
                            <div className="price">
                                <Link> From $473.12</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="product-item-inner">
                             <Link className="image-box">
                         <img src="./Images/52_1.webp" alt="front" className="front-img" />
                         <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
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
                               Pear and Marquise Diamond  cluster Yellow Gold  Earrings
                                </p></Link>
                            </div>
                            <div className="price">
                                <Link> From $413.28</Link>
                            </div>
                        </div>
                    </div>
                    <div className="product-item">
                        <div className="product-item-inner">
                             <Link className="image-box">
                         <img src="./Images/52_1.webp" alt="front" className="front-img" />
                         <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
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
                                    Yellow Gold pear and Marquise Diamond  Cluster Earrings
                                    </p></Link>
                            </div>
                            <div className="price">
                                <Link> From $399.32</Link>
                            </div>
                        </div>
                    </div>
                     <div className="product-item">
                        <div className="product-item-inner">
                             <Link className="image-box">
                         <img src="./Images/52_1.webp" alt="front" className="front-img" />
                         <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
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
                                    Pear and Oval Diamond  Cluster Yellow Gold Earrings
                                    </p></Link>
                            </div>
                            <div className="price">
                                <Link> From $417.28</Link>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
            </div>
        </>
    )
}
export default ProductOne;






