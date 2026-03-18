import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";



const EarringsProduct = () =>{
    const [openDropdown, setOpenDropdown] = useState(null);
        const toggleDropdown = (name) => {
            if (openDropdown === name) {
                setOpenDropdown(null); 
            } else {
                setOpenDropdown(name);
            }
        };
    return(
        <>
         <div className="product-main">
                    <div className="container">
                        <div className="filter-container">
                            <div className="filter-left-group">
                                <span className="filter-label">Filter:</span>
                                <div className="dropdown">
                                    <div className="dropdown-select"onClick={() => toggleDropdown('availability')}
                                        >Availability <span>&#9662;</span></div>
                                    {openDropdown === 'availability' && (
            <div className="dropdown-content">
                <div className="dropdown-header">
                    <span>0 selected</span>
                    <button className="reset-btn">Reset</button>
                </div>
                <hr />
                <label className="checkbox-item">
                    <input type="checkbox" /> 
                    <span>In stock (37)</span>
                </label>
                <label className="checkbox-item out-of-stock">
                    <input type="checkbox" disabled /> 
                    <span>Out of stock (0)</span>
                </label>
            </div>
                  )}
            </div>
                                <div className="dropdown">
                                    <div className="dropdown-select"onClick={() => toggleDropdown('price')}
                                        >Price <span>&#9662;</span></div>
                                        {openDropdown === 'price' && (
                                    <div className="dropdown-content">
                    
                                        <input type="range" className="price-slider" min="0" max="1774" />
                                        <div className="price-inputs">
                                            <span>$ </span>
                                            <span className="price">0</span>
                                            <span>to</span>
                                            <span>$</span>
                                            <span className="price">1832.00</span>
                                        </div>
                                    </div>
                                        )}
                                </div>
                                </div>
           <div className="filter-right-group">                    
        <div className="sort-container">
            <span className="sort-label">Sort by:</span>
            <div className="dropdown">
                <div className="dropdown-select" onClick={() => toggleDropdown('sort')}>
                    Best selling<span>&#9662;</span> {openDropdown ==='sort'}
                </div>
                
                {openDropdown === 'sort' && (
                    <div className="dropdown-content sort-dropdown">
                        <ul className="sort-list">
                            <li>Featured</li>
                            <li>Best selling</li>
                            <li>Alphabetically, A-Z</li>
                            <li>Alphabetically, Z-A</li>
                            <li>Price, low to high</li>
                            <li>Price, high to low</li>
                            <li>Date, old to new</li>
                            <li>Date, new to old</li>
                        </ul>
                    </div>
                )}
            </div>
            <span className="product-count">37 Products</span>
        </div>
        </div>
                            </div>
        
                        <div className="product-main-inner">
                            <div className="product-item">
                                <div className="product-item-inner">
                                    <Link className="image-box">
                                 <img src="./Images/1_1_355.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/5_1_e.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/2_3_b.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/3_1_c.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                            <div className="product-item">
                                <div className="product-item-inner">
                                    <Link className="image-box">
                                 <img src="./Images/4_3_6.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
                                                              <Link className="tooltip">Add to Wishlist</Link>
                                                              </div>
                                                              <Link className="product-cart">
                                                              <span>quickshop</span>
                                                              </Link>
                                    
                                    <div className="product-cart"><span>quickshop</span></div>
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
                                 <img src="./Images/5_1_e.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/9_1_8.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/10_1_f30.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                            <div className="product-item">
                                <div className="product-item-inner">
                                    <Link className="image-box">
                                 <img src="./Images/10_1_f30.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
                                                              <Link className="tooltip">Add to Wishlist</Link>
                                                              </div>
                                                              <Link className="product-cart">
                                                              <span>quickshop</span>
                                                              </Link>
                                    
                                    <div className="product-cart"><span>quickshop</span></div>
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
                                 <img src="./Images/2_3_b.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/3_1_c.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                                 <img src="./Images/4_3_6.webp" alt="front" className="front-img" />
                                 <img src="./Images/model_1_29.webp" alt="back" className="back-img" />
                                  </Link>
                                  <div className="wishlist-container">
                                                              <span className="wishlist">♡</span>
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
                       <div class="button-container">
            <button class="load-more-btn">LOAD MORE</button>
                   </div>   
                         </div>
                        </div>
                </div>
        </>
        );
}
export default EarringsProduct;    