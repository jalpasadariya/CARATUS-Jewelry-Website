import React  from "react";
import { Link } from "react-router-dom";





const Story = () =>{
    return(
        <>
        <div className="story-main">
            <div className="container">
                <div className="story-main-inner">
                    <div className="story-item">
                        <img src="./Images/Frame_30.webp" alt="frame" />
                    </div>
                    <div className="story-item">
                      <h2>
                        our story
                      </h2>
                      <strong>
                        What makes Us Stand Out?
                      </strong>
                      <p>
                        At Caratus Jewels, we combine pinnacle-notch craftsmanship with ethically sourced, 100%<br/> Lab-Grown Diamonds, imparting brilliance without compromise. Discover what makes us <br/>
                        honestly unique & locate the precise image of your love
                      </p>
                      <Link>
                        our story
                      </Link>
                    </div>
                    <div className="story-item">
                        <img src="./Images/Frame_31.webp" alt="frame" />
                        <img src="./Images/Frame_32.webp" alt="frame" />
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}
export default Story;