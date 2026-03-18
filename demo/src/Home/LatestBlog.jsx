import React from "react";


const LatestBlog = () =>{
    return(
        <>
        <section className="blog-section">
            <div className="container">
                <div className="blog-grid">
                    {/* Blog Card 1 */}
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="./Images/d5a0cff4.webp" alt="Blog" />
                            <div className="blog-date">
                                <span>AUG</span><span>30</span><span>2025</span>
                            </div>
                        </div>
                        <h3 className="blog-title">Engagement Ring Trends In 2025 That Will Sell Fast In 2025</h3>
                        <button className="more-details-btn">More Details</button>
                    </div>

                    {/* Blog Card 2 */}
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="./Images/c054bfa0.webp" alt="Blog" />
                            <div className="blog-date">
                                <span>AUG</span><span>28</span><span>2025</span>
                            </div>
                        </div>
                        <h3 className="blog-title">How To Choose The Perfect Marquise Cut Diamond Engagement 
                            Ring For Your Budget
                        </h3>
                        <button className="more-details-btn">More Details</button>
                    </div>

                    {/* Blog Card 3 */}
                    <div className="blog-card">
                        <div className="blog-image">
                            <img src="./Images/545_1.webp" alt="Blog" />
                            <div className="blog-date">
                                <span>AUG</span><span>08</span><span>2025</span>
                            </div>
                        </div>
                        <h3 className="blog-title">Lab-Grown Diamonds Vs Natural Diamonds-What's The Difference?</h3>
                        <button className="more-details-btn">More Details</button>
                    </div>
                </div>
            </div> 
        </section> 
        </>
    );
};

export default LatestBlog;